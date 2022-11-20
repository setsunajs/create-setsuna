import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const postcssConfig = () => {
  const content: TempItem = [
    "postcss.config.cjs",
    {
      ext: "cjs",
      path: "./postcss.config",
      value: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
