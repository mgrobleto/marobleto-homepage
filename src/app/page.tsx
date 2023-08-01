import Intro from "@/components/intro"
import About from "@/components/about"
import ScrollObserver from "@/utils/scroll-observer"
import Works from "@/components/works"
import MyPhotography from "@/components/myphotos"
import ContactMe from "@/components/contactme"
import SideBar from "@/components/sidebar"
import Footer from "@/components/footer"
import { GradientBackground } from "@/components/gradient-background"

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
        <Works />
        <MyPhotography />
        <ContactMe />
        <SideBar />
      </ScrollObserver>
    </main>
  )
}
