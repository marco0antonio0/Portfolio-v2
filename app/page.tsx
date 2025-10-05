import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
// import { Stats } from "@/components/stats"
import { DemoSection } from "@/components/demo-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      {/* <Stats /> */}
      <DemoSection />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
