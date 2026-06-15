"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import AnimatedCounter from "@/components/ui/AnimatedCounter"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const heroStats = [
  {
    numericValue: 4623,
    prefix: "",
    suffix: "",
    separator: ".",
    decimals: 0,
    label: "Kasus Perceraian 2025",
    sublabel: "Tertinggi sepanjang sejarah",
  },
  {
    numericValue: 365,
    prefix: "",
    suffix: "%",
    separator: ".",
    decimals: 0,
    label: "Kenaikan dalam 5 Tahun",
    sublabel: "Dari 2020 hingga 2025",
  },
  {
    numericValue: 286.84,
    prefix: "Rp",
    suffix: "T",
    separator: ".",
    decimals: 2,
    label: "Dana Berputar di Meja Judi",
    sublabel: "Sepanjang tahun 2025",
  },
]

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "#080808",
        backgroundImage:
          "radial-gradient(ellipse at 10% 20%, rgba(220,38,38,0.15) 0%, transparent 60%), radial-gradient(ellipse at 90% 80%, rgba(220,38,38,0.08) 0%, transparent 60%)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest mb-8 uppercase"
              style={{
                border: "1px solid rgba(220,38,38,0.4)",
                color: "#DC2626",
                background: "rgba(220,38,38,0.05)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse inline-block" />
              KRISIS NASIONAL &nbsp;·&nbsp; DATA RESMI BPS 2025 &nbsp;·&nbsp; TELKOM UNIVERSITY
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="mb-8">
            <h1 className="font-display uppercase leading-none tracking-tight">
              <span className="block text-5xl sm:text-7xl md:text-8xl text-white">
                JUDI ONLINE
              </span>
              <span
                className="block text-6xl sm:text-8xl md:text-9xl font-bold"
                style={{ color: "#DC2626" }}
              >
                MENGHANCURKAN
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl text-white">
                KELUARGA INDONESIA
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="font-body text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-16"
          >
            Dari 648 kasus pada 2020 menjadi 4.623 kasus di 2025 —
            sebuah lonjakan{" "}
            <span style={{ color: "#DC2626" }} className="font-semibold">
              365%
            </span>{" "}
            yang tidak bisa diabaikan.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 w-full max-w-3xl"
          >
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center py-8 px-6 ${
                  i < heroStats.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-[#2D2D2D]"
                    : ""
                }`}
              >
                <span
                  className="font-mono text-4xl sm:text-5xl font-bold mb-2"
                  style={{ color: "#D97706" }}
                >
                  {stat.prefix}
                  <AnimatedCounter
                    end={stat.numericValue}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    separator={stat.separator}
                  />
                </span>
                <span className="font-body text-white text-sm font-medium text-center">
                  {stat.label}
                </span>
                <span className="font-body text-gray-500 text-xs mt-1 text-center">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-600 text-xs font-mono tracking-widest uppercase">
          Gulir ke bawah
        </span>
        <ChevronDown
          size={24}
          className="text-gray-600 animate-bounce"
        />
      </div>
    </section>
  )
}
