import { errorJsx } from "./Error/errorJsx.js"
import { homeJsx } from "./Home/homeJsx.js"

export const modules = [
  "modules",
  {
    ext: "",
    path: "./modules",
    content: new Map([homeJsx, errorJsx])
  }
]
