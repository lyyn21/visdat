import type { Metadata } from "next"
import { Oswald, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display"
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: "Judi Online & Krisis Perceraian Indonesia | Kelompok Badak",
  description: "Visualisasi data interaktif tentang dampak judi online terhadap tingkat perceraian di Indonesia. Data BPS 2020-2025.",
  keywords: "judi online, perceraian, Indonesia, BPS, data, infografis",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#080808] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
