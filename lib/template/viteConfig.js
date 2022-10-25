export const viteConfig = [
  "vite.config.js",
  {
    ext: "js",
    path: "/",
    value: `import { defineConfig } from "vite"
    import { setsunaPlugin } from "@setsuna/plugin-setsuna"
    
    export default defineConfig({
      plugins: [setsunaPlugin()],
      resolve: {
        alias: {
          "@modules": "/modules",
          "@assets": "/src/assets",
        }
      }
    })`
  }
]
