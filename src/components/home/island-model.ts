import * as THREE from "three"

/* Builds Maro's low-poly island: Maro, telescope, easel, books + film camera, laptop, sudoku and the orange cat. */

type Vec3 = [number, number, number]

const C = {
  skin: "#d9a07f", blush: "#e98478", lips: "#8a2c32", eye: "#2b1a14",
  hair: "#241b1a", tie: "#a8323a", olive: "#7c7a2c",
  leather: "#2a221f", top: "#7f8a2c", pants: "#e6dcc6", shoes: "#18171a", sole: "#3a3533", strap: "#8a5a3a",
  camBody: "#1e1e22", camSilver: "#c9ccd2", camLens: "#55596a", camGlass: "#3b6ea5", camBrown: "#5a3a28",
  cat: "#ec9a48", catDark: "#c96b2c", catCream: "#f7dcb4", catPink: "#e58b8b",
  tele: "#eef0f4", teleDark: "#30343c", teleLens: "#4f7fb8",
  wood: "#9a6235", woodDark: "#7a4a26", night: "#24306a", moon: "#f6d36b", star: "#fff3b8", hill: "#4f8a5b",
  paintR: "#e04f4f", paintY: "#f2c84b", paintB: "#4a78d6", paintG: "#5fb36b",
  grass: "#86c16f", grass2: "#6fae5d", dirt: "#8a5f3e", rock: "#9a948c",
  pages: "#f3ead7", paper: "#fbf8f1", ink: "#2a2a35", pencil: "#f2c23a", eraser: "#e88a9a", film: "#f2b632",
}

function hash(a: number, b: number, c = 0) {
  let h = (a * 374761393 + b * 668265263 + c * 1274126177) | 0
  h = (h ^ (h >>> 13)) * 1274126177
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295
}

export function buildIsland() {
  const mats = new Map<string, THREE.MeshStandardMaterial>()
  const disposables: { dispose(): void }[] = []

  const mat = (color: string, o: THREE.MeshStandardMaterialParameters = {}) => {
    const k = color + JSON.stringify(o)
    if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, metalness: 0, ...o }))
    return mats.get(k)!
  }
  const track = <G extends THREE.BufferGeometry>(g: G) => { disposables.push(g); return g }
  const box = (w: number, h: number, d: number) => track(new THREE.BoxGeometry(w, h, d))
  const cyl = (rt: number, rb: number, h: number, s = 6, open = false, ts = 0, tl = Math.PI * 2) =>
    track(new THREE.CylinderGeometry(rt, rb, h, s, 1, open, ts, tl))
  const ico = (r: number, d = 0) => track(new THREE.IcosahedronGeometry(r, d))
  const cone = (r: number, h: number, s = 5) => track(new THREE.ConeGeometry(r, h, s))
  const oct = (r: number) => track(new THREE.OctahedronGeometry(r))
  const torus = (r: number, t: number, rs: number, ts: number) => track(new THREE.TorusGeometry(r, t, rs, ts))

  function add(parent: THREE.Object3D, geo: THREE.BufferGeometry, color: string,
    p: Vec3 = [0, 0, 0], r: Vec3 = [0, 0, 0], s: Vec3 = [1, 1, 1], o?: THREE.MeshStandardMaterialParameters) {
    const m = new THREE.Mesh(geo, mat(color, o))
    m.position.set(...p); m.rotation.set(...r); m.scale.set(...s)
    m.castShadow = m.receiveShadow = true
    parent.add(m)
    return m
  }
  function beam(parent: THREE.Object3D, a: Vec3, b: Vec3, r: number, color: string, seg = 6) {
    const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b)
    const dir = B.clone().sub(A), len = dir.length()
    const m = add(parent, cyl(r, r, len, seg), color)
    m.position.copy(A).add(B).multiplyScalar(0.5)
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
    return m
  }
  // finds the front surface of a mesh so eyes, glasses etc. sit on it
  const rc = new THREE.Raycaster()
  function frontZ(mesh: THREE.Mesh, x: number, y: number) {
    mesh.updateWorldMatrix(true, false)
    rc.set(new THREE.Vector3(x, y, 60), new THREE.Vector3(0, 0, -1))
    const hit = rc.intersectObject(mesh, false)[0]
    return hit ? hit.point.z : 0
  }

  const world = new THREE.Group()
  world.name = "Maro_lowpoly"

  /* island */
  add(world, cyl(17.5, 17, 1, 9), C.grass, [0, -0.5, 1], [0, 0, 0], [1, 1, 0.62])
  add(world, cyl(17, 8, 6, 9), C.dirt, [0, -4, 1], [0, 0, 0], [1, 1, 0.62])
  for (const [x, z, s] of [[-15.5, -3, 1.1], [14.8, 4, 0.9], [-6, -7, 0.8], [8, -6.5, 1.2], [16, -1, 0.7]])
    add(world, ico(s, 0), C.rock, [x, 0.3 * s, z], [hash(x, z), hash(z, x), 0])
  for (let i = 0; i < 22; i++) {
    const a = hash(i, 1) * Math.PI * 2, r = 11 + hash(i, 2) * 5
    add(world, cone(0.35, 0.9 + hash(i, 3) * 0.6, 4), i % 2 ? C.grass2 : C.grass, [Math.cos(a) * r, 0.5, 1 + Math.sin(a) * r * 0.58])
  }

  /* Maro */
  const girl = new THREE.Group()
  for (const sx of [-1, 1]) {
    add(girl, box(2.4, 0.45, 3.7), C.sole, [sx * 1.7, 0.23, 0.7])
    add(girl, box(2.2, 1.1, 3.4), C.shoes, [sx * 1.7, 0.95, 0.6])
    add(girl, cyl(1.0, 1.85, 4.6, 6), C.pants, [sx * 1.7, 3.8, 0])
  }
  add(girl, box(4.8, 1.4, 2.6), C.pants, [0, 6.1, 0])
  const leather = { roughness: 0.45, metalness: 0.1 }
  add(girl, cyl(3.0, 3.9, 6.5, 7), C.leather, [0, 9.6, 0], [0, 0, 0], [1, 1, 0.65], leather)
  add(girl, box(2.3, 3.6, 0.3), C.top, [0, 10.9, 2.0])
  for (const sx of [-1, 1]) {
    add(girl, box(1.7, 1.1, 0.6), C.leather, [sx * 1.3, 12.6, 1.5], [0, 0, sx * 0.45], [1, 1, 1], leather)
    add(girl, cyl(1.0, 1.5, 6.2, 6), C.leather, [sx * 4.3, 9.2, 0], [0, 0, sx * 0.18], [1, 1, 1], leather)
    add(girl, ico(0.75, 0), C.skin, [sx * 4.9, 5.6, 0])
  }
  const metal = { metalness: 0.5, roughness: 0.4 }
  const cam1 = new THREE.Group(); cam1.position.set(0.2, 9, 2.75); girl.add(cam1)
  add(cam1, box(3.2, 1.7, 1.1), C.camBody)
  add(cam1, box(3.2, 0.5, 1.1), C.camSilver, [0, 1.1, 0], [0, 0, 0], [1, 1, 1], metal)
  add(cam1, box(1, 0.7, 0.9), C.camSilver, [-0.4, 1.6, 0], [0, 0, 0], [1, 1, 1], metal)
  add(cam1, cyl(0.7, 0.8, 1.0, 8), C.camLens, [0.3, 0, 0.95], [Math.PI / 2, 0, 0])
  add(cam1, cyl(0.5, 0.5, 0.1, 8), C.camGlass, [0.3, 0, 1.48], [Math.PI / 2, 0, 0], [1, 1, 1], { roughness: 0.2, metalness: 0.3 })
  beam(girl, [-1.2, 10.2, 2.6], [-1.8, 12.6, 1.6], 0.14, C.strap)
  beam(girl, [1.6, 10.2, 2.6], [1.9, 12.6, 1.6], 0.14, C.strap)
  add(girl, cyl(1.3, 1.35, 1.7, 7), C.top, [0, 13.1, 0])
  const head = add(girl, ico(4.2, 1), C.skin, [0, 16.6, 0.3])
  add(girl, ico(4.6, 1), C.hair, [0, 17.0, -1.5])
  add(girl, cyl(4.7, 5.3, 5.2, 9, true, 0.9, Math.PI * 2 - 1.8), C.hair, [0, 14.4, -0.4], [0, 0, 0], [1, 1, 1], { side: THREE.DoubleSide })
  add(girl, track(new THREE.SphereGeometry(4.7, 12, 7, 0, Math.PI * 2, 0, 1.55)), C.hair, [0, 16.6, 0.2], [-0.55, 0, 0])
  const strand = (top: Vec3, tip: Vec3, w: number) => {
    const A = new THREE.Vector3(...top), B = new THREE.Vector3(...tip)
    const d = B.clone().sub(A), len = d.length()
    const m = add(girl, cone(w, len, 3), C.hair, [0, 0, 0], [0, 0, 0], [1, 1, 0.45])
    m.position.copy(A).add(B).multiplyScalar(0.5)
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())
  }
  const onFace = (x: number, y: number, out: number): Vec3 => [x, y, frontZ(head, x, y) + out]
  // side-swept half fringe
  for (const [tx, ty, bx, by, w] of [[-0.6, 20.3, -3.6, 17.6, 1.8], [0.8, 20.3, -2.0, 17.3, 1.9], [2.0, 20.1, -0.4, 17.5, 1.6], [2.9, 19.8, 1.1, 18.1, 1.2]])
    strand(onFace(tx, ty, 0.55), onFace(bx, by, 0.6), w)
  // face-framing strands
  for (const sx of [-1, 1]) strand(onFace(sx * 3.4, 19.0, 0.5), [sx * 3.8, 12.6, frontZ(head, sx * 3.4, 15) + 0.4], 1.0)
  // two buns with red hair ties
  const hc = new THREE.Vector3(0, 16.6, 0.3)
  for (const sx of [-1, 1]) {
    const bun = new THREE.Vector3(sx * 3.0, 21.2, -0.6)
    add(girl, ico(1.9, 1), C.hair, [bun.x, bun.y, bun.z])
    const dir = bun.clone().sub(hc).normalize()
    const tie = add(girl, torus(1.7, 0.42, 5, 10), C.tie)
    tie.position.copy(hc).add(dir.clone().multiplyScalar(4.75))
    tie.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir)
  }
  girl.updateMatrixWorld(true)
  for (const sx of [-1, 1]) {
    const ex = sx * 1.5, ey = 16.0
    add(girl, box(0.55, 0.95, 0.6), C.eye, [ex, ey, frontZ(head, ex, ey)])
    add(girl, cyl(0.65, 0.65, 0.25, 6), C.blush, [sx * 2.4, 14.8, frontZ(head, sx * 2.4, 14.8)], [Math.PI / 2, 0, 0])
    add(girl, torus(1.2, 0.27, 5, 10), C.olive, [ex, ey, frontZ(head, ex, ey) + 0.8], [0, 0, 0], [1, 1, 1], { roughness: 0.4 })
    beam(girl, [sx * 2.65, 16.3, frontZ(head, ex, ey) + 0.7], [sx * 4.0, 16.5, 0.6], 0.16, C.olive)
  }
  add(girl, box(0.9, 0.25, 0.3), C.olive, [0, 16.35, frontZ(head, 0, 16.3) + 0.8])
  add(girl, box(1.3, 0.45, 0.5), C.lips, [0, 13.9, frontZ(head, 0, 13.9)])
  girl.position.set(0, 0, -0.5)
  world.add(girl)

  /* telescope */
  const TP: Vec3 = [10, 11.2, 0]
  for (const f of [[7, 0, -3], [13, 0, -3], [10, 0, 4]] as Vec3[]) beam(world, TP, f, 0.22, C.teleDark, 4)
  add(world, box(1.6, 1.4, 1.6), C.teleDark, [10, 11.6, 0])
  beam(world, [10, 12, 0], [10.5, 14, 0], 0.4, C.teleDark)
  beam(world, [6.6, 10.6, 0], [14.6, 18.6, 0], 1.0, C.tele, 8)
  beam(world, [14.2, 18.2, 0], [15.3, 19.3, 0], 1.15, C.teleDark, 8)
  beam(world, [7.6, 11.6, 0], [8.1, 12.1, 0], 1.08, C.teleDark, 8)
  beam(world, [15.3, 19.3, 0], [15.35, 19.35, 0], 0.95, C.teleLens, 8)
  beam(world, [6.5, 10.5, 0], [5.7, 11.5, 0], 0.35, C.teleDark)
  beam(world, [9.3, 13.9, 1.2], [11.6, 16.2, 1.2], 0.32, C.teleDark)

  /* easel */
  add(world, box(0.5, 15, 0.5), C.wood, [-14.2, 7.4, 1], [0, 0, -0.13])
  add(world, box(0.5, 15, 0.5), C.wood, [-9.8, 7.4, 1], [0, 0, 0.13])
  add(world, box(0.5, 14, 0.5), C.woodDark, [-12, 7, -1.6], [-0.28, 0, 0])
  add(world, box(8.2, 0.5, 1.4), C.wood, [-12, 6, 1.6])
  add(world, box(7.6, 7.6, 0.4), C.night, [-12, 10.4, 1.3])
  add(world, box(7.6, 1.6, 0.1), C.hill, [-12, 7.4, 1.55])
  add(world, box(4.2, 1.4, 0.1), C.hill, [-13.4, 8.2, 1.56], [0, 0, 0.25])
  add(world, cyl(1.1, 1.1, 0.12, 8), C.moon, [-10, 12.4, 1.55], [Math.PI / 2, 0, 0])
  for (const [x, y] of [[-14.3, 13], [-12.6, 11.4], [-13.4, 13.8], [-11.4, 13.2], [-14.5, 11.2]]) add(world, oct(0.25), C.star, [x, y, 1.6])
  add(world, box(8.2, 0.5, 0.6), C.wood, [-12, 14.4, 1.3]);
  [C.paintR, C.paintY, C.paintB].forEach((c, i) => add(world, cyl(0.4, 0.4, 0.8, 6), c, [-14.4 + i * 1.5, 6.65, 1.9]))
  add(world, cyl(1.7, 1.7, 0.25, 7), C.wood, [-15.6, 0.15, 4.2], [0, 0, 0], [1, 1, 0.75]);
  [C.paintR, C.paintY, C.paintB, C.paintG].forEach((c, i) => add(world, ico(0.3, 0), c, [-16.4 + i * 0.55, 0.4, 3.8 + (i % 2) * 0.6]))
  beam(world, [-14.6, 0.35, 5.2], [-12.8, 0.35, 6.6], 0.12, C.woodDark, 4)

  /* books + second film camera */
  const stack = new THREE.Group(); stack.position.set(-11.5, 0, 5.6); world.add(stack)
  let sy = 0
  for (const [c, w, h, d, ry] of [["#7b2d26", 4, 1, 3.2, 0.05], ["#6b7a3a", 3.6, 0.9, 3, -0.12], ["#2f4a6b", 3.8, 1.1, 2.8, 0.15], ["#d19a2c", 3.4, 0.8, 3, -0.05], ["#5a3b2a", 3.6, 1, 2.7, 0.1]] as [string, number, number, number, number][]) {
    const b = new THREE.Group(); b.position.y = sy + h / 2; b.rotation.y = ry; stack.add(b)
    add(b, box(w, h, d), c)
    add(b, box(w - 0.5, h - 0.25, d - 0.25), C.pages, [0.3, 0, 0])
    sy += h
  }
  const cam2 = new THREE.Group(); cam2.position.set(0, sy + 0.65, 0.2); cam2.rotation.y = 0.35; stack.add(cam2)
  add(cam2, box(2.6, 1.3, 1.1), C.camBrown)
  add(cam2, box(2.6, 0.45, 1.1), C.camSilver, [0, 0.85, 0], [0, 0, 0], [1, 1, 1], metal)
  add(cam2, box(0.6, 0.4, 0.6), C.camSilver, [0.7, 1.25, 0])
  add(cam2, cyl(0.55, 0.6, 0.7, 8), C.camLens, [0, 0, 0.85], [Math.PI / 2, 0, 0])
  add(cam2, cyl(0.42, 0.42, 0.1, 8), C.camGlass, [0, 0, 1.22], [Math.PI / 2, 0, 0])
  add(world, cyl(0.45, 0.45, 1.1, 8), C.film, [-8.6, 0.55, 7.6])
  add(world, cyl(0.47, 0.47, 0.15, 8), C.camBody, [-8.6, 1.15, 7.6])
  add(world, cyl(0.45, 0.45, 1.1, 8), C.film, [-8.0, 0.45, 9.1], [0, 0.6, Math.PI / 2])

  /* open book */
  const openBook = new THREE.Group(); openBook.position.set(11, 0, 7.2); openBook.rotation.y = -0.3; world.add(openBook)
  add(openBook, box(4.6, 0.15, 3.1), "#5a3b2a", [0, 0.08, 0])
  for (const sx of [-1, 1]) {
    add(openBook, box(2.1, 0.3, 2.8), C.pages, [sx * 1.1, 0.3, 0], [0, 0, sx * 0.1])
    for (let i = 0; i < 4; i++) add(openBook, box(1.4, 0.05, 0.12), "#b9b09c", [sx * 1.1, 0.57, -0.9 + i * 0.55], [0, 0, sx * 0.1])
  }

  /* laptop: code + astronomy data */
  const screenTex = screenTexture(); disposables.push(screenTex)
  const laptop = new THREE.Group(); laptop.position.set(-3.2, 0, 6.4); laptop.rotation.y = 0.08; world.add(laptop)
  const alu = { roughness: 0.35, metalness: 0.4 }
  add(laptop, box(7, 0.4, 4.6), "#b8bcc4", [0, 0.2, 0], [0, 0, 0], [1, 1, 1], alu)
  add(laptop, box(6.2, 0.06, 2.2), "#3a3d45", [0, 0.42, -0.8])
  add(laptop, box(2.2, 0.05, 1.3), "#d4d7de", [0, 0.42, 1.3])
  const lid = new THREE.Group(); lid.position.set(0, 0.4, -2.3); lid.rotation.x = -0.18; laptop.add(lid)
  add(lid, box(7, 4.6, 0.3), "#b8bcc4", [0, 2.3, 0], [0, 0, 0], [1, 1, 1], alu)
  const scrMat = new THREE.MeshBasicMaterial({ map: screenTex }); disposables.push(scrMat)
  const scr = new THREE.Mesh(track(new THREE.PlaneGeometry(6.4, 4.0)), scrMat)
  scr.position.set(0, 2.35, 0.16); lid.add(scr)

  /* sudoku */
  const sud = new THREE.Group(); sud.position.set(1.5, 0.1, -5.6); sud.rotation.y = 0.12; sud.scale.set(0.75, 1, 0.75); world.add(sud)
  add(sud, box(8, 0.15, 8), C.paper)
  for (let i = 0; i <= 9; i++) {
    const t = i % 3 === 0 ? 0.14 : 0.05, p = -4 + (i * 8) / 9
    add(sud, box(8, 0.04, t), C.ink, [0, 0.1, p])
    add(sud, box(t, 0.04, 8), C.ink, [p, 0.1, 0])
  }
  for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) {
    const h = hash(i, j, 7)
    if (h < 0.68) continue
    add(sud, box(0.28, 0.05, 0.48), h > 0.84 ? C.ink : "#8a8a98", [-4 + ((i + 0.5) * 8) / 9, 0.11, -4 + ((j + 0.5) * 8) / 9])
  }
  beam(sud, [-2.5, 0.3, 2.6], [1.5, 0.3, 0.4], 0.2, C.pencil, 6)
  beam(sud, [-2.5, 0.3, 2.6], [-2.9, 0.3, 2.82], 0.21, C.eraser, 6)

  /* orange cat */
  const cat = new THREE.Group()
  add(cat, cyl(1.4, 2.1, 3.6, 7), C.cat, [0, 1.8, -0.3])
  for (const yy of [1.0, 2.0, 3.0]) { const r = 2.1 - (yy / 3.6) * 0.7 + 0.07; add(cat, cyl(r, r + 0.04, 0.32, 7), C.catDark, [0, yy, -0.3]) }
  add(cat, ico(1.25, 0), C.catCream, [0, 2.1, 1.2], [0, 0, 0], [1, 1.3, 0.6])
  for (const sx of [-1, 1]) add(cat, ico(0.5, 0), C.catCream, [sx * 0.7, 0.4, 1.5])
  const chead = add(cat, ico(1.9, 1), C.cat, [0, 5.0, 0.4], [0, 0, 0], [1.1, 0.95, 1])
  for (const sx of [-1, 1]) {
    add(cat, cone(0.7, 1.3, 4), C.cat, [sx * 1.1, 6.7, 0.3], [0, 0, -sx * 0.25])
    add(cat, cone(0.4, 0.8, 4), C.catPink, [sx * 1.1, 6.6, 0.62], [0, 0, -sx * 0.25])
  }
  for (const x of [-0.5, 0, 0.5]) add(cat, box(0.22, 0.2, 1.4), C.catDark, [x, 6.75, -0.1])
  cat.updateMatrixWorld(true)
  for (const sx of [-1, 1]) add(cat, box(0.35, 0.62, 0.4), C.eye, [sx * 0.75, 5.35, frontZ(chead, sx * 0.75, 5.35)])
  add(cat, ico(0.8, 0), C.catCream, [0, 4.4, frontZ(chead, 0, 4.4) - 0.1], [0, 0, 0], [1.2, 0.7, 0.6])
  add(cat, ico(0.24, 0), C.catPink, [0, 4.75, frontZ(chead, 0, 4.75) + 0.25])
  const tail: Vec3[] = [[1.6, 0.4, -1.2], [2.4, 0.4, 0.2], [2.3, 0.4, 1.6], [1.4, 0.5, 2.5]]
  for (let i = 0; i < tail.length - 1; i++) beam(cat, tail[i], tail[i + 1], 0.42, i % 2 ? C.catDark : C.cat)
  cat.position.set(5.6, 0, 5.4); cat.rotation.y = -0.35
  world.add(cat)

  /* floating stars */
  const stars: THREE.Mesh[] = []
  for (const [x, yy, z] of [[-6, 24, -3], [8, 26, 2], [-12, 21, -5], [13, 24, -6], [0, 27, -2]] as Vec3[])
    stars.push(add(world, oct(0.6), C.star, [x, yy, z], [0, 0, 0], [1, 1, 1], { emissive: "#f6d36b", emissiveIntensity: 0.6 }))

  const dispose = () => {
    disposables.forEach((d) => d.dispose())
    mats.forEach((m) => m.dispose())
  }
  return { world, stars, dispose }
}

function screenTexture() {
  const cv = document.createElement("canvas"); cv.width = 512; cv.height = 320
  const g = cv.getContext("2d")!
  g.fillStyle = "#1e2230"; g.fillRect(0, 0, 512, 320)
  g.fillStyle = "#2a2f40"; g.fillRect(0, 0, 512, 26)
  ;["#e06c75", "#e5c07b", "#98c379"].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(16 + i * 18, 13, 5, 0, 7); g.fill() })
  g.font = "15px monospace"
  const code: [string, string][][] = [
    [["import ", "#c678dd"], ["numpy ", "#e5c07b"], ["as ", "#c678dd"], ["np", "#e5c07b"]],
    [["from ", "#c678dd"], ["astropy.io ", "#e5c07b"], ["import ", "#c678dd"], ["fits", "#e5c07b"]],
    [["", "#fff"]],
    [["data ", "#e06c75"], ["= fits.", "#abb2bf"], ["open", "#61afef"], ["(", "#abb2bf"], ['"m31.fits"', "#98c379"], [")", "#abb2bf"]],
    [["flux ", "#e06c75"], ["= data[", "#abb2bf"], ["1", "#d19a66"], ["].data", "#abb2bf"]],
    [["t, f ", "#e06c75"], ["= ", "#abb2bf"], ["lightcurve", "#61afef"], ["(flux)", "#abb2bf"]],
    [["plt.", "#abb2bf"], ["plot", "#61afef"], ["(t, f)", "#abb2bf"]],
    [["# ✦ transit detected", "#7f8796"]],
  ]
  code.forEach((ln, i) => { let x = 14; ln.forEach(([t, c]) => { g.fillStyle = c; g.fillText(t, x, 56 + i * 24); x += g.measureText(t).width }) })
  const X0 = 300, Y0 = 280, W = 196, H = 120
  g.strokeStyle = "#7f8796"; g.lineWidth = 2; g.beginPath(); g.moveTo(X0, Y0 - H); g.lineTo(X0, Y0); g.lineTo(X0 + W, Y0); g.stroke()
  g.strokeStyle = "#f6d36b"; g.lineWidth = 2.5; g.beginPath()
  for (let i = 0; i <= 60; i++) {
    const t = i / 60, dip = Math.abs(t - 0.55) < 0.1 ? 38 : 0
    const yy = Y0 - 80 + dip + Math.sin(i * 1.7) * 4
    if (i) g.lineTo(X0 + t * W, yy); else g.moveTo(X0 + t * W, yy)
  }
  g.stroke()
  g.fillStyle = "#fff3b8"
  for (let i = 0; i < 14; i++) g.fillRect(310 + hash(i, 1) * 180, 172 + hash(i, 2) * 30, 2, 2)
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace
  return tex
}
