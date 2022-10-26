export const postcssConfig = [
  "postcss.config.js",
  {
    ext: "js",
    path: "./src/postcss.config.js",
    value: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
  }
]
