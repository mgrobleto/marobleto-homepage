import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { buildIsland } from "./island-model"

/* Buttons under the scene turn the camera to face an object. az = angle around the island (radians). */
const SPOTS = [
  { label: "Code", az: -0.53 },
  { label: "Telescope", az: 1.5 },
  { label: "Painting", az: -1.57 },
  { label: "Books & film", az: -1.19 },
  { label: "Sudoku", az: 2.92 },
  { label: "The cat", az: 0.9 },
]

type Tween = { from: number; d: number; k: number; r: number; y: number }

/** Interactive low-poly island. Load with next/dynamic and ssr:false — it needs the browser. */
export default function LowPolyIsland() {
  const hostRef = useRef<HTMLDivElement>(null)
  const focusRef = useRef<(az: number) => void>(() => {})
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const small = matchMedia("(max-width: 600px)").matches
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      setFailed(true)
      return
    }
    const { world, stars, dispose } = buildIsland()
    const starBaseY = stars.map((s) => s.position.y)

    const scene = new THREE.Scene()
    scene.add(world)
    scene.add(new THREE.HemisphereLight(0xffffff, 0xb59a7a, 1.5))
    const sun = new THREE.DirectionalLight(0xfff1dc, 2.4)
    sun.position.set(18, 40, 26)
    sun.castShadow = !small
    sun.shadow.mapSize.set(2048, 2048)
    Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 120 })
    sun.shadow.bias = -0.0005
    sun.shadow.normalBias = 0.05
    scene.add(sun)

    renderer.setPixelRatio(small ? 1 : Math.min(devicePixelRatio, 2))
    renderer.shadowMap.enabled = !small
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    host.appendChild(renderer.domElement)
    setReady(true)

    const target = new THREE.Vector3(0, 9.5, 1)
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 500)
    const start = new THREE.Vector3(60 * Math.sin(0.2 * Math.PI), 28, 60 * Math.cos(0.2 * Math.PI))
    camera.position.copy(start).add(new THREE.Vector3(0, 0, target.z))
    camera.lookAt(target)

    const resize = () => {
      const w = host.clientWidth, h = host.clientHeight, half = 21, a = w / h
      camera.left = -half * a; camera.right = half * a; camera.top = half; camera.bottom = -half
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    resize()

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.copy(target)
    controls.autoRotate = !still
    controls.autoRotateSpeed = 1.2
    controls.enablePan = false
    controls.enableDamping = true
    controls.enableZoom = false // keeps page scrolling working over the scene
    controls.maxPolarAngle = Math.PI * 0.48

    let frame = still ? 999 : 0
    let tween: Tween | null = null
    let resumeTimer: ReturnType<typeof setTimeout> | undefined

    focusRef.current = (az: number) => {
      frame = 999
      controls.autoRotate = false
      clearTimeout(resumeTimer)
      const off = camera.position.clone().sub(target)
      const from = Math.atan2(off.x, off.z)
      const d = (((az - from + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) - Math.PI
      tween = { from, d, k: 0, r: Math.hypot(off.x, off.z), y: off.y }
      resumeTimer = setTimeout(() => { controls.autoRotate = !still; setActive(null) }, 9000)
    }

    const easeOutCirc = (t: number) => Math.sqrt(1 - Math.pow(t - 1, 4))
    const clock = new THREE.Clock()
    const loop = () => {
      const t = clock.getElapsedTime()
      if (!still) stars.forEach((s, i) => { s.rotation.y = t * 0.8 + i; s.position.y = starBaseY[i] + Math.sin(t * 1.5 + i) * 0.4 })
      if (frame <= 100) {
        // intro spin that slows down
        const rot = -easeOutCirc(frame / 120) * Math.PI * 6
        camera.position.set(
          target.x + start.x * Math.cos(rot) + start.z * Math.sin(rot), start.y,
          target.z + start.z * Math.cos(rot) - start.x * Math.sin(rot))
        camera.lookAt(target)
        frame++
      } else if (tween) {
        tween.k = Math.min(1, tween.k + (still ? 1 : 1 / 50))
        const e = tween.k < 0.5 ? 2 * tween.k * tween.k : 1 - Math.pow(-2 * tween.k + 2, 2) / 2
        const a = tween.from + tween.d * e
        camera.position.set(target.x + tween.r * Math.sin(a), target.y + tween.y, target.z + tween.r * Math.cos(a))
        camera.lookAt(target)
        if (tween.k >= 1) { tween = null; controls.update() }
      } else controls.update()
      renderer.render(scene, camera)
    }

    // Only render while the island is on screen. Intro, tween and auto-rotate state live in closures, so they resume where they stopped.
    let visible = true
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === visible) return
      visible = entry.isIntersecting
      renderer.setAnimationLoop(visible ? loop : null)
    }, { rootMargin: "100px" })
    io.observe(host)
    renderer.setAnimationLoop(loop)

    return () => {
      clearTimeout(resumeTimer)
      io.disconnect()
      renderer.setAnimationLoop(null)
      ro.disconnect()
      controls.dispose()
      dispose()
      renderer.dispose()
      renderer.domElement.remove()
      focusRef.current = () => {}
    }
  }, [])

  return (
    <div className="island">
      <div className="scene3d" ref={hostRef}>
        {!ready && <div className="loading">{failed ? "This browser cannot show the 3D island." : "Building the island…"}</div>}
      </div>
      <div className="explore" role="group" aria-label="Explore the island">
        <span className="label">explore →</span>
        {SPOTS.map((s) => (
          <button key={s.label} className="chip" type="button" aria-pressed={active === s.label}
            onClick={() => { setActive(s.label); focusRef.current(s.az) }}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
