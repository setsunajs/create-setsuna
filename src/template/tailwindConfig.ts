import { fileTemps, TempItem } from "src/makeBaseTemplate";

export const tailwindConfig = () => {
  const content: TempItem = [
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

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
