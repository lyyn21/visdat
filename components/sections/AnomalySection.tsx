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
import { TrendingUp, TrendingDown } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import { nationalDivorceCauses, nationalDivorceTotal } from "@/lib/data"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const CustomBarTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload
    return (
      <div
        className="rounded-lg px-4 py-3 border shadow-xl"
        style={{ background: "#1A1A1A", borderColor: d.color }}
      >
        <p className="font-display text-white text-sm font-bold mb-1">{d.cause}</p>
        <p className="font-mono text-lg font-bold" style={{ color: d.color }}>
          {d.cases.toLocaleString("id-ID")} kasus
        </p>
        <p className="font-body text-gray-400 text-xs">{d.description}</p>
      </div>
    )
  }
  return null
}

export default function AnomalySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle
            title="SATU-SATUNYA YANG TERUS NAIK"
            subtitle="Di tengah penurunan angka perceraian nasional, judi online bergerak berlawanan arah"
            accent="red"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Bar chart */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-[#2D2D2D] bg-[#111111] p-6"
          >
            <h3 className="font-display text-white text-lg uppercase tracking-wide mb-2">
              Penyebab Perceraian Nasional 2024
            </h3>
            <p className="font-body text-gray-500 text-xs mb-6">
              Total: {nationalDivorceTotal.toLocaleString("id-ID")} kasus (sedang menurun)
            </p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={nationalDivorceCauses}
                layout="vertical"
                margin={{ top: 0, right: 80, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2D2D" horizontal={false} />
                <XAxis
                  type="number"
                  tick={{ fill: "#6B7280", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}rb`}
                />
                <YAxis
                  type="category"
                  dataKey="cause"
                  tick={{ fill: "#9CA3AF", fontSize: 12, fontFamily: "var(--font-body)" }}
                  axisLine={false}
                  tickLine={false}
                  width={100}
                />
                <Tooltip content={<CustomBarTooltip />} />
                <Bar dataKey="cases" radius={[0, 4, 4, 0]} barSize={32}>
                  {nationalDivorceCauses.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                  <LabelList
                    dataKey="cases"
                    position="right"
                    formatter={(v: number) => v.toLocaleString("id-ID")}
                    style={{ fill: "#9CA3AF", fontSize: 11, fontFamily: "var(--font-mono)" }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div
              className="mt-4 rounded-lg p-3 flex items-center gap-2"
              style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)" }}
            >
              <span className="text-sm">🔴</span>
              <p className="font-body text-xs text-gray-400">
                Judi online adalah satu-satunya kategori yang terus{" "}
                <span style={{ color: "#DC2626" }} className="font-semibold">MENINGKAT</span> setiap tahun
              </p>
            </div>
          </motion.div>

          {/* Right: 3 comparison cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            {nationalDivorceCauses.map((cause, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-5 border"
                style={{
                  background: cause.trend === "naik" ? "rgba(220,38,38,0.06)" : "#1A1A1A",
                  borderColor: cause.trend === "naik" ? "#DC2626" : "#2D2D2D",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {cause.trend === "naik" ? (
                      <TrendingUp size={18} style={{ color: "#DC2626" }} />
                    ) : (
                      <TrendingDown size={18} style={{ color: "#059669" }} />
                    )}
                    <h4 className="font-display text-white text-base uppercase tracking-wide">
                      {cause.cause}
                    </h4>
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded font-bold ${
                      cause.trend === "naik"
                        ? "bg-red-900/50 text-red-400"
                        : "bg-emerald-900/30 text-emerald-400"
                    }`}
                  >
                    {cause.trend === "naik" ? "↑ NAIK TAJAM" : "↓ MENURUN"}
                  </span>
                </div>
                <p
                  className="font-mono text-2xl font-bold mb-1"
                  style={{ color: cause.trend === "naik" ? "#DC2626" : "#9CA3AF" }}
                >
                  {cause.cases.toLocaleString("id-ID")}
                </p>
                <p className="font-body text-gray-500 text-sm">{cause.description}</p>
                {cause.trend === "naik" && (
                  <div
                    className="mt-3 inline-block px-2 py-1 rounded text-xs font-bold font-mono"
                    style={{ background: "#DC2626", color: "#fff" }}
                  >
                    ⚠ ANOMALI!
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-12 pl-6 italic font-body text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl"
          style={{ borderLeft: "4px solid #DC2626" }}
        >
          "Ketika dunia berhasil menekan angka perceraian —
          judi online berjalan di arah yang sebaliknya."
        </motion.blockquote>
      </div>
    </section>
  )
}
