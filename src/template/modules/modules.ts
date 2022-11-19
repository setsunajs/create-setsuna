import { TempItem } from "src/makeBaseTemplate"
import { Error } from "./Error/Error"
import { Home } from "./Home/Home"

export const modules_: TempItem = [
  "modules",
  {
    ext: "",
    path: "./modules",
    content: new Map([Home, Error])
  }
]
