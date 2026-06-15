"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts"
import SectionTitle from "@/components/ui/SectionTitle"
import { divorceByGamblingData } from "@/lib/data"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const chartData = divorceByGamblingData.map((d) => ({
  year: String(d.year),
  cases: d.cases,
}))

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-lg px-4 py-3 shadow-xl border"
        style={{ background: "#1A1A1A", borderColor: "#DC2626" }}
      >
        <p className="font-mono text-xs text-gray-400 mb-1">Tahun {label}</p>
        <p className="font-mono text-xl font-bold" style={{ color: "#DC2626" }}>
          {payload[0].value.toLocaleString("id-ID")}
        </p>
        <p className="font-body text-xs text-gray-400">Kasus Perceraian Akibat Judi</p>
      </div>
    )
  }
  return null
}

export default function TrendChartSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="tren" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle
            title="TREN PERCERAIAN AKIBAT JUDI ONLINE"
            subtitle="Data Badan Pusat Statistik (BPS) Indonesia · 2020–2025"
            accent="red"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="w-full rounded-xl border border-[#2D2D2D] bg-[#0D0D0D] p-4 sm:p-8"
        >
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ top: 20, right: 40, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D2D2D" />
              <XAxis
                dataKey="year"
                tick={{ fill: "#6B7280", fontSize: 12, fontFamily: "var(--font-mono)" }}
                axisLine={{ stroke: "#2D2D2D" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6B7280", fontSize: 12, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => v.toLocaleString("id-ID")}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x="2025"
                stroke="#DC2626"
                strokeDasharray="4 4"
                label={{
                  value: "4.623 — TERTINGGI",
                  position: "insideTopLeft",
                  fill: "#DC2626",
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  fontWeight: "bold",
                }}
              />
              <Area
                type="monotone"
                dataKey="cases"
                stroke="#DC2626"
                strokeWidth={3}
                fill="url(#redGradient)"
                dot={{ fill: "#DC2626", r: 6, strokeWidth: 2, stroke: "#080808" }}
                activeDot={{ r: 8, fill: "#EF4444", stroke: "#DC2626", strokeWidth: 2 }}
                isAnimationActive={true}
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Info boxes */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
        >
          <div
            className="rounded-xl p-5 border"
            style={{ background: "rgba(220,38,38,0.06)", borderColor: "rgba(220,38,38,0.3)" }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="font-display text-white text-sm font-bold uppercase tracking-wide mb-2">
                  ANOMALI NASIONAL
                </h4>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  Total perceraian nasional (<span className="text-white font-semibold">399.921 kasus</span>) sedang
                  TURUN — namun perceraian akibat judi justru{" "}
                  <span style={{ color: "#DC2626" }} className="font-semibold">
                    MELONJAK TAJAM
                  </span>{" "}
                  dan tidak berhenti.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-5 border"
            style={{ background: "rgba(217,119,6,0.06)", borderColor: "rgba(217,119,6,0.3)" }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <h4 className="font-display text-white text-sm font-bold uppercase tracking-wide mb-2">
                  KENAIKAN 5 TAHUN
                </h4>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  <span className="text-white font-semibold">648 kasus (2020)</span> →{" "}
                  <span style={{ color: "#D97706" }} className="font-semibold">
                    4.623 kasus (2025)
                  </span>{" "}
                  = <span style={{ color: "#D97706" }} className="font-bold">+365%</span>.{" "}
                  Naik hampir 4,5 kali lipat dalam lima tahun.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
