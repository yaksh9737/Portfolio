/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class", // Enables dark mode using class
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0D0F1E", // Deep navy blue-black for a modern dark theme
        secondary: "#C3C3C3", // Muted gray for subtle contrast
        tertiary: "#131722", // Dark steel blue-gray
        accent: "#00FFD1", // Neon cyan for contrast (cyberpunk effect)
        highlight: "#FF007F", // Neon pink for pop elements
        "black-100": "#1A1C2C", // Soft dark blue-gray for UI elements
        "black-200": "#101223", // Almost black, but with a deep tone
        "white-100": "#F5F7FA", // Soft white for readability
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 225, 255, 0.3)", // Subtle neon cyan glow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "grid-pattern": "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", // Faint grid overlay for a techy feel
      },
    },
  },
  plugins: [],
};
