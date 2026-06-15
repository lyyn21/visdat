"use client"

import { ExternalLink } from "lucide-react"
import { sources, teamMembers } from "@/lib/data"

export default function FooterSection() {
  return (
    <footer
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "#080808", borderTop: "1px solid #2D2D2D" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 - Logo + closing message */}
          <div>
            <span
              className="font-display text-sm tracking-widest font-bold uppercase block mb-4"
              style={{ color: "#DC2626" }}
            >
              JUDOL & PERCERAIAN
            </span>
            <p className="font-body text-gray-400 text-sm leading-relaxed">
              Judi online bukan sekadar masalah individu — ini adalah krisis sosial yang
              sedang menghancurkan ribuan keluarga Indonesia setiap tahunnya.
            </p>
            <div
              className="mt-5 inline-block px-3 py-1.5 rounded text-xs font-mono font-bold"
              style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)", color: "#DC2626" }}
            >
              📊 DATA RESMI · BUKAN PROPAGANDA
            </div>
          </div>

          {/* Column 2 - Data sources */}
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-widest mb-4">
              Sumber Data
            </h3>
            <ul className="flex flex-col gap-2.5">
              {sources.map((src, i) => (
                <li key={i}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-gray-400 text-sm hover:text-white transition-colors duration-200 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#DC2626" }}
                    />
                    {src.name}
                    <ExternalLink
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "#DC2626" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Team */}
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-widest mb-2">
              Kelompok Badak
            </h3>
            <p className="font-body text-gray-500 text-xs mb-4">
              Telkom University · 2026
            </p>
            <div className="flex flex-col gap-3">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-body text-gray-300 text-sm font-medium">
                    {member.name}
                  </span>
                  <span className="font-mono text-gray-600 text-xs">{member.nim}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2D2D2D] pt-6">
          <p className="font-body text-gray-600 text-xs text-center">
            © 2026 Kelompok Badak · Telkom University · Data: BPS, Komdigi, PPATK
          </p>
        </div>
      </div>
    </footer>
  )
}
