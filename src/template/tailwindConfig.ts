import { TempItem } from "src/makeBaseTemplate";

export const tailwindConfig: TempItem = [
  "tailwind.config.js",
  {
    ext: "js",
    path: "./tailwind.config",
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
