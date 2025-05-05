import Intro from "@/pages/intro"
import About from "@/pages/about"
import ScrollObserver from "@/utils/scroll-observer"
import Works from "@/pages/works"
import ContactMe from "@/pages/contactme"
import SideBar from "@/components/sidebar"
import MainProjects from "./main-projects"

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
        <MainProjects />
        <Works />
        <ContactMe />
        <SideBar />
      </ScrollObserver>
    </main>
  )
}
