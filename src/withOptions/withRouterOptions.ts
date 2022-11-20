import { router } from "../template/src/router/router.js"
import { modules_ } from "../template/modules/modules.js"
import { PKG } from "../makeBasePackage.js"
import { fileTemps, Temp } from "../makeBaseTemplate.js"

export function withRouterOptions(pkg: PKG, template: Temp) {
  pkg.dependencies["@setsunajs/router"] = "^0.2.0"

  const modules__ = modules_()
  template.set(modules__[0], modules__[1])

  const src = fileTemps!.get("src")!.content!
  const router_ = router()
  src.set(router_[0], router_[1])

  const main = fileTemps!.get("main.jsx")!
  main.value = main
    .value!.replace(/^/, `import { AppRouter } from "./router/router"\n\n`)
    .replace(/(<App \/>)/, `<AppRouter>$1</AppRouter>`)

  const app = src.get("App.jsx")!
  app.value = app
    .value!.replace(/^/, `import { RouterView } from "@setsunajs/router"\n\n`)
    .replace(
      /(<h1 class="title">Welcome to setsuna\.js app<\/h1>)/,
      "$1\n      <RouterView />"
    )

  const homeJsx = fileTemps!.get("Home.jsx")!
  homeJsx.value! = homeJsx
    .value!.replace(/^/, `import { FC } from "setsunajs"\n`)
    .replace("const Home", "const Home: FC")

  const errorJsx = fileTemps!.get("Error.jsx")!
  errorJsx.value! = errorJsx
    .value!.replace(/^/, `import { FC } from "setsunajs"\n`)
    .replace("const Error", "const Error: FC")
}
