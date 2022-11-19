import { appJsx } from "./appJsx"
import { mainJsx } from "./mainJsx"
import { styleCss } from "./styleCss"
import { assets } from "./assets/assets"
import { TempItem } from "src/makeBaseTemplate"

export const src: TempItem = [
  "src",
  {
    ext: "",
    path: "./src",
    content: new Map([mainJsx, appJsx, styleCss, assets])
  }
]
