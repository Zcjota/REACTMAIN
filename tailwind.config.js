/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on where your React files are located
    "./public/index.html", // Include this if you have HTML files that need Tailwind processing
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 1s infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.6" },
        },
      },
      colors: {
        "gray-900": "#1a202c",
        "gray-700": "#2d3748",
      },
    },
  },
  plugins: [],
};
