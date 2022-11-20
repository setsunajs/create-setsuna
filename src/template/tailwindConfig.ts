import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const tailwindConfig = (lang: string) => {
  const content: TempItem = [
    "tailwind.config.cjs",
    {
      ext: "cjs",
      path: "./tailwind.config",
      value: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{${lang === "ts" ? "ts,tsx" : "js,jsx"}}",
    "./modules/**/*.{${lang === "ts" ? "ts,tsx" : "js,jsx"}}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
