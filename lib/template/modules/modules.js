import { Error } from "./Error/Error.js"
import { Home } from "./Home/Home.js"

export const modules_ = [
  "modules",
  {
    ext: "",
    path: "./modules",
    content: new Map([Home, Error])
  }
]
