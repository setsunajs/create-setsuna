export const tailwindConfig = [
  "tailwind.config.js",
  {
    ext: "js",
    path: "./tailwind.config.js",
    value: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./modules/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
  }
]
