/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1E3A8A",
        brandLightBlue: "#38BDF8",
        brandRed: "#EF4444",
        brandPurple: "#7C3AED",
        brandGray: "#F3F4F6",
      },

      backgroundImage: {
        brandGradient:
          "linear-gradient(135deg, #1E3A8A, #EF4444)",
      },

      boxShadow: {
        glow: "0 10px 40px rgba(30,58,138,0.25)",
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
    },
  },
  plugins: [],
};
