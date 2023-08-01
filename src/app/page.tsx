import Intro from "@/pages/intro"
import About from "@/pages/about"
import ScrollObserver from "@/utils/scroll-observer"
import Works from "@/pages/works"
import MyPhotography from "@/pages/myphotos"
import ContactMe from "@/pages/contactme"
import SideBar from "@/components/sidebar"

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
