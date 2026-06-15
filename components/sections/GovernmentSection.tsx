"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ShieldOff, CreditCard, TrendingDown, ShieldCheck, AlertTriangle } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import { governmentActions } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  ShieldOff,
  CreditCard,
  TrendingDown,
  ShieldCheck,
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function GovernmentSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="pemerintah" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle
            title="RESPONS PEMERINTAH"
            subtitle="Upaya masif pemberantasan judi online 2024–2026"
            accent="green"
          />
        </motion.div>

        {/* 4 Stat Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {governmentActions.map((action, i) => {
            const Icon = iconMap[action.icon]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#1A1A1A] border border-[#2D2D2D] rounded-xl p-5 group cursor-default"
                style={{ borderLeft: `4px solid ${action.color}` }}
                whileHover={{ scale: 1.02, backgroundColor: "#222222" }}
                transition={{ duration: 0.2 }}
              >
                {Icon && (
                  <Icon size={28} style={{ color: action.color }} className="mb-3" />
                )}
                <div
                  className="font-mono text-2xl font-bold mb-1 leading-tight"
                  style={{ color: action.color }}
                >
                  {action.stat}
                </div>
                <div className="font-body text-white text-sm font-medium mb-2">
                  {action.label}
                </div>
                <div className="font-body text-gray-500 text-xs mb-2">{action.period}</div>
                <span
                  className="inline-block text-xs font-mono px-2 py-0.5 rounded"
                  style={{ background: "#2D2D2D", color: "#9CA3AF" }}
                >
                  Sumber: {action.source}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Progress bar visual */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.35 }}
          className="rounded-xl border border-[#2D2D2D] bg-[#111111] p-6 sm:p-8 mb-6"
        >
          <h3 className="font-display text-white text-lg uppercase tracking-wide mb-6">
            Perputaran Dana Judi Online — Sebelum vs Sesudah Pemberantasan
          </h3>

          <div className="flex flex-col gap-5">
            {/* 2024 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-gray-400 text-sm">2024 (Sebelum)</span>
                <span className="font-mono text-sm font-bold" style={{ color: "#DC2626" }}>Rp400 Triliun</span>
              </div>
              <div className="relative h-5 rounded-full overflow-hidden" style={{ background: "#2D2D2D" }}>
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ background: "#DC2626" }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-white font-bold">
                  100%
                </span>
              </div>
            </div>

            {/* 2025 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-gray-400 text-sm">2025 (Sesudah)</span>
                <span className="font-mono text-sm font-bold" style={{ color: "#059669" }}>Rp286,84 Triliun</span>
              </div>
              <div className="relative h-5 rounded-full overflow-hidden" style={{ background: "#2D2D2D" }}>
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ background: "#059669" }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "71.7%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-white font-bold">
                  71,7%
                </span>
              </div>
            </div>
          </div>

          <p
            className="mt-4 font-body text-sm font-semibold"
            style={{ color: "#059669" }}
          >
            ↓ Turun 30% berkat pemberantasan masif oleh Komdigi & PPATK
          </p>
        </motion.div>

        {/* Warning note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="rounded-xl p-5 flex items-start gap-4"
          style={{
            background: "rgba(120, 53, 15, 0.2)",
            border: "1px solid rgba(217, 119, 6, 0.3)",
          }}
        >
          <AlertTriangle size={20} style={{ color: "#D97706" }} className="flex-shrink-0 mt-0.5" />
          <p className="font-body text-gray-300 text-sm leading-relaxed">
            <span className="font-semibold" style={{ color: "#D97706" }}>
              Catatan Penting:
            </span>{" "}
            Meski transaksi berhasil ditekan 30%, angka perceraian akibat judi masih melonjak pada
            2025. Ini karena dampak judi yang terjadi sebelumnya baru terasa di pengadilan
            belakangan.{" "}
            <span className="font-semibold text-white">
              Upaya pencegahan sejak dini adalah kunci — bukan hanya pemblokiran.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
