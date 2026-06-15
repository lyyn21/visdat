import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-danger': '#DC2626',
        'red-light': '#EF4444',
        'gold-stat': '#D97706',
        'gold-light': '#F59E0B',
        'green-gov': '#059669',
        'bg-card': '#1A1A1A',
        'bg-card-hover': '#222222',
        'bg-primary': '#080808',
        'bg-secondary': '#111111',
        'border-default': '#2D2D2D',
        'border-red': '#3D1515',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Oswald', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 10% 20%, rgba(220,38,38,0.15) 0%, transparent 60%), radial-gradient(ellipse at 90% 80%, rgba(220,38,38,0.08) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
};
export default config;
