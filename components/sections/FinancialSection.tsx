"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  LabelList,
} from "recharts"
import { ArrowDown, Lightbulb, Info, TrendingDown } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import { budgetComparison, keyStats } from "@/lib/data"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload
    return (
      <div
        className="rounded-lg px-4 py-3 border shadow-xl"
        style={{ background: "#1A1A1A", borderColor: d.color }}
      >
        <p className="font-body text-white text-sm font-semibold mb-1">{d.label}</p>
        <p className="font-mono text-xl font-bold" style={{ color: d.color }}>
          Rp{d.value.toLocaleString("id-ID", { minimumFractionDigits: 2 })} T
        </p>
        <p className="font-body text-gray-400 text-xs mt-1">{d.sublabel}</p>
      </div>
    )
  }
  return null
}

const insights = [
  {
    icon: Lightbulb,
    text: 'Uang judol 2025 bisa membiayai 1,3× anggaran kesehatan seluruh rakyat Indonesia',
    color: "#DC2626",
  },
  {
    icon: Info,
    text: 'Setara dengan 85% dari total anggaran program Makan Bergizi Gratis (MBG)',
    color: "#D97706",
  },
  {
    icon: TrendingDown,
    text: 'Dalam 5 tahun, hampir Rp1.500 Triliun lenyap di meja judi daring Indonesia',
    color: "#DC2626",
  },
]

export default function FinancialSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="finansial" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle
            title="UANG YANG TERBAKAR DI MEJA JUDI"
            subtitle="Rp286,84 Triliun dana judi online 2025 — setara dengan apa?"
            accent="gold"
          />
        </motion.div>

        {/* 2024 vs 2025 comparison */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 items-center"
        >
          {/* 2024 card */}
          <div
            className="rounded-xl p-6 border"
            style={{ background: "rgba(220,38,38,0.06)", borderColor: "#DC2626" }}
          >
            <p className="font-mono text-xs text-gray-500 mb-2 tracking-widest">2024</p>
            <p className="font-mono text-3xl font-bold" style={{ color: "#DC2626" }}>
              Rp400 T
            </p>
            <p className="font-body text-gray-400 text-sm mt-1">Perputaran dana judi online</p>
          </div>

          {/* Arrow + info */}
          <div className="flex flex-col items-center justify-center text-center">
            <ArrowDown size={32} style={{ color: "#059669" }} className="mb-2" />
            <p className="font-mono text-2xl font-bold" style={{ color: "#059669" }}>
              Turun 30%
            </p>
            <p className="font-body text-gray-400 text-xs mt-1">
              Rp113,16T berhasil ditekan
            </p>
            <p className="font-body text-gray-500 text-xs mt-2">
              Berkat upaya masif Komdigi & PPATK
            </p>
          </div>

          {/* 2025 card */}
          <div
            className="rounded-xl p-6 border"
            style={{ background: "rgba(5,150,105,0.06)", borderColor: "#059669" }}
          >
            <p className="font-mono text-xs text-gray-500 mb-2 tracking-widest">2025</p>
            <p className="font-mono text-3xl font-bold" style={{ color: "#059669" }}>
              Rp286,84 T
            </p>
            <p className="font-body text-gray-400 text-sm mt-1">Setelah pemberantasan masif</p>
          </div>
        </motion.div>

        {/* Bar chart */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.35 }}
          className="rounded-xl border border-[#2D2D2D] bg-[#0D0D0D] p-6 sm:p-8 mb-8"
        >
          <h3 className="font-display text-white text-lg uppercase tracking-wide mb-6">
            Perbandingan Anggaran Nasional (dalam Triliun Rupiah)
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={budgetComparison}
              layout="vertical"
              margin={{ top: 0, right: 100, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2D2D2D" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fill: "#6B7280", fontSize: 11, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}T`}
                domain={[0, 800]}
              />
              <YAxis
                type="category"
                dataKey="label"
                tick={{ fill: "#9CA3AF", fontSize: 11, fontFamily: "var(--font-body)" }}
                axisLine={false}
                tickLine={false}
                width={160}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={36}>
                {budgetComparison.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.color}
                    style={entry.isGambling ? { filter: "drop-shadow(0 0 8px rgba(220,38,38,0.5))" } : {}}
                  />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v: number) => `Rp${v.toLocaleString("id-ID", { minimumFractionDigits: 2 })}T`}
                  style={{ fill: "#9CA3AF", fontSize: 11, fontFamily: "var(--font-mono)" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div
            className="mt-4 flex items-center gap-2 rounded-lg px-4 py-3"
            style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)" }}
          >
            <span>🔴</span>
            <p className="font-body text-xs text-gray-400">
              Dana judi online <span style={{ color: "#DC2626" }} className="font-semibold">melebihi anggaran KESEHATAN</span> seluruh Indonesia sebesar Rp69,54 Triliun
            </p>
          </div>
        </motion.div>

        {/* Insight cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl p-5 border border-[#2D2D2D] bg-[#1A1A1A]"
              style={{ borderLeft: `4px solid ${insight.color}` }}
              whileHover={{ scale: 1.02, backgroundColor: "#222222" }}
              transition={{ duration: 0.2 }}
            >
              <insight.icon size={20} style={{ color: insight.color }} className="mb-3" />
              <p className="font-body text-gray-300 text-sm leading-relaxed">{insight.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
