import { router } from "../template/src/router/router.js"
import { modules_ } from "../template/modules/modules.js"
import { PKG } from "../makeBasePackage.js"
import { Temp } from "../makeBaseTemplate.js"

export function withRouterOptions(pkg: PKG, template: Temp) {
  pkg.dependencies["@setsunajs/router"] = "^0.2.0"

  const modules__ = modules_()
  template.set(modules__[0], modules__[1])

  const src = template.get("src")!.content!
  const router_ = router()
  src.set(router_[0], router_[1])

  const main = src.get("main.jsx")!
  main.value = main.value!.replace(
    /^/,
    `import { AppRouter } from "./router/router"\n\n`
  )
  main.value = main.value!.replace(
    /(<App \/>)/,
    `<AppRouter>\n    $1\n  </AppRouter>`
  )

  const app = src.get("App.jsx")!
  app.value = app.value!.replace(
    /^/,
    `import { RouterView } from "@setsunajs/router"\n\n`
  )
  app.value = app.value!.replace(
    /(<h1 class="title">Welcome to setsuna\.js app<\/h1>)/,
    "$1\n      <RouterView />"
  )
}
