import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const jsconfigJson = () => {
  const content: TempItem = [
    "jsconfig.json",
    {
      ext: "json",
      path: "./jsconfig",
      value: {
        compilerOptions: {
          jsx: "preserve",
          baseUrl: ".",
          paths: {
            "@modules/*": ["modules/*"],
            "@assets/*": ["src/assets/*"]
          },
          types: []
        },
        include: ["src/**/*.js", "src/**/*.jsx"],
        exclude: ["node_modules"]
      }
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
