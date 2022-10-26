export const errorJsx = [
  "errorJsx",
  {
    ext: "jsx",
    path: "./modules/Error/Error.jsx",
    value: `import { useNavigate } from "@setsuna/router"

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

export const Error = [
  "Error",
  {
    ext: "",
    path: "./modules/Error",
    content: new Map([errorJsx])
  }
]