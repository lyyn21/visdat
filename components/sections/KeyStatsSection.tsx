"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedCounter from "@/components/ui/AnimatedCounter"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}
const scaleFade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
}

const stats = [
  {
    numericValue: 8800000,
    prefix: "",
    suffix: " Jiwa",
    decimals: 0,
    separator: ".",
    label: "Warga Indonesia Terlibat Judi Online",
    color: "#D97706",
    borderColor: "border-t-amber-600",
    note: "Berdasarkan data BPS 2025",
  },
  {
    numericValue: 3,
    prefix: "",
    suffix: " dari 100",
    decimals: 0,
    separator: ".",
    label: "Penduduk RI adalah Pemain Judi",
    color: "#DC2626",
    borderColor: "border-t-red-600",
    note: "Dari 288,3 juta penduduk Indonesia",
  },
  {
    numericValue: 345.8,
    prefix: "",
    suffix: "%",
    decimals: 1,
    separator: ".",
    label: "Kenaikan Kasus 2020–2024",
    color: "#DC2626",
    borderColor: "border-t-red-600",
    note: "648 kasus → 2.889 kasus",
  },
  {
    numericValue: 83.77,
    prefix: "",
    suffix: "%",
    decimals: 2,
    separator: ".",
    label: "Lonjakan Dalam Setahun (2023→2024)",
    color: "#DC2626",
    borderColor: "border-t-red-600",
    note: "1.572 kasus → 2.889 kasus",
  },
  {
    numericValue: 286.84,
    prefix: "Rp",
    suffix: " T",
    decimals: 2,
    separator: ".",
    label: "Perputaran Dana Judi 2025",
    color: "#D97706",
    borderColor: "border-t-amber-600",
    note: "Turun dari Rp400T tahun 2024",
  },
  {
    numericValue: 3452000,
    prefix: "",
    suffix: "",
    decimals: 0,
    separator: ".",
    label: "Situs Judi Telah Diblokir",
    color: "#059669",
    borderColor: "border-t-emerald-600",
    note: "20 Okt 2024 – 16 Mei 2026 (Komdigi)",
  },
]

export default function KeyStatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="FAKTA YANG HARUS DIKETAHUI"
          subtitle="Angka-angka yang mengungkap skala sesungguhnya dari krisis judi online di Indonesia"
          accent="red"
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleFade}
              className={`bg-[#1A1A1A] border border-[#2D2D2D] border-t-4 ${stat.borderColor} rounded-lg p-6 group hover:bg-[#222222] transition-colors duration-200 cursor-default`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="font-mono text-3xl sm:text-4xl font-bold mb-2 leading-none"
                style={{ color: stat.color }}
              >
                {inView ? (
                  <>
                    {stat.prefix}
                    <AnimatedCounter
                      end={stat.numericValue}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      separator={stat.separator}
                    />
                  </>
                ) : (
                  <span>{stat.prefix}0{stat.suffix}</span>
                )}
              </div>
              <div className="text-white font-body text-sm font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 font-body text-xs">{stat.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
