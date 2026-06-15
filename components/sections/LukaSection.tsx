"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Wallet, TrendingDown, HeartCrack, Gavel } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import { lukaData } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Wallet,
  TrendingDown,
  HeartCrack,
  Gavel,
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
}
const cardVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
}
const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
}

const letterColors = ["#DC2626", "#EA580C", "#D97706", "#CA8A04"]

export default function LukaSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="LUKA YANG DITINGGALKAN"
            subtitle="Judi online tidak hanya merusak keuangan — ia menghancurkan sendi-sendi keluarga"
            accent="red"
          />
        </motion.div>

        {/* L.U.K.A letters */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-6 sm:gap-10 mb-14"
        >
          {lukaData.map((item, i) => (
            <motion.div key={i} variants={letterVariant} className="flex flex-col items-center">
              <span
                className="font-display font-bold leading-none"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  color: letterColors[i],
                  textShadow: `0 0 40px ${letterColors[i]}40`,
                }}
              >
                {item.letter}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
        >
          {lukaData.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={i}
                variants={cardVariant}
                className="bg-[#1A1A1A] border border-[#2D2D2D] rounded-xl p-6 group cursor-default"
                whileHover={{
                  scale: 1.03,
                  borderColor: item.colorHex,
                  backgroundColor: "#1F1F1F",
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Letter + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-display font-bold leading-none"
                    style={{ fontSize: "3.5rem", color: item.colorHex, lineHeight: 1 }}
                  >
                    {item.letter}
                  </span>
                  {Icon && (
                    <Icon
                      size={28}
                      style={{ color: item.colorHex }}
                      className="opacity-80"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-body text-white text-lg font-bold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: item.colorHex }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-xl p-8 border-l-4 max-w-3xl mx-auto"
          style={{
            borderColor: "#DC2626",
            background: "rgba(220,38,38,0.04)",
            border: "1px solid rgba(220,38,38,0.15)",
            borderLeft: "4px solid #DC2626",
          }}
        >
          <p className="font-body text-gray-300 text-lg sm:text-xl italic leading-relaxed text-center">
            &ldquo;Ribuan keluarga sudah hancur karena judi online,
            meninggalkan luka dan perpecahan yang sulit diperbaiki.
            Jangan sampai hal ini terjadi pada keluargamu.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
