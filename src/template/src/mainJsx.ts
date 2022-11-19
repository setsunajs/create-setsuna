import { TempItem } from "src/makeBaseTemplate";

export const mainJsx: TempItem = [
  "main.jsx",
  {
    ext: "jsx",
    path: "./src/main",
    value: `import { createRoot } from "setsunajs"
import { App } from "./App"
import "./style.css"

createRoot(document.querySelector('#root')).mount(<App />)
`
  }
]
