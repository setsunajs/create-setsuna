import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const assets = () => {
  const content: TempItem = [
    "assets",
    {
      ext: "",
      path: "./src/assets",
      content: new Map()
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
