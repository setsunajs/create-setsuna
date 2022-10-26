export const mainJsx = [
  "main.jsx",
  {
    ext: "jsx",
    path: "./src/main.jsx",
    value: `import { render } from "@setsuna/setsuna"
import { App } from "./App"
import "./style.css"

render(
  <App />,
  document.querySelector("#root")
)`
  }
]
