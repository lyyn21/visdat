export const divorceByGamblingData = [
  { year: 2020, cases: 648 },
  { year: 2021, cases: 993 },
  { year: 2022, cases: 1191 },
  { year: 2023, cases: 1572 },
  { year: 2024, cases: 2889 },
  { year: 2025, cases: 4623 },
];

export const keyStats = {
  totalPlayers: 8800000,
  totalPopulation: 288300000,
  playersRatio: 3,
  growthPercent2020_2024: 345.8,
  growthPercent2020_2025: 365,
  sitesBlocked: 3452000,
  accountsBlocked: 25214,
  transactionValue2025: 286.84,  // Triliun Rupiah
  transactionValue2024: 400,     // Triliun Rupiah
  transactionDecreasePercent: 30,
  transactionDecreaseAmount: 113.16, // Triliun Rupiah
  peakYear: 2025,
  peakCases: 4623,
  lonjakan2023_2024: 83.77,      // Persen
};

export const nationalDivorceCauses = [
  {
    cause: "Perselisihan",
    cases: 282326,
    trend: "turun",
    color: "#4B5563",
    description: "Faktor utama perceraian nasional"
  },
  {
    cause: "Ekonomi",
    cases: 105727,
    trend: "turun",
    color: "#6B7280",
    description: "Kesulitan finansial rumah tangga"
  },
  {
    cause: "Judi Online",
    cases: 2889,
    trend: "naik",
    color: "#DC2626",
    description: "SATU-SATUNYA yang terus meningkat"
  },
];

export const nationalDivorceTotal = 399921; // 2024, sedang menurun

export const budgetComparison = [
  {
    label: "Judi Online 2025",
    sublabel: "Perputaran dana judol",
    value: 286.84,
    color: "#DC2626",
    isGambling: true
  },
  {
    label: "Anggaran Kesehatan 2025",
    sublabel: "Kesehatan seluruh rakyat Indonesia",
    value: 217.3,
    color: "#059669",
    isGambling: false
  },
  {
    label: "Program MBG 2025",
    sublabel: "Makan Bergizi Gratis seluruh Indonesia",
    value: 339,
    color: "#D97706",
    isGambling: false
  },
  {
    label: "Anggaran Pendidikan 2026",
    sublabel: "Pendidikan nasional",
    value: 757.8,
    color: "#3B82F6",
    isGambling: false
  },
];

export const provinceData = [
  { province: "Jawa Timur", cases: 818, percentage: 28.3, code: "JI" },
  { province: "Jawa Barat", cases: 472, percentage: 16.3, code: "JB" },
  { province: "Jawa Tengah", cases: 281, percentage: 9.7, code: "JT" },
  { province: "Banten", cases: 166, percentage: 5.7, code: "BT" },
  { province: "Lampung", cases: 131, percentage: 4.5, code: "LA" },
];

export const lukaData = [
  {
    letter: "L",
    title: "Ludes Aset",
    description: "Seluruh aset dan tabungan keluarga habis demi membiayai kebiasaan berjudi yang tak pernah bisa dipuaskan. Masa depan keluarga digadaikan untuk harapan palsu.",
    icon: "Wallet",
    colorHex: "#DC2626",
    colorClass: "text-red-600"
  },
  {
    letter: "U",
    title: "Utang Menumpuk",
    description: "Utang judi terus menumpuk dan menekan stabilitas ekonomi keluarga. Tekanan finansial yang tak tertahankan memicu ledakan konflik setiap harinya.",
    icon: "TrendingDown",
    colorHex: "#EA580C",
    colorClass: "text-orange-600"
  },
  {
    letter: "K",
    title: "Kepercayaan Hilang",
    description: "Kepercayaan hancur, digantikan kebencian dan konflik berkepanjangan. Kebohongan demi kebohongan meracuni fondasi pernikahan hingga tak tersisa.",
    icon: "HeartCrack",
    colorHex: "#D97706",
    colorClass: "text-amber-600"
  },
  {
    letter: "A",
    title: "Akhirnya Bercerai",
    description: "Ujung dari semua luka adalah meja pengadilan. Keluarga hancur berkeping-keping — dan anak-anak terpaksa menanggung beban yang bukan salah mereka.",
    icon: "Gavel",
    colorHex: "#CA8A04",
    colorClass: "text-yellow-600"
  }
];

export const governmentActions = [
  {
    stat: "3.452.000",
    label: "Situs Diblokir",
    period: "20 Okt 2024 – 16 Mei 2026",
    source: "Komdigi",
    icon: "ShieldOff",
    color: "#059669"
  },
  {
    stat: "25.214",
    label: "Rekening Diblokir",
    period: "Sepanjang 2025",
    source: "PPATK",
    icon: "CreditCard",
    color: "#059669"
  },
  {
    stat: "30%",
    label: "Penurunan Transaksi",
    period: "2024 → 2025",
    source: "BPS",
    icon: "TrendingDown",
    color: "#3B82F6"
  },
  {
    stat: "Rp113,16T",
    label: "Dana Berhasil Ditekan",
    period: "Rp400T → Rp286,84T",
    source: "BPS",
    icon: "ShieldCheck",
    color: "#059669"
  },
];

export const sources = [
  { name: "Badan Pusat Statistik (BPS)", url: "https://bps.go.id" },
  { name: "Komdigi", url: "https://komdigi.go.id" },
  { name: "PPATK", url: "https://ppatk.go.id" },
  { name: "Goodstats.id", url: "https://goodstats.id" },
];

export const teamMembers = [
  { name: "Aditya Dwi Aryanto", nim: "103132400027" },
  { name: "Fauzi Romadhoni", nim: "103132400025" },
  { name: "Khairun Fahmi", nim: "103132400035" },
];
