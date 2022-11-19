import { TempItem } from "src/makeBaseTemplate"

export const homeJsx: TempItem = [
  "home.jsx",
  {
    ext: "jsx",
    path: "./modules/Home/Home",
    value: `import { useNavigate } from "@setsunajs/router"

export function Home() {
  const navigate = useNavigate()
  const toError = () => navigate.push("/error")

  return () => <div>
    <p>home page</p>
    <button onClick={toError}>to error path</button>
  </div>
}`
  }
]

export const Home: TempItem = [
  "Home",
  {
    ext: "",
    path: "./modules/Home",
    content: new Map([homeJsx])
  }
]
