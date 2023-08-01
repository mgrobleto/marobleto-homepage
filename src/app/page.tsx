import Intro from "@/components/intro"
import About from "@/components/about"
import ScrollObserver from "@/utils/scroll-observer"
import Works from "@/components/works"
import MyPhotography from "@/components/myphotos"
import ContactMe from "@/components/contactme"
import SideBar from "@/components/sidebar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <SideBar />
        <Intro />
        <About />
        <Works />
        <MyPhotography />
        <ContactMe />
        <Footer />
      </ScrollObserver>
    </main>
  )
}
