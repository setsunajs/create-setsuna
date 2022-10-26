import { router } from "./template/src/router/router.js"
import { modules_ } from "./template/modules/modules.js"

export function withRouterOptions(pkg, template) {
  pkg.dependencies["@setsuna/router"] = "^0.0.1"

  const src = template.get("src").content
  const main = src.get("main.jsx")
  const app = src.get("App.jsx")

  template.set(modules_[0], modules_[1])
  src.set(router[0], router[1])
  main.value = main.value.replace(
    /^/,
    `import { AppRouter } from "./router/router"\n\n`
  )
  main.value = main.value.replace(/(<App \/>)/, `<AppRouter>\n    $1\n  </AppRouter>`)
  app.value = app.value.replace(
    /^/,
    `import { RouterView } from "@setsuna/router"\n\n`
  )
  app.value = app.value.replace(
    /(<h1 class="title">Welcome to setsuna\.js app<\/h1>)/,
    "$1\n      <RouterView />"
  )
}
