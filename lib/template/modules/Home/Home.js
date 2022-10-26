export const homeJsx = [
  "home.jsx",
  {
    ext: "jsx",
    path: "./modules/Home/Home.jsx",
    value: `import { useNavigate } from "@setsuna/router"

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

export const Home = [
  "Home",
  {
    ext: "",
    path: "./modules/Home",
    content: new Map([homeJsx])
  }
]
