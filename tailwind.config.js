/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        headings: ["Montserrat", "sans-serif"],
      },
      colors: {
        homeroom_bg: "#f8f9fa", // A light, clean background for lesson content
        // Add other custom colors for the platform
      },
    },
  },
  plugins: [],
}
