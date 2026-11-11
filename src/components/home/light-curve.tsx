import { useMemo, useState } from "react"

/* Single-lens Paczyński light curve with a simplified planetary bump. Illustrative only, not MulensModel output. */
const W = 600, H = 300, L = 52, R = 14, T = 14, B = 40, T0 = 60
const A = (u: number) => (u * u + 2) / (u * Math.sqrt(u * u + 4))

// fixed "observations" so points don't jump between renders
let seed = 7
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
const OBS_T = Array.from({ length: 70 }, (_, i) => -T0 + (i + rnd() * 0.8) * ((2 * T0) / 70))
const NOISE = OBS_T.map(() => (rnd() + rnd() + rnd() - 1.5) * 0.6)

const mono = "var(--mono)"

export default function LightCurve() {
  const [u0, setU0] = useState(0.2)
  const [tE, setTE] = useState(20)
  const [logQ, setLogQ] = useState(-3)

  const c = useMemo(() => {
    const q = Math.pow(10, logQ)
    const tp = 0.45 * tE
    const sig = Math.max(0.15, tE * Math.sqrt(q) * 1.2)
    const hfac = Math.min(1, 18 * Math.sqrt(q))
    const ap = A(Math.sqrt(u0 * u0 + (tp / tE) ** 2))
    const f = (t: number) =>
      A(Math.sqrt(u0 * u0 + (t / tE) ** 2)) + ap * hfac * Math.exp(-((t - tp) ** 2) / (2 * sig * sig))

    const pts: [number, number][] = []
    let ymax = 0
    for (let i = 0; i <= 500; i++) {
      const t = -T0 + (2 * T0 * i) / 500
      const y = f(t)
      pts.push([t, y])
      ymax = Math.max(ymax, y)
    }
    const step = ymax > 12 ? 5 : ymax > 6 ? 2 : 1
    const top = Math.ceil((ymax * 1.08) / step) * step
    const sx = (t: number) => L + ((t + T0) / (2 * T0)) * (W - L - R)
    const sy = (y: number) => H - B - ((y - 1) / (top - 1)) * (H - T - B)
    const yTicks: number[] = []
    for (let y = 1; y <= top; y += step) yTicks.push(y)
    const hrs = sig * 2.355 * 24
    return {
      q, tp, f, sx, sy, yTicks,
      path: "M" + pts.map(([t, y]) => `${sx(t).toFixed(1)} ${sy(y).toFixed(1)}`).join("L"),
      peak: A(u0).toFixed(1) + "×",
      dur: hrs < 48 ? `${Math.round(hrs)} hours` : `${(hrs / 24).toFixed(1)} days`,
    }
  }, [u0, tE, logQ])

  const midY = (T + H - B) / 2

  return (
    <div className="lab">
      <h3>Try it: a microlensing light curve</h3>
      <p className="hint">Move the sliders to change the event. Points are simulated observations.</p>
      <svg className="curve" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Magnification over time for a microlensing event">
        {c.yTicks.map((y) => (
          <g key={y}>
            <line x1={L} x2={W - R} y1={c.sy(y)} y2={c.sy(y)} stroke="var(--line)" strokeWidth={1} />
            <text x={L - 8} y={c.sy(y) + 4} textAnchor="end" fill="var(--muted)" fontSize={11} fontFamily={mono}>{y}</text>
          </g>
        ))}
        {[-60, -40, -20, 0, 20, 40, 60].map((t) => (
          <text key={t} x={c.sx(t)} y={H - B + 18} textAnchor="middle" fill="var(--muted)" fontSize={11} fontFamily={mono}>{t}</text>
        ))}
        <text x={(L + W - R) / 2} y={H - 4} textAnchor="middle" fill="var(--muted)" fontSize={11}>days from peak</text>
        <text x={14} y={midY} textAnchor="middle" fill="var(--muted)" fontSize={11} transform={`rotate(-90 14 ${midY})`}>magnification A</text>
        {OBS_T.map((t, i) => {
          const y = Math.max(1, c.f(t) + NOISE[i] * 0.06 * c.f(t))
          return <circle key={i} cx={c.sx(t)} cy={c.sy(y)} r={2.6} fill="var(--muted)" fillOpacity={0.6} />
        })}
        <path d={c.path} fill="none" stroke="var(--gold)" strokeWidth={2.2} strokeLinejoin="round" />
        <circle cx={c.sx(c.tp)} cy={c.sy(c.f(c.tp))} r={4} fill="var(--orange)" />
        <text x={c.sx(c.tp) + 8} y={Math.max(T + 12, c.sy(c.f(c.tp)) - 6)} fill="var(--orange)" fontSize={11}>planet</text>
      </svg>
      <div className="controls">
        <label htmlFor="u0">
          <span>Impact parameter u₀ <output>{u0.toFixed(2)}</output></span>
          <input id="u0" type="range" min={0.05} max={1} step={0.01} value={u0} onChange={(e) => setU0(+e.target.value)} />
        </label>
        <label htmlFor="tE">
          <span>Einstein time t<sub>E</sub> <output>{tE} d</output></span>
          <input id="tE" type="range" min={5} max={60} step={1} value={tE} onChange={(e) => setTE(+e.target.value)} />
        </label>
        <label htmlFor="q">
          <span>Planet mass ratio q <output>{c.q.toExponential(1)}</output></span>
          <input id="q" type="range" min={-5} max={-2} step={0.1} value={logQ} onChange={(e) => setLogQ(+e.target.value)} />
        </label>
      </div>
      <div className="readout">
        <span>peak A = <b>{c.peak}</b></span>
        <span>planet signal ≈ <b>{c.dur}</b></span>
      </div>
    </div>
  )
}
