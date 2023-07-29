import Intro from "@/components/intro"
import About from "@/components/about"
import ScrollObserver from "@/utils/scroll-observer"
import Works from "@/components/works"

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
        <Works />
      </ScrollObserver>
    </main>
  )
}
