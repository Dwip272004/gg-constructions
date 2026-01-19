/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        goldDark: "#B8962E",

        navy: "#0B1A2A",
        navyLight: "#0E2238",
        navyDark: "#081320",

        accentOrange: "#F7941D",
        accentCyan: "#22B7F2",

        textLight: "#F8FAFC",
        textMuted: "#CBD5E1",
        borderGold: "#C9A23A",
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(135deg, #081320, #0B1A2A, #0E2238)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 25px rgba(212,175,55,0.25)",
        card: "0 15px 40px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
