/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg, #2563eb, #6b21a8)"
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}