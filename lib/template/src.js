import { appJsx } from "./src/appJsx";
import { mainJsx } from "./src/mainJsx";
import { styleCss } from "./src/styleCss";
import { assets } from "./src/assets"

export const src = [
  "src",
  {
    ext: "",
    path: "./src",
    content: new Map([
      mainJsx,
      appJsx,
      styleCss,
      assets
    ])
  }
]
