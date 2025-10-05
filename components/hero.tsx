"use client"

import { ArrowRight, Github, Linkedin, Sparkles, Code2, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import Image from "next/image"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    const particleCount = window.innerWidth < 768 ? 50 : 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(147, 112, 219, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-glow animation-delay-2000" />

      <div className="relative max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 z-10">
        <div className="flex justify-center mb-6 sm:mb-8 animate-float">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl opacity-50 animate-pulse rounded-full" />
            <div className="relative z-10 rounded-full bg-[#1e1e1e] p-[15px]">
              <Image
                src="/logo.png"
                alt="Marco Antonio Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain drop-shadow-2xl rounded-full"
                priority
              />
            </div>
          </div>
        </div>


        <div className="inline-block animate-float">
          <div className="relative overflow-hidden rounded-full">
            <span className="relative z-10 text-xs sm:text-sm font-mono text-foreground bg-card/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/30 flex items-center gap-2">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse" />
              <span className="hidden sm:inline">Powered by Marco A.</span>
              <span className="sm:hidden">Disponível</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance px-4">
          <span className="text-gradient animate-gradient">Marco Antonio</span>
        </h1>

        <div className="space-y-3 sm:space-y-4 px-4">
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            <span className="text-primary font-semibold">Desenvolvedor de Software Full-Stack.</span>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto text-pretty">
            Criando experiências web e mobile excepcionais com{" "}
            <span className="text-foreground font-medium">Next.js</span> e{" "}
            <span className="text-foreground font-medium">Flutter</span>. Dedicado a integrações de API e soluções
            inovadoras.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 group"
            asChild
          >
            <a href="#projetos">
              <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Ver Projetos
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto gap-2 glass-effect hover:bg-primary/10 group bg-transparent"
            asChild
          >
            <a href="https://www.linkedin.com/in/marco-antonio-aa3024233/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto gap-2 glass-effect hover:bg-primary/10 group bg-transparent"
            asChild
          >
            <a href="https://github.com/marco0antonio0" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
          <div className="glass-effect rounded-xl p-5 sm:p-6 hover:bg-primary/5 transition-all group">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Desenvolvedor</p>
            <p className="font-semibold text-foreground text-sm sm:text-base">Fullstack</p>
          </div>

          <div className="glass-effect rounded-xl p-5 sm:p-6 hover:bg-primary/5 transition-all group">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Academico</p>
            <p className="font-semibold text-foreground text-sm sm:text-base">Ciência da Computação</p>
          </div>

          <div className="glass-effect rounded-xl p-5 sm:p-6 hover:bg-primary/5 transition-all group">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-chart-3 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Projetos</p>
            <p className="font-semibold text-foreground text-sm sm:text-base">15+ em Produção</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
