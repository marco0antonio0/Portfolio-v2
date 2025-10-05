import { Mail, Linkedin, Github, ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-primary uppercase tracking-wider">Contato</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance px-4">
            <span className="text-gradient animate-gradient">Vamos trabalhar juntos?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de suas
            visões.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base sm:text-lg">LinkedIn</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Conecte-se comigo</p>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent" asChild>
                <a
                  href="https://www.linkedin.com/in/marco-antonio-aa3024233/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base sm:text-lg">GitHub</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Veja meus projetos</p>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent" asChild>
                <a href="https://github.com/marco0antonio0" target="_blank" rel="noopener noreferrer">
                  Visitar
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-colors sm:col-span-2 lg:col-span-1">
            <CardContent className="pt-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base sm:text-lg">WhatsApp</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Envie uma mensagem</p>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent" asChild>
                <a href="https://api.whatsapp.com/send?phone=5591984837847" target="_blank" rel="noopener noreferrer">
                  Conversar
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-border">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © 2025 Marco Antonio. Desenvolvido com Next.js e Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
