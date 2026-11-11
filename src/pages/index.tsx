import Head from "next/head"
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"

import StarField from "@/components/home/star-field"
import { Nav, Hero, About, Experience, Research, Community, Projects, Photography, Skills, Contact, Footer } from "@/components/home/sections"

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" })
const body = Inter({ subsets: ["latin"], variable: "--font-body" })
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" })

export default function Home() {
  return (
    <div className={`home-root ${display.variable} ${body.variable} ${mono.variable}`}>
      <Head>
        <title>Maro Robleto · Frontend Developer &amp; Astronomy</title>
        <meta name="description" content="María Gabriela Robleto: frontend developer in Nicaragua working with React, TypeScript and AWS, with research in exoplanet microlensing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StarField />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Community />
        <Projects />
        <Photography />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
