import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const mainJsx = () => {
  const content: TempItem = [
    "main.jsx",
    {
      ext: "jsx",
      path: "./src/main",
      value: `import { createRoot } from "setsunajs"
import { App } from "./App"
import "./style.css"

createRoot(document.querySelector("#root")).mount(<App />)
`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
