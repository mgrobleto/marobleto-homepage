import { useEffect, useRef } from "react"

type Star = { x: number; y: number; r: number; p: number; s: number }

/** Slowly twinkling stars behind the whole page. Color comes from the --star token so it follows the theme. */
export default function StarField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches
    let stars: Star[] = []
    let color = "#fff"
    let raf = 0

    const readColor = () => {
      color = getComputedStyle(canvas).getPropertyValue("--star").trim() || "#fff"
      if (still) draw(0)
    }
    const size = () => {
      const d = Math.min(devicePixelRatio, 2)
      canvas.width = innerWidth * d
      canvas.height = innerHeight * d
      ctx.setTransform(d, 0, 0, d, 0, 0)
      const n = Math.round((innerWidth * innerHeight) / 7000)
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * innerWidth, y: Math.random() * innerHeight,
        r: Math.random() * 1.1 + 0.3, p: Math.random() * 6.28, s: 0.4 + Math.random() * 1.2,
      }))
    }
    function draw(t: number) {
      ctx!.clearRect(0, 0, innerWidth, innerHeight)
      ctx!.fillStyle = color
      for (const s of stars) {
        ctx!.globalAlpha = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(s.p + t * 0.0006 * s.s))
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.r, 0, 6.28)
        ctx!.fill()
      }
      if (!still) raf = requestAnimationFrame(draw)
    }
    const onResize = () => { size(); if (still) draw(0) }

    const mo = new MutationObserver(readColor)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
    const mq = matchMedia("(prefers-color-scheme: light)")
    mq.addEventListener("change", readColor)
    addEventListener("resize", onResize)
    size()
    color = getComputedStyle(canvas).getPropertyValue("--star").trim() || "#fff"
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      mo.disconnect()
      mq.removeEventListener("change", readColor)
      removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas id="sky" ref={ref} aria-hidden="true" />
}
