export const viteConfig = [
  "vite.config.js",
  {
    ext: "js",
    path: "./vite.config.js",
    value: `import { defineConfig } from "vite"
import { setsunaPlugin } from "@setsunajs/plugin-setsuna"

export default defineConfig({
  plugins: [setsunaPlugin()],
  resolve: {
    alias: {
      "@modules": "/modules",
      "@assets": "/src/assets"
    }
  }
})
`
  }
]
