import { TempItem } from "src/makeBaseTemplate";

export const viteConfig: TempItem = [
  "vite.config.js",
  {
    ext: "js",
    path: "./vite.config",
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
