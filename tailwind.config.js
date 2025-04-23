/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "black" },
        },
      },
      animation: {
        typewriter:
          "typewriter 3s steps(40, end) forwards, blink 0.75s step-end infinite",
      },
      colors: {
        primary: "#244b6b",
        litePrimary: "#316792",
        accent: "#d3b167",
      },
    },
  },
};
