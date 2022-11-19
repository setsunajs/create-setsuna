import { TempItem } from "src/makeBaseTemplate"

export const errorJsx: TempItem = [
  "errorJsx",
  {
    ext: "jsx",
    path: "./modules/Error/Error",
    value: `import { useNavigate } from "@setsunajs/router"

export function Error() {
  const navigate = useNavigate()
  const toHome = () => navigate.push("/")

  return () => <div>
    <p>error page</p>
    <button onClick={toHome}>to toHome</button>
  </div>
}`
  }
]

export const Error: TempItem = [
  "Error",
  {
    ext: "",
    path: "./modules/Error",
    content: new Map([errorJsx])
  }
]
