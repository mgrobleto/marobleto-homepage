import Intro from "@/pages/intro"
import About from "@/pages/about"
import ScrollObserver from "@/utils/scroll-observer"
import Works from "@/pages/works"
import MyPhotography from "@/pages/myphotos"
import ContactMe from "@/pages/contactme"
import SideBar from "@/components/sidebar"
import SocialMedia from "@/components/social-media-links"
import { GradientBackground } from "@/components/gradient-background"

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
        <Works />
        <ContactMe />
        <SideBar />
        <SocialMedia />
      </ScrollObserver>
    </main>
  )
}
