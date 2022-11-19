import { TempItem } from "src/makeBaseTemplate";

export const postcssConfig: TempItem = [
  "postcss.config.js",
  {
    ext: "js",
    path: "./postcss.config",
    value: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
  }
]
