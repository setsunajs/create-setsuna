import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const tsconfigNodeJson = () => {
  const content: TempItem = [
    "tsconfig.node.json",
    {
      ext: "json",
      path: "./tsconfig.node",
      value: {
        compilerOptions: {
          composite: true,
          module: "esnext",
          moduleResolution: "node"
        },
        include: ["vite.config.ts"]
      }
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
