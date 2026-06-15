"use client"

interface SectionTitleProps {
  title: string
  subtitle?: string
  accent?: "red" | "gold" | "green"
  centered?: boolean
}

const accentColors = {
  red: "#DC2626",
  gold: "#D97706",
  green: "#059669",
}

export default function SectionTitle({
  title,
  subtitle,
  accent = "red",
  centered = false,
}: SectionTitleProps) {
  const color = accentColors[accent]

  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {/* Eyebrow line */}
      <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
        <div
          className="h-px w-12"
          style={{ background: color }}
        />
        <span
          className="font-mono text-xs tracking-widest uppercase font-semibold"
          style={{ color }}
        >
          DATA RESMI
        </span>
        <div
          className="h-px w-12"
          style={{ background: color }}
        />
      </div>

      {/* Main title */}
      <h2
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight"
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-gray-400 font-body text-sm sm:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
