/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        "colors": {
            "primary": "#6B46C1", // Soft Purple from SCREEN_16
            "secondary": "#3182CE", // Soft Blue from SCREEN_16
            "tertiary": "#805AD5",
            "background": "#F5F7FF", // Soft lavender/blue tint background
            "surface": "#FFFFFF",
            "on-surface": "#1A202C",
            "on-surface-variant": "#4A5568",
            "outline": "#E2E8F0",
            "outline-variant": "#E2E8F0",
            "error": "#E53E3E",
            "primary-container": "#6B46C11A", // 10% opacity primary
            "secondary-container": "#3182CE1A", // 10% opacity secondary
            "surface-container": "#F1F5F9",
            "surface-container-high": "#E2E8F0",
            "surface-container-low": "#F8FAFC",
            "surface-container-lowest": "#FFFFFF"
        },
        "borderRadius": {
            "DEFAULT": "1rem",
            "lg": "2rem",
            "xl": "3.5rem",
            "full": "9999px"
        },
        "fontFamily": {
            "headline": ["Space Grotesk"],
            "body": ["Manrope"],
            "label": ["Inter"]
        }
    },
  },
  plugins: [],
}
