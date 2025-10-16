import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Marco Antonio - Desenvolvedor Full-Stack | Next.js, Flutter, APIs",
  description:
    "Portfolio de Marco Antonio, desenvolvedor de software full-stack em Next.js, Flutter, desenvolvimento web e mobile, integrações de API e soluções tecnológicas inovadoras. Conheça meus projetos e habilidades em programação.",
  keywords: [
    "desenvolvedor",
    "desenvolvedor de software",
    "desenvolvedor full-stack",
    "Next.js",
    "Flutter",
    "desenvolvimento web",
    "desenvolvimento mobile",
    "integrações API",
    "portfolio desenvolvedor",
    "dev",
    "programação",
    "tecnologia",
    "soluções digitais"
  ],
  robots: "index, follow",
  verification: {
    google: "2SH88IBpTtNJt2R2mgWSewpgc6eDJ4N-EdMhMKs4GLA"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Marco Antonio - Desenvolvedor Full-Stack | Next.js, Flutter, APIs",
    description:
      "Portfolio de Marco Antonio, desenvolvedor de software full-stack em Next.js, Flutter, desenvolvimento web e mobile, integrações de API e soluções tecnológicas inovadoras.",
    url: "https://nextlab.cloud/",
    siteName: "Marco Antonio Portfolio",
    images: [
      {
        url: "https://nextlab.cloud/image-link.png",
        width: 1200,
        height: 630,
        alt: "Marco Antonio - Desenvolvedor Full-Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Antonio - Desenvolvedor Full-Stack | Next.js, Flutter, APIs",
    description:
      "Portfolio de Marco Antonio, desenvolvedor de software full-stack em Next.js, Flutter, desenvolvimento web e mobile, integrações de API e soluções tecnológicas inovadoras.",
    images: ["https://nextlab.cloud/image-link.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
