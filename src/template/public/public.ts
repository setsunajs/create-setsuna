import { fileTemps, TempItem } from "src/makeBaseTemplate";

export const public_ = () => {
  const content: TempItem = [
    "public",
    {
      ext: "",
      path: "./public",
      content: new Map()
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
