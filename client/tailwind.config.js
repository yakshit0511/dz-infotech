/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080D1A",      // Dark Indigo-Navy (main text & dark hover cards)
        accent: "#E8622A",       // Brand Orange
        "bg-light": "#F4F6F9",   // Professional cool gray-blue background for sections
        "muted-gray": "#64748B", // Readably dark Slate-500 for body copy
        "card-border": "rgba(8, 13, 26, 0.08)", // Subtle border for light cards
        "footer-dark": "#040612" // Deep black-navy footer background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(8, 13, 26, 0.05)",
        "premium-hover": "0 20px 40px -15px rgba(232, 98, 42, 0.15)",
        glow: "0 0 20px rgba(232, 98, 42, 0.2)"
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(#e2e8f0 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
}
