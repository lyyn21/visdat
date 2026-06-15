"use client"

import { motion } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"

interface StatCardProps {
  value?: string | number
  numericValue?: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sublabel?: string
  color?: "red" | "gold" | "green"
  animated?: boolean
}

const colorMap = {
  red: "#DC2626",
  gold: "#D97706",
  green: "#059669",
}

const borderColorMap = {
  red: "border-t-red-600",
  gold: "border-t-amber-600",
  green: "border-t-emerald-600",
}

export default function StatCard({
  value,
  numericValue,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  sublabel,
  color = "red",
  animated = false,
}: StatCardProps) {
  const hexColor = colorMap[color]
  const borderClass = borderColorMap[color]

  return (
    <motion.div
      className={`bg-[#1A1A1A] border border-[#2D2D2D] border-t-4 ${borderClass} rounded-lg p-6 cursor-default`}
      whileHover={{ scale: 1.02, backgroundColor: "#222222" }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="font-mono text-3xl sm:text-4xl font-bold mb-2 leading-none"
        style={{ color: hexColor }}
      >
        {animated && numericValue !== undefined ? (
          <AnimatedCounter
            end={numericValue}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-white font-body text-sm font-medium">{label}</div>
      {sublabel && (
        <div className="text-gray-500 font-body text-xs mt-1">{sublabel}</div>
      )}
    </motion.div>
  )
}
