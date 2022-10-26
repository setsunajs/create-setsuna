export const routerJsx = [
  "router.jsx",
  {
    ext: "jsx",
    path: "./src/router/router.jsx",
    value: `import { createBrowserRouter, Lazy } from "@setsuna/router"
    import { Home } from "@modules/Home/Home"
    import { Error } from "@modules/Error/Error"
    
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
      ],
      scrollBehavior() {
        return { top: 0 }
      }
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
