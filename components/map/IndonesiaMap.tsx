"use client"

import { useEffect, useRef, useState } from "react"
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import type { Layer, PathOptions, GeoJSON as LeafletGeoJSON } from "leaflet"
import type { Feature, GeoJsonObject } from "geojson"

// ─── DATA PROVINSI ────────────────────────────────────────────────────────────

const PROVINCE_DATA = [
  { province: "Jawa Timur",  cases: 818,  pct: 28.3, color: "#7F1D1D" },
  { province: "Jawa Barat",  cases: 472,  pct: 16.3, color: "#991B1B" },
  { province: "Jawa Tengah", cases: 281,  pct: 9.7,  color: "#B91C1C" },
  { province: "Banten",      cases: 166,  pct: 5.7,  color: "#DC2626" },
  { province: "Lampung",     cases: 131,  pct: 4.5,  color: "#EF4444" },
] as const

// Bounds Indonesia: [SW corner, NE corner]
const INDONESIA_BOUNDS: [[number, number], [number, number]] = [
  [-11.5, 92.0],
  [6.5, 142.0],
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function readProvinceName(props: Record<string, unknown>): string {
  const raw =
    (props?.state as string) ||
    (props?.Propinsi as string) ||
    (props?.PROPINSI as string) ||
    (props?.PROVINSI as string) ||
    (props?.name as string) ||
    (props?.NAME_1 as string) ||
    (props?.province as string) ||
    (props?.Provinsi as string) ||
    ""
  return raw.toUpperCase().trim()
}

function matchProvince(geoName: string) {
  if (!geoName) return null
  return PROVINCE_DATA.find((d) => {
    const key = d.province.toUpperCase()
    return (
      geoName === key ||
      geoName.includes(key) ||
      key.split(" ").every((word) => geoName.includes(word))
    )
  }) ?? null
}

// ─── INTERFACE ───────────────────────────────────────────────────────────────

interface IndonesiaMapProps {
  onProvinceSelect: (province: typeof PROVINCE_DATA[number] | null) => void
  selectedProvince: string | null
}

// ─── KOMPONEN PETA ───────────────────────────────────────────────────────────

export default function IndonesiaMap({
  onProvinceSelect,
  selectedProvince,
}: IndonesiaMapProps) {
  const [geoData, setGeoData] = useState<GeoJsonObject | null>(null)
  const [loadError, setLoadError] = useState(false)
  const geoJsonRef = useRef<LeafletGeoJSON | null>(null)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Gagal load GeoJSON")
        return res.json()
      })
      .then((data) => setGeoData(data))
      .catch(() => setLoadError(true))
  }, [])

  const getStyle = (feature?: Feature): PathOptions => {
    const name = readProvinceName((feature?.properties ?? {}) as Record<string, unknown>)
    const match = matchProvince(name)
    const isSelected = selectedProvince === match?.province

    return {
      fillColor: isSelected ? "#F87171" : (match?.color ?? "#1E293B"),
      fillOpacity: isSelected ? 0.95 : match ? 0.80 : 0.45,
      color: match ? "#4B5563" : "#374151",
      weight: isSelected ? 1.5 : 0.6,
    }
  }

  const onEachFeature = (feature: Feature, layer: Layer) => {
    const name = readProvinceName((feature?.properties ?? {}) as Record<string, unknown>)
    const match = matchProvince(name)

    if (match) {
      layer.bindTooltip(
        `<div style="
          background:#1A1A1A;
          border:1px solid #DC2626;
          border-radius:10px;
          padding:10px 14px;
          font-family:Inter,sans-serif;
          min-width:170px;
          box-shadow:0 4px 20px rgba(220,38,38,0.3);
        ">
          <div style="color:#9CA3AF;font-size:10px;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px">
            Perceraian Akibat Judi
          </div>
          <div style="color:#FFFFFF;font-size:15px;font-weight:700;margin-bottom:4px">
            ${match.province}
          </div>
          <div style="color:#EF4444;font-size:24px;font-weight:800;font-family:monospace;line-height:1">
            ${match.cases.toLocaleString("id-ID")}
          </div>
          <div style="color:#6B7280;font-size:11px;margin-top:2px">
            kasus · ${match.pct}% dari nasional
          </div>
          <div style="
            margin-top:8px;
            padding:4px 8px;
            background:rgba(220,38,38,0.15);
            border-radius:4px;
            color:#FCA5A5;
            font-size:10px;
          ">
            Klik untuk sorot di grafik →
          </div>
        </div>`,
        {
          sticky: true,
          opacity: 1,
          className: "leaflet-custom-tooltip",
          offset: [12, 0],
        }
      )
    }

    layer.on({
      mouseover: (e) => {
        const l = e.target as unknown as {
          setStyle: (s: PathOptions) => void
          bringToFront: () => void
        }
        l.setStyle({
          fillOpacity: 0.95,
          color: match ? "#EF4444" : "#6B7280",
          weight: 1.2,
          fillColor: match
            ? selectedProvince === match.province
              ? "#F87171"
              : match.color
            : "#2D3748",
        })
        l.bringToFront()
      },
      mouseout: () => {
        if (geoJsonRef.current) {
          geoJsonRef.current.resetStyle(layer as never)
        }
      },
      click: () => {
        onProvinceSelect(match ?? null)
      },
    })
  }

  if (!geoData && !loadError) {
    return (
      <div className="flex items-center justify-center h-[360px] bg-[#111111] rounded-xl border border-[#2D2D2D]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Memuat peta Indonesia...</p>
        </div>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="flex items-center justify-center h-[360px] bg-[#111111] rounded-xl border border-red-900/50">
        <div className="text-center p-6">
          <p className="text-red-400 text-sm font-semibold mb-1">⚠️ Peta gagal dimuat</p>
          <p className="text-gray-600 text-xs">Periksa koneksi internet dan refresh halaman</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative rounded-xl overflow-hidden border border-[#2D2D2D]">
      <MapContainer
        bounds={INDONESIA_BOUNDS}
        style={{ height: "360px", width: "100%", background: "#111111" }}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={10}
        />

        {geoData && (
          <GeoJSON
            key={selectedProvince ?? "default"}
            ref={(ref) => { geoJsonRef.current = ref }}
            data={geoData}
            style={getStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>

      {/* Atribusi manual */}
      <div className="absolute bottom-1 right-2 text-[9px] text-gray-600 z-[1000]">
        © CartoDB · © OpenStreetMap
      </div>

      {/* Label hint */}
      <div className="absolute top-2 left-2 bg-black/60 text-gray-400 text-xs px-2 py-1 rounded z-[1000]">
        Hover = info · Klik = sorot
      </div>
    </div>
  )
}
