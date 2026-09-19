/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "float-heart": "floatHeart 6s ease-in-out infinite",
        "float-heart-slow": "floatHeart 8s ease-in-out infinite",
        "float-heart-fast": "floatHeart 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        sparkle: "sparkle 2s ease-in-out infinite",
      },
      keyframes: {
        floatHeart: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(-10vh) rotate(720deg)",
            opacity: "0",
          },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(244, 63, 94, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(244, 63, 94, 0.6)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
