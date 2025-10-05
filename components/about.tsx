"use client"

import { Sparkles, Code2, Rocket, Zap } from "lucide-react"

export function About() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-border overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-primary uppercase tracking-wider">Sobre Mim</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            <span className="text-gradient animate-gradient">Desenvolvedor Full-Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
            <p className="text-muted-foreground text-pretty">
              Olá, meu nome é <span className="text-foreground font-semibold text-primary">Marco Antonio</span>, tenho
              25 anos e sou um desenvolvedor de software apaixonado por tecnologia e inovação.
            </p>
            <p className="text-muted-foreground text-pretty">
              Minha paixão me levou a me especializar em desenvolvimento web e mobile, onde estou constantemente
              trabalhando em projetos que envolvem integrações com APIs e gerenciamento de bancos de dados para
              aprimorar minhas habilidades como desenvolvedor.
            </p>
            <p className="text-muted-foreground text-pretty">
              Foco principalmente no desenvolvimento web com{" "}
              <span className="text-foreground font-semibold">Flutter Web</span> e{" "}
              <span className="text-foreground font-semibold">Next.js</span>, além de me especializar em engenharia de
              integrações com APIs para criar soluções excepcionais.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Full-Stack</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Rocket className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium">15+ Projetos</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-chart-3/10 border border-chart-3/20">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-chart-3" />
                <span className="text-xs sm:text-sm font-medium">APIs Expert</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg sm:text-xl">Informações</h3>
              </div>
              <dl className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <dt className="text-sm sm:text-base text-muted-foreground">Nome</dt>
                  <dd className="text-sm sm:text-base text-foreground font-semibold">Marco Antonio</dd>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <dt className="text-sm sm:text-base text-muted-foreground">Idade</dt>
                  <dd className="text-sm sm:text-base text-foreground font-semibold">25 anos</dd>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <dt className="text-sm sm:text-base text-muted-foreground">Formação</dt>
                  <dd className="text-sm sm:text-base text-foreground font-semibold">Ciência da Computação</dd>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <dt className="text-sm sm:text-base text-muted-foreground">Cargo</dt>
                  <dd className="text-sm sm:text-base text-foreground font-semibold">Desenvolvedor Fullstack</dd>
                </div>
              </dl>
            </div>

            <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all group">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg sm:text-xl">Foco Principal</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group/item">
                  <span className="text-primary mt-1 text-lg sm:text-xl group-hover/item:scale-125 transition-transform">
                    ▸
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Desenvolvimento Web (Next.js, Flutter Web)
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group/item">
                  <span className="text-primary mt-1 text-lg sm:text-xl group-hover/item:scale-125 transition-transform">
                    ▸
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground">Desenvolvimento Mobile (Flutter)</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group/item">
                  <span className="text-primary mt-1 text-lg sm:text-xl group-hover/item:scale-125 transition-transform">
                    ▸
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground">Engenharia de Integrações com APIs</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group/item">
                  <span className="text-primary mt-1 text-lg sm:text-xl group-hover/item:scale-125 transition-transform">
                    ▸
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground">Gerenciamento de Bancos de Dados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
