import Intro from "@/components/intro"
import About from "@/components/about"
import ScrollObserver from "@/utils/scroll-observer"

export default function Home() {
  return (
    <main>
      <ScrollObserver>
        <Intro />
        <About />
      </ScrollObserver>
    </main>
  )
}
