"use client"

import dynamic from "next/dynamic"
import Navbar from "@/components/ui/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import KeyStatsSection from "@/components/sections/KeyStatsSection"
import TrendChartSection from "@/components/sections/TrendChartSection"
import AnomalySection from "@/components/sections/AnomalySection"
import FinancialSection from "@/components/sections/FinancialSection"
import LukaSection from "@/components/sections/LukaSection"
import GovernmentSection from "@/components/sections/GovernmentSection"
import FooterSection from "@/components/sections/FooterSection"

// Dynamic import untuk ProvinceSection — react-simple-maps tidak support SSR
const ProvinceSection = dynamic(
  () => import("@/components/sections/ProvinceSection"),
  {
    ssr: false,
    loading: () => (
      <div
        className="py-24 flex items-center justify-center"
        style={{ background: "#0D0D0D" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: "#DC2626", borderTopColor: "transparent" }}
          />
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">
            Memuat Peta Indonesia...
          </span>
        </div>
      </div>
    ),
  }
)

export default function Home() {
  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <KeyStatsSection />
      <TrendChartSection />
      <AnomalySection />
      <FinancialSection />
      <ProvinceSection />
      <LukaSection />
      <GovernmentSection />
      <FooterSection />
    </main>
  )
}
