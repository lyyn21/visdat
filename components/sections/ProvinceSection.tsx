"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts"

// ─── DYNAMIC IMPORT — wajib ssr: false untuk leaflet ─────────────────────────
const IndonesiaMap = dynamic(
  () => import("../map/IndonesiaMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[360px] bg-[#111111] rounded-xl border border-[#2D2D2D]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Memuat peta...</p>
        </div>
      </div>
    ),
  }
)

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PROVINCE_DATA = [
  { province: "Jawa Timur",  cases: 818,  pct: 28.3, color: "#7F1D1D" },
  { province: "Jawa Barat",  cases: 472,  pct: 16.3, color: "#991B1B" },
  { province: "Jawa Tengah", cases: 281,  pct: 9.7,  color: "#B91C1C" },
  { province: "Banten",      cases: 166,  pct: 5.7,  color: "#DC2626" },
  { province: "Lampung",     cases: 131,  pct: 4.5,  color: "#EF4444" },
]

type ProvinceEntry = typeof PROVINCE_DATA[number]

// ─── KOMPONEN UTAMA ───────────────────────────────────────────────────────────

export default function ProvinceSection() {
  const [selected, setSelected] = useState<ProvinceEntry | null>(null)

  return (
    <section id="peta" className="bg-[#0D0D0D] py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-red-800 text-red-500 text-xs px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Data BPS 2024
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            PETA SEBARAN KASUS
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Jawa menjadi episentrum — mencerminkan kepadatan penduduk dan
            penetrasi internet tertinggi di Indonesia.
          </p>
        </motion.div>

        {/* Grid: Peta (kiri) + Bar Chart (kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* ── KIRI: Peta ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Peta Leaflet */}
            <IndonesiaMap
              onProvinceSelect={setSelected}
              selectedProvince={selected?.province ?? null}
            />

            {/* Legend warna */}
            <div className="flex flex-wrap justify-center gap-4 mt-3">
              {[
                { color: "#7F1D1D", label: "Sangat Tinggi (Jawa Timur)" },
                { color: "#B91C1C", label: "Tinggi"                      },
                { color: "#EF4444", label: "Sedang"                      },
                { color: "#1E293B", label: "Tidak ada data"              },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
                  <span className="text-gray-500 text-xs">{label}</span>
                </div>
              ))}
            </div>

            {/* Info card provinsi yang dipilih */}
            {selected ? (
              <motion.div
                key={selected.province}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-[#1A1A1A] border border-red-800 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-red-400 text-xs uppercase tracking-widest mb-0.5">
                    Provinsi Dipilih
                  </p>
                  <p className="text-white font-bold text-lg">{selected.province}</p>
                  <p className="text-gray-400 text-xs">
                    {selected.pct}% dari total kasus nasional 2024
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-red-400 font-mono text-3xl font-bold">
                    {selected.cases.toLocaleString("id-ID")}
                  </p>
                  <p className="text-gray-500 text-xs">Kasus Perceraian</p>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-gray-600 text-xs underline mt-1 hover:text-gray-400 transition-colors"
                  >
                    Reset pilihan
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="mt-4 bg-[#111111] border border-[#2D2D2D] rounded-xl p-3 text-center">
                <p className="text-gray-600 text-xs">
                  Klik salah satu provinsi di peta untuk melihat detailnya
                </p>
              </div>
            )}
          </motion.div>

          {/* ── KANAN: Bar Chart Top 5 ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-[#111111] rounded-xl border border-[#2D2D2D] p-5">
              <p className="text-white font-semibold text-sm mb-0.5">
                5 Provinsi Kasus Tertinggi
              </p>
              <p className="text-gray-500 text-xs mb-5">Tahun 2024 · Sumber: BPS</p>

              <ResponsiveContainer width="100%" height={290}>
                <BarChart
                  data={[...PROVINCE_DATA].reverse()}
                  layout="vertical"
                  margin={{ top: 0, right: 55, bottom: 0, left: 10 }}
                  onClick={(data) => {
                    if (data?.activePayload?.[0]) {
                      const entry = data.activePayload[0].payload as ProvinceEntry
                      setSelected((prev) =>
                        prev?.province === entry.province ? null : entry
                      )
                    }
                  }}
                >
                  <XAxis type="number" hide domain={[0, 950]} />
                  <YAxis
                    type="category"
                    dataKey="province"
                    width={88}
                    tick={{ fill: "#9CA3AF", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <RechartTooltip
                    cursor={{ fill: "rgba(220,38,38,0.08)" }}
                    contentStyle={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid #DC2626",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [
                      `${value.toLocaleString("id-ID")} kasus`,
                      "Perceraian Akibat Judi",
                    ]}
                  />
                  <Bar
                    dataKey="cases"
                    radius={[0, 4, 4, 0]}
                    isAnimationActive
                    animationDuration={1200}
                    style={{ cursor: "pointer" }}
                  >
                    {[...PROVINCE_DATA].reverse().map((entry) => (
                      <Cell
                        key={entry.province}
                        fill={
                          selected?.province === entry.province
                            ? "#F87171"
                            : entry.color
                        }
                      />
                    ))}
                    <LabelList
                      dataKey="cases"
                      position="right"
                      style={{
                        fill: "#EF4444",
                        fontSize: 11,
                        fontFamily: "monospace",
                      }}
                      formatter={(v: number) => v.toLocaleString("id-ID")}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* Catatan penting */}
              <div className="mt-4 bg-red-950/30 border border-red-900/40 rounded-lg p-3">
                <p className="text-red-400 text-xs font-semibold mb-1">
                  ⚠️ Konsentrasi di Pulau Jawa
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  5 provinsi ini menyumbang lebih dari{" "}
                  <span className="text-white font-semibold">60%</span> total
                  kasus perceraian akibat judi online seluruh Indonesia 2024.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
