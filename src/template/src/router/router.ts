import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const routerJsx = () => {
  const content: TempItem = [
    "router.jsx",
    {
      ext: "jsx",
      path: "./src/router/router",
      value: `import { createBrowserRouter, Lazy } from "@setsunajs/router"
  import { Home } from "@modules/Home/Home"
  
  export const AppRouter = createBrowserRouter({
    routes: [
      {
        path: "/",
        component: <Home />
      },
      {
        path: ".*",
        component: <Lazy load={() => import("@modules/Error/Error")} /> 
      }
    ]
  })`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}

export const router = () => {
  const content: TempItem = [
    "router",
    {
      ext: "",
      path: "./src/router",
      content: new Map([routerJsx()])
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
