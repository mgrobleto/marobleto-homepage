import Intro from "@/components/intro"
import About from "@/components/about"
import ScrollObserver from "@/utils/scroll-observer"
import Works from "@/components/works"
import { ProjectsIntro } from "@/components/projects-intro"

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
        <ProjectsIntro />
        <Works />
      </ScrollObserver>
    </main>
  )
}
