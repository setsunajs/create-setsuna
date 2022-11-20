import { fileTemps, TempItem } from "src/makeBaseTemplate"
import { Error } from "./Error/Error"
import { Home } from "./Home/Home"

export const modules_ = () => {
  const content: TempItem = [
    "modules",
    {
      ext: "",
      path: "./modules",
      content: new Map([Home(), Error()])
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
