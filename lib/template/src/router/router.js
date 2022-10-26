export const routerJsx = [
  "router.jsx",
  {
    ext: "jsx",
    path: "./src/router/router.jsx",
    value: `import { createBrowserRouter, Lazy } from "@setsuna/router"
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

export const router = [
  "router",
  {
    ext: "",
    path: "./src/router",
    content: new Map([routerJsx])
  }
]
