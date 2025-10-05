import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Linguagens",
    skills: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frameworks",
    skills: ["Next.js", "Flutter", "React", "Node.js", "NestJS", "Flask", "Express"],
  },
  {
    title: "Bancos de Dados",
    skills: ["MySQL", "SQLite", "Firebase", "MongoDB", "MariaDB"],
  },
  {
    title: "Deploy & DevOps",
    skills: ["Netlify", "Heroku", "Azure", "Docker", "Docker Compose", "VPS"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "VSCode", "Figma", "Canva", "Visual Paradigm", "Swagger"],
  },
]

export function Skills() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-primary uppercase tracking-wider">Tecnologias</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-gradient animate-gradient">Stack Tecnológico</span>
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-3">
                <span className="text-primary text-lg sm:text-xl">▸</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
