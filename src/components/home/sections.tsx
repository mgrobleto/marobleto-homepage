import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import LightCurve from "./light-curve"

import adAstraCover from "../../../public/assets/works/adastrahub/home.png"
import inventariaCover from "../../../public/assets/works/inventariaTec/homePage.png"
import codelandCover from "../../../public/assets/works/codeland/homepage.png"
import filmMasatepe from "../../../public/assets/photography/masatepe/4.webp"
import filmLeon from "../../../public/assets/photography/leonPeople/4.webp"
import filmCatarina from "../../../public/assets/photography/catarina/2.webp"

const LowPolyIsland = dynamic(() => import("./low-poly-island"), {
  ssr: false,
  loading: () => (
    <div className="island"><div className="scene3d"><div className="loading">Building the island…</div></div></div>
  ),
})

export const RESUME_URL = "https://drive.google.com/file/d/1ScxtCe8317mtrbtOcrKmaGu5MRqRc41Z/view?usp=drive_link"
const EMAIL = "magabriela0715@gmail.com"

const ext = { target: "_blank", rel: "noopener noreferrer" } as const

/* ---------------- Nav ---------------- */
export function Nav() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme")
      if (saved === "light" || saved === "dark") setTheme(saved)
    } catch {}
  }, [])
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () => {
    const current = theme ?? (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
    const next = current === "dark" ? "light" : "dark"
    setTheme(next)
    try { localStorage.setItem("theme", next) } catch {}
  }

  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top">maro<span>.</span>robleto</a>
        <nav className="navlinks" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#community">Community</a>
          <a href="#projects">Projects</a>
          <a href="#photography">Photography</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="iconbtn" type="button" onClick={toggle} aria-label="Switch light or dark theme">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>
      </div>
    </header>
  )
}

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <div className="wrap hero">
      <div>
        <div className="eyebrow">Masatepe, Masaya · Nicaragua · 11.9° N</div>
        <h1>Hi, I&apos;m Maro. I build interfaces and study the <em>night sky</em>.</h1>
        <p className="lede">
          Frontend developer working in React, TypeScript and AWS. I also model gravitational microlensing events in Python,
          mentor students in an international astrophysics program and take part in Nicaragua&apos;s astronomy community.
        </p>
        <div className="cta">
          <a className="btn primary" href="#projects">See my work</a>
          <a className="btn" href={RESUME_URL} {...ext}>Résumé</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
        <div className="status"><span className="dot" />Open to frontend roles · Nov 2026</div>
      </div>
      <LowPolyIsland />
    </div>
  )
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section className="block" id="about">
      <div className="wrap about">
        <div className="text">
          <div className="sechead"><h2>About</h2></div>
          <p>
            I&apos;m a frontend developer from Masatepe, Nicaragua, with a degree in Computer Engineering from the Universidad
            Nacional de Ingeniería. I like work that needs both careful engineering and a good eye: reusable components, clear
            interfaces and fast pages.
          </p>
          <p>
            I&apos;m also a science enthusiast and communicator. Through research, mentoring and Nicaragua&apos;s amateur astronomy
            and planetary science networks, I try to make astronomy easier to reach for students in Central America and the Caribbean.
          </p>
          <p>Away from the keyboard: painting, film photography, books, sudoku and an orange cat who supervises everything.</p>
        </div>
        <dl className="facts">
          <div><dt>Based in</dt><dd>Masatepe, Masaya, Nicaragua</dd></div>
          <div><dt>Focus</dt><dd>Frontend · React · AWS</dd></div>
          <div><dt>Science</dt><dd>Exoplanet microlensing</dd></div>
          <div><dt>Degree</dt><dd>B.Sc. Computer Engineering, UNI 2024</dd></div>
          <div><dt>Languages</dt><dd>Spanish · English</dd></div>
        </dl>
      </div>
    </section>
  )
}

/* ---------------- Experience ---------------- */
type Job = { when: string; kind: string; title: string; org: string; points: React.ReactNode[]; stack?: string[] }
const JOBS: Job[] = [
  {
    when: "Jul 2026 – Nov 2026", kind: "Leadership", title: "Student Mentor",
    org: "Central American–Caribbean Bridge in Astrophysics · Remote",
    points: [
      "Mentored an undergraduate research student through a four-month international internship.",
      "Gave weekly technical and professional guidance, and reviewed the final symposium talk and research report.",
    ],
  },
  {
    when: "Jul 2025 – Oct 2026", kind: "Work", title: "Frontend Developer", org: "Sistemática Internacional Inc. · Managua",
    points: [
      "Built and maintained web applications with React, Vite, Fuse React, Material UI and Tailwind CSS.",
      "Created reusable, responsive UI components shared across products.",
      "Connected frontends to AWS AppSync, DynamoDB and S3.",
      "Debugged production issues, improved performance and took part in code reviews in an Agile team.",
    ],
    stack: ["React", "TypeScript", "Vite", "Fuse React", "MUI", "Tailwind", "AppSync", "DynamoDB", "S3"],
  },
  {
    when: "Fall 2025", kind: "Research", title: "Research Intern", org: "Central American–Caribbean Bridge in Astrophysics · Remote",
    points: [<>Studied gravitational microlensing events to find conditions that favor detecting habitable exoplanets. <a href="#research">Read more ↓</a></>],
  },
  {
    when: "2020 – 2024", kind: "Education", title: "B.Sc. Computer Engineering", org: "Universidad Nacional de Ingeniería · Managua",
    points: ["Thesis: an inventory and billing SaaS for small businesses (Angular, Django REST Framework, SQL Server)."],
  },
]

export function Experience() {
  return (
    <section className="block" id="experience">
      <div className="wrap">
        <div className="sechead"><h2>Experience</h2><span className="tag">work · research · leadership</span></div>
        <ol className="timeline">
          {JOBS.map((j) => (
            <li key={j.title + j.when}>
              <div className="when">{j.when}</div>
              <div>
                <span className="kind">{j.kind}</span>
                <h3>{j.title}</h3>
                <div className="org">{j.org}</div>
                <ul className="bullets">{j.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
                {j.stack && <div className="stack">{j.stack.map((s) => <span key={s}>{s}</span>)}</div>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------- Research ---------------- */
export function Research() {
  return (
    <section className="block" id="research">
      <div className="wrap">
        <div className="sechead"><h2>Astronomy research</h2><span className="tag">gravitational microlensing</span></div>
        <div className="research">
          <div className="text">
            <p>
              When a star passes in front of a more distant one, its gravity bends and magnifies the background light. A planet
              around the lens star can add a short spike to that brightening, sometimes only hours long.
            </p>
            <p>In my research internship I looked for the combinations of parameters that make planets in the habitable zone easier to detect this way.</p>
            <ul className="bullets">
              <li>Modeled light curves in Python with MulensModel.</li>
              <li>Varied mass ratio <i>q</i>, projected separation <i>s</i> and Einstein crossing time <i>t<sub>E</sub></i>.</li>
              <li>Processed synthetic and observed datasets and mapped detectability across parameter space.</li>
              <li>Presented results at international research meetings.</li>
            </ul>
          </div>
          <LightCurve />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Community ---------------- */
const COMMUNITY = [
  {
    role: "Member", name: "Asociación de Astronomía Aficionada Los Cadejos",
    text: "An amateur astronomy association in Nicaragua that brings people together to observe and learn about the sky.",
  },
  {
    role: "Member", name: "Red Nicaragüense de Ciencias Planetarias y Exploración Espacial",
    text: "A Nicaraguan network for planetary science and space exploration.",
  },
  {
    role: "Student Mentor · 2026", name: "CAC Bridge in Astrophysics",
    text: "A remote program that connects students from Central America and the Caribbean with astrophysics research. I was first an intern, then a mentor.",
  },
  {
    role: "Creator · outreach", name: "Ad Astra Hub",
    text: "A friendly site for exploring NASA's Astronomy Picture of the Day by date, built so anyone can enjoy space imagery.",
    link: { href: "https://mgrobleto.github.io/AdAstraHubWebsite/", label: "Visit Ad Astra Hub →" },
  },
]

export function Community() {
  return (
    <section className="block" id="community">
      <div className="wrap">
        <div className="sechead">
          <h2>Community &amp; outreach</h2><span className="tag">mentoring · astronomy in Nicaragua</span>
          <p>Groups where I give my time to students, amateur astronomers and science communication.</p>
        </div>
        <div className="cgrid">
          {COMMUNITY.map((c) => (
            <article className="ccard" key={c.name}>
              <span className="role">{c.role}</span>
              <h3>{c.name}</h3>
              <p>{c.text}</p>
              {c.link && <a href={c.link.href} {...ext}>{c.link.label}</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Projects ---------------- */
type Project = { name: string; text: string; cover: StaticImageData; stack: string[]; live?: string; code?: string }
const PROJECTS: Project[] = [
  {
    name: "Ad Astra Hub", cover: adAstraCover,
    text: "Browse NASA's Astronomy Picture of the Day for any date, with images and videos in a clean, minimal layout.",
    stack: ["React", "React Query", "Tailwind", "MUI", "Framer Motion", "NASA API"],
    live: "https://mgrobleto.github.io/AdAstraHubWebsite/", code: "https://github.com/mgrobleto/AdAstraHubWebsite",
  },
  {
    name: "Inventária Tec", cover: inventariaCover,
    text: "My thesis: a SaaS platform for inventory, billing and customers for small businesses, with authentication and reports.",
    stack: ["Angular", "Django REST", "SQL Server", "Angular Material"],
    code: "https://github.com/mgrobleto/InventariTecFrontendApp",
  },
  {
    name: "CodeLand", cover: codelandCover,
    text: "A community site that helps students learn C with Turbo C 2.0, where they can create accounts and share projects.",
    stack: ["Python", "Flask", "Firebase", "Bootstrap"],
    live: "https://codeland.onrender.com/", code: "https://github.com/mgrobleto/CodeLand",
  },
]
const OTHER_PROJECTS = [
  { name: "Be Kind", href: "https://github.com/J2rg3n-B3rm2d3z/FinalProject", desc: "Kotlin app where users report which ATMs have cash", stack: "Kotlin · Firebase · Google Maps" },
  { name: "To Do App", href: "https://github.com/mgrobleto/todo-app", desc: "mobile to-do list", stack: "React Native · Expo · Moti" },
  { name: "Ad Astra Hub Login", href: "https://github.com/mgrobleto/Ad-Astra-Hub-Login-with-React-and-Firebase", desc: "sign-in flow", stack: "React · Firebase" },
  { name: "Vintage Outdoor", href: "https://vintage-outdoor-sample.vercel.app/", desc: "sample site", code: "https://github.com/mgrobleto/vintage-outdoor-sample", stack: "Frontend" },
]

export function Projects() {
  return (
    <section className="block" id="projects">
      <div className="wrap">
        <div className="sechead"><h2>Projects</h2><span className="tag">selected work</span></div>
        <div className="pgrid">
          {PROJECTS.map((p) => (
            <article className="pcard" key={p.name}>
              <div className="cover">
                <Image src={p.cover} alt={`${p.name} screenshot`} fill sizes="(max-width: 860px) 100vw, 360px" placeholder="blur" />
              </div>
              <div className="body">
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <div className="stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                <div className="links">
                  {p.live && <a href={p.live} {...ext}>Live site ↗</a>}
                  {p.code && <a href={p.code} {...ext}>Code ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="others">
          <h3>Other projects</h3>
          <ul className="olist">
            {OTHER_PROJECTS.map((o) => (
              <li key={o.name}>
                <span>
                  <a href={o.href} {...ext}>{o.name} ↗</a>{" "}
                  <span className="desc">· {o.desc}{o.code && <> · <a href={o.code} {...ext}>code</a></>}</span>
                </span>
                <span className="desc">{o.stack}</span>
              </li>
            ))}
          </ul>
          <p className="desc" style={{ marginTop: 14 }}><a href="https://github.com/mgrobleto" {...ext}>All code on GitHub →</a></p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Photography ---------------- */
export function Photography() {
  const frames = [
    { src: filmMasatepe, alt: "Masatepe, my hometown" },
    { src: filmLeon, alt: "People in León" },
    { src: filmCatarina, alt: "Catarina" },
  ]
  return (
    <section className="block" id="photography">
      <div className="wrap photo">
        <div className="text">
          <div className="sechead"><h2>Photography</h2><span className="tag">35mm · analog</span></div>
          <p>
            I shoot analog film. I like capturing everyday moments of people, my country and my hometown, and finding beauty in
            the simplest things around us.
          </p>
          <Link className="btn primary" href="/photography">See the gallery →</Link>
        </div>
        <Link href="/photography" className="filmstrip" aria-label="Open the photography gallery">
          {frames.map((f) => (
            <div className="frame" key={f.alt}>
              <Image src={f.src} alt={f.alt} fill sizes="(max-width: 860px) 33vw, 200px" placeholder="blur" />
            </div>
          ))}
          <div className="filmcap"><span>PORTRA 400</span><span>▸ 12</span><span>13</span></div>
        </Link>
      </div>
    </section>
  )
}

/* ---------------- Certifications + skills ---------------- */
const CERTS = [
  { name: "AWS Certified Cloud Practitioner", who: "Amazon Web Services", year: "2025", verify: "https://www.credly.com/badges/5cdacfc1-bf3f-4c90-a993-a1d0cce81911/linked_in_profile" },
  { name: "JSA – Certified Associate JavaScript Programmer", who: "JS Institute", year: "2026", verify: "https://www.credly.com/badges/760769e0-b911-4139-a4f3-3e0863238145/public_url" },
  { name: "CS50x: Introduction to Computer Science", who: "Harvard University", year: "2021" },
]
const SKILLS: [string, string[]][] = [
  ["Languages", ["JavaScript", "TypeScript", "Python", "C", "SQL", "HTML/CSS"]],
  ["Frontend", ["React", "Next.js", "Angular", "Vite", "MUI", "Tailwind", "Bootstrap"]],
  ["Cloud", ["AWS AppSync", "DynamoDB", "S3"]],
  ["Science & tools", ["MulensModel", "Git", "Figma", "Postman"]],
]

export function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap two">
        <div>
          <h2 className="subhead">Certifications</h2>
          <ul className="certs">
            {CERTS.map((c) => (
              <li key={c.name}>
                <div>
                  {c.name}
                  <div className="who">{c.who}{c.verify && <> · <a href={c.verify} {...ext}>Verify ↗</a></>}</div>
                </div>
                <span className="yr">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills">
          <h2 className="subhead">Skills</h2>
          {SKILLS.map(([group, items]) => (
            <div key={group}>
              <h3>{group}</h3>
              <div className="stack">{items.map((s) => <span key={s}>{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const [label, setLabel] = useState("Copy email")
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setLabel("Copied")
    } catch {
      setLabel("Select the email to copy it")
    }
    setTimeout(() => setLabel("Copy email"), 2500)
  }
  return (
    <section className="block" id="contact">
      <div className="wrap contact">
        <h2>Let&apos;s build something, or talk about exoplanets.</h2>
        <div className="row">
          <a className="email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button className="btn" type="button" onClick={copy}>{label}</button>
          <a className="btn" href="https://www.linkedin.com/in/marobleto" {...ext}>LinkedIn</a>
          <a className="btn" href="https://github.com/mgrobleto" {...ext}>GitHub</a>
          <a className="btn" href="https://www.instagram.com/marobleto/" {...ext}>Instagram</a>
          <a className="btn" href={RESUME_URL} {...ext}>Résumé</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">© 2026 María Gabriela Robleto · Masatepe, Nicaragua · built with Next.js and Three.js</div>
    </footer>
  )
}
