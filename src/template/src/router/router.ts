import { TempItem } from "src/makeBaseTemplate"

export const routerJsx: TempItem = [
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

export const router: TempItem = [
  "router",
  {
    ext: "",
    path: "./src/router",
    content: new Map([routerJsx])
  }
]
