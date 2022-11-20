import { appJsx } from "./appJsx"
import { mainJsx } from "./mainJsx"
import { styleCss } from "./styleCss"
import { assets } from "./assets/assets"
import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const src = () => {
  const content: TempItem = [
    "src",
    {
      ext: "",
      path: "./src",
      content: new Map([mainJsx(), appJsx(), styleCss(), assets()])
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
