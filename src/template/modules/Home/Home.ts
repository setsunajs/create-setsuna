import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const homeJsx = () => {
  const content: TempItem = [
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

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}

export const Home = () => {
  const content: TempItem = [
    "Home",
    {
      ext: "",
      path: "./modules/Home",
      content: new Map([homeJsx()])
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
