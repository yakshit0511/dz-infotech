/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A",      // Dark Navy
        accent: "#E8622A",       // Accent Orange
        "bg-light": "#F4F5F7",   // Light Gray Background
        "muted-gray": "#6B7280", // Muted Text Gray
        "card-border": "#E5E7EB",// Card border
        "footer-dark": "#080F1A" // Dark Footer
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(13, 27, 42, 0.08)",
        "premium-hover": "0 20px 40px -15px rgba(232, 98, 42, 0.15)",
        glow: "0 0 20px rgba(232, 98, 42, 0.2)"
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(#e5e7eb 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
}
