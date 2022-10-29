import { appJsx } from "./appJsx.js"
import { mainJsx } from "./mainJsx.js"
import { styleCss } from "./styleCss.js"
import { assets } from "./assets/assets.js"

export const src = [
  "src",
  {
    ext: "",
    path: "./src",
    content: new Map([mainJsx, appJsx, styleCss, assets])
  }
]
