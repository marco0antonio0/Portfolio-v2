"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, Sparkles, ImageIcon, Zap, Palette, Globe, Wand2 } from "lucide-react"
import Image from "next/image"

export function DemoSection() {
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null)

  const toggleDemo = (demoName: string) => {
    setExpandedDemo(expandedDemo === demoName ? null : demoName)
  }

  return (
    <section className="py-20 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-2w-24 sm:w-24 sm:h-24 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative z-10 rounded-full bg-[#1e1e1e] p-[10px]">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={90}
                  height={90}
                  className="w-full h-full object-contain drop-shadow-2xl rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Demos Interativas
            </span>
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse animation-delay-1000" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient leading-tight px-4">
            Experimente Minhas Ferramentas
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4">
            Teste em tempo real as tecnologias que desenvolvi. Clique nos botões abaixo para expandir e interagir com as
            demos ao vivo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Tempo Real</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Wand2 className="w-4 h-4 text-purple-400" />
              <span>IA Avançada</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>100% Online</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 group">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 to-pink-950/30 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Gerador de Áudio</h3>
                      <p className="text-sm text-purple-300">OpenGena AI</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-semibold text-purple-300">
                    IA
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Tecnologia de geração de áudio com inteligência artificial avançada. Crie vozes realistas e conteúdo
                  de áudio profissional.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                    Text-to-Speech
                  </span>
                  <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-300">
                    IA Generativa
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                    API REST
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => toggleDemo("audio")}
                size="lg"
                className="group/btn relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-xl shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 text-base sm:text-lg px-8 py-6"
              >
                <span className="relative z-10 flex items-center gap-3 font-bold">
                  {expandedDemo === "audio" ? (
                    <>
                      <ChevronUp className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                      Fechar Demo
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                      Testar Gerador de Áudio
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                expandedDemo === "audio" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 bg-gray-950/80 backdrop-blur-sm p-3">
                <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                  <iframe
                    src="https://opengena.com/produto"
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    title="Gerador de Áudio - OpenGena"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">
                  Powered by{" "}
                  <a
                    href="https://opengena.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors underline font-semibold"
                  >
                    OpenGena
                  </a>
                </p>
              </div>
            </div>

            {expandedDemo !== "audio" && (
              <div className="grid grid-cols-1 gap-4 animate-in fade-in duration-500">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/30 to-transparent border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1.5 text-sm sm:text-base">IA Avançada</h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Geração de áudio com inteligência artificial de última geração
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6 group">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Metasnap</h3>
                      <p className="text-sm text-blue-300">Thumbnail Generator</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-semibold text-blue-300">
                    SaaS
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Gere thumbnails profissionais de qualquer site para suas meta tags e redes sociais. Otimize sua
                  presença online.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                    Screenshots
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
                    Meta Tags
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                    Social Media
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => toggleDemo("metasnap")}
                size="lg"
                className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 shadow-xl shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105 text-base sm:text-lg px-8 py-6"
              >
                <span className="relative z-10 flex items-center gap-3 font-bold">
                  {expandedDemo === "metasnap" ? (
                    <>
                      <ChevronUp className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                      Fechar Demo
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      Testar Metasnap
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                expandedDemo === "metasnap" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gray-950/80 backdrop-blur-sm p-3">
                <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                  <iframe
                    src="https://metasnap.opengena.com/"
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    title="Metasnap - Gerador de Thumbnails"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">
                  Acesse em{" "}
                  <a
                    href="https://metasnap.opengena.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline font-semibold"
                  >
                    metasnap.opengena.com
                  </a>
                </p>
              </div>
            </div>

            {expandedDemo !== "metasnap" && (
              <div className="grid grid-cols-1 gap-4 animate-in fade-in duration-500">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/30 to-transparent border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                      <Palette className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1.5 text-sm sm:text-base">Thumbnails Profissionais</h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Capture e otimize imagens perfeitas para redes sociais e meta tags
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
