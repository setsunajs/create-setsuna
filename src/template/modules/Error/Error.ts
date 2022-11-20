import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const errorJsx = () => {
  const content: TempItem = [
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

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}

export const Error = () => {
  const content: TempItem = [
    "Error",
    {
      ext: "",
      path: "./modules/Error",
      content: new Map([errorJsx()])
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
