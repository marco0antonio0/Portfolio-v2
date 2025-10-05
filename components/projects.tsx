import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    title: "📊 Uxtraking – Rastreio de interações do usuário",
    description: "Plataforma com Javascript, Python e NestJS para análise de UX, integrada com MongoDB e MariaDB.",
    image: "https://github.com/user-attachments/assets/c83079af-713d-43ce-b0c9-49b1aac95a5d",
    tags: ["JavaScript", "Python", "NestJS", "MongoDB"],
    liveUrl: "https://uxtracking.liis.com.br/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "🚀 Metasnap – Geração automática de thumbnails",
    description: "Ferramenta em Typescript + NestJS que cria thumbnails automaticamente a partir de URLs.",
    image: "https://github.com/user-attachments/assets/9759bf33-4d46-4e78-a798-2cbc7764ba08",
    tags: ["TypeScript", "NestJS", "Screenshot API"],
    liveUrl: "https://metasnap.opengena.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "🤖 RespondeAI – Correção Inteligente de Gabaritos",
    description: "Aplicação em NextJS e Python OpenCV para correção automática de gabaritos.",
    image: "https://github.com/user-attachments/assets/1a242385-2b51-443b-a564-1215822ee26a",
    tags: ["Next.js", "Python", "OpenCV", "Docker"],
    liveUrl: "https://respondeai.opengena.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "🧾 Gerador de Certificados Personalizados",
    description: "Ferramenta em Typescript + NestJS para geração de certificados personalizados via API.",
    image: "https://github.com/user-attachments/assets/f75d5196-9bce-44d8-a0d6-1fde3345edb6",
    tags: ["TypeScript", "NestJS", "API"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/gen_certificate",
  },
  {
    title: "CMS Dirrocha – Gestor de Conteúdo",
    description: "CMS em NextJS com integração Firebase e APIs, deploy em Docker.",
    image: "https://github.com/user-attachments/assets/683d1bcd-9142-4763-bc99-f0951cc38a23",
    tags: ["Next.js", "Firebase", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/DirrochaCMS",
  },
  {
    title: "Portfolio - Criação de portfolio em poucos cliques",
    description: "Projeto em NextJS com deploy via Docker, fácil configuração e personalização.",
    image:
      "https://github.com/marco0antonio0/Portfolio/raw/main/image/Captura%20de%20tela%20de%202025-02-01%2021-19-52.png",
    tags: ["Next.js", "Docker", "Tailwind"],
    liveUrl: "https://portfolio.nextlab.cloud/",
    githubUrl: "#",
  },
]

const allProjects = [
  {
    title: "Aplicativo CadMED",
    description: "Aplicação mobile Flutter com MySQLServer e SQLite offline.",
    image:
      "https://raw.githubusercontent.com/CAD-MED/Projeto-de-extensao-CAD-MED/refs/heads/main/imagesReadme/logoo.png",
    tags: ["Flutter", "MySQL", "SQLite"],
    liveUrl: "#",
    githubUrl: "https://github.com/CAD-MED/Projeto-de-extensao-CAD-MED",
  },
  {
    title: "Rota da Fé - Círio 2024",
    description: "App mobile Flutter para acompanhamento de romeiros, offline e com API.",
    image:
      "https://raw.githubusercontent.com/marco0antonio0/trabalho_extensao_projeto_cirio_2023/main/images_readme/image_2.png",
    tags: ["Flutter", "API", "SQLite"],
    liveUrl: "#",
    githubUrl: "https://github.com/RotaDaFe/trabalho_extensao_projeto_cirio_2024",
  },
  {
    title: "Rota da Fé - Círio 2023",
    description: "App mobile Flutter com API, SQLite e versão offline.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/appRotaDaFe1.png",
    tags: ["Flutter", "API", "SQLite"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/trabalho_extensao_projeto_cirio_2023",
  },
  {
    title: "Login Page Example",
    description: "Exemplo de login page em NextJS, com integração de API e deploy via Docker.",
    image: "https://github.com/user-attachments/assets/c6e5337b-2986-40a8-b8e7-afa50677b80a",
    tags: ["Next.js", "Docker", "API"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/loginPageExample",
  },
  {
    title: "GENReadme.js – Gerador de README.md",
    description: "Ferramenta em NextJS e IA para gerar arquivos README.md automaticamente.",
    image:
      "https://private-user-images.githubusercontent.com/72234855/408834034-7f8aa552-5b30-4a12-9911-beefcb34522e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk1OTAyMzEsIm5iZiI6MTc1OTU4OTkzMSwicGF0aCI6Ii83MjIzNDg1NS80MDg4MzQwMzQtN2Y4YWE1NTItNWIzMC00YTEyLTk5MTEtYmVlZmNiMzQ1MjJlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDA0VDE0NTg1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRjZWZiZWFjMjEzOWY0NTczMDMyYTQ1OTU4MzRjN2YxODZkYmEzN2M5Y2YzYzg2OTUyYjhiNzkxNmU2ZjIyY2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.kQghq6aBVQG2UeGLYnzWqRPpoinMptqLac_qd59dXgA",
    tags: ["Next.js", "IA", "Automation"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/GENReadme.js",
  },
  {
    title: "Dirrocha E-commerce",
    description: "E-commerce em Flutter Web com múltiplas integrações e sistema de login.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/1724012676344.jpeg",
    tags: ["Flutter Web", "E-commerce"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/E-commerce_front-end",
  },
  {
    title: "Backend Dirrocha E-commerce",
    description: "API em NestJS com MariaDB, autenticação, carrinho e busca.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/1724011647692.jpeg",
    tags: ["NestJS", "MariaDB", "API"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/E-commerce_back-end",
  },
  {
    title: "Box Gerenciamento",
    description: "App Flutter Mobile para controle de estoque local via SQLite.",
    image:
      "https://github.com/marco0antonio0/marco0antonio0/blob/main/imagens/aplicativo-box-gerenciamento1.png?raw=true",
    tags: ["Flutter", "SQLite", "Mobile"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/app-box-gerenciamento",
  },
  {
    title: "Flex Task List",
    description: "App Flutter Mobile de lista de tarefas com persistência em SQLite.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/appFlexTaskList.png",
    tags: ["Flutter", "SQLite", "Mobile"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/App-Task-List",
  },
  {
    title: "Site de Adoção de Animais",
    description: "Plataforma web em Next.js com Firebase para adoção de pets.",
    image: "https://github.com/marco0antonio0/marco0antonio0/blob/main/imagens/projMeAdote2.png?raw=true",
    tags: ["Next.js", "Firebase"],
    liveUrl: "https://adote.nova-work.cloud/",
    githubUrl: "#",
  },
  {
    title: "Blog Loja de Games",
    description: "Blog em NextJS integrado com API de dados de games.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/site-store-play-games.png",
    tags: ["Next.js", "API", "Blog"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/blog-games-nextjs",
  },
  {
    title: "Calculadora de Notas Universitárias",
    description: "App web em NextJS para cálculo de notas acadêmicas.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/site-calculadora-de-nota.png",
    tags: ["Next.js", "Education"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/calculadora-notas-faculdade",
  },
  {
    title: "Gerador de README Flutter",
    description: "Ferramenta Flutter Web para criação de README.md.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/site-gerador-readme.png",
    tags: ["Flutter Web", "Automation"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/Gerador-README-Flutter",
  },
  {
    title: "Site de Cursos Online",
    description: "Plataforma NextJS para venda de cursos com Tailwind.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/site-toperCursosss.png",
    tags: ["Next.js", "Tailwind", "E-learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/Site-topers-cursos-v2",
  },
  {
    title: "Pokedex Next.js",
    description: "Pokédex interativa em Next.js com API própria de pokémons.",
    image: "https://github.com/marco0antonio0/marco0antonio0/raw/main/imagens/site-pokedexx.png",
    tags: ["Next.js", "API", "Pokemon"],
    liveUrl: "#",
    githubUrl: "https://github.com/marco0antonio0/Pokedex-project",
  },
]

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-border overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-primary uppercase tracking-wider">Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance px-4">
            <span className="text-gradient animate-gradient">Trabalhos Recentes</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Projetos em produção que demonstram expertise em desenvolvimento full-stack, integrações complexas e
            soluções inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-primary/90 text-primary-foreground shadow-lg text-[10px] sm:text-xs px-2 py-0.5">
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    Destaque
                  </Badge>
                </div>
              )}

              <div className="relative aspect-video overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-base sm:text-lg md:text-xl group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-pretty text-xs sm:text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-[10px] sm:text-xs hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 p-3 sm:p-4 md:p-6 pt-0">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5 sm:gap-2 glass-effect hover:bg-primary/10 group/btn bg-transparent text-xs"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Demo</span>
                    <span className="sm:hidden">Ver</span>
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5 sm:gap-2 glass-effect hover:bg-primary/10 group/btn bg-transparent text-xs"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3 w-3 group-hover/btn:rotate-12 transition-transform" />
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
          <div className="inline-block relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-chart-3 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient" />

            <Button
              size="lg"
              className="relative gap-2 sm:gap-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-2xl w-full sm:w-auto"
              asChild
            >
              <a href="https://github.com/marco0antonio0?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                Ver Todos os Projetos
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
            Explore mais de <span className="text-primary font-semibold">20+ projetos</span> no GitHub
          </p>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
            <img
              src="/coding-animation-developer-workspace-dark-theme.jpg"
              alt="Developer workspace animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
