import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const viteEnvDts = () => {
  const content: TempItem = [
    "vite-env.d.ts",
    {
      ext: "d.ts",
      path: "./src/vite-env",
      value: `/// <reference types="vite/client" />
`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
