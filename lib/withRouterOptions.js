import { modules } from "./template/modules/modules.js"
import { router } from "./template/src/router/router.js"

export function withRouterOptions(pkg, template) {
  pkg.dependencies["@setsuna/router"] = "^0.0.1"
  template.set("modules", modules)

  const src = template.get("src").content
  const [t1, main] = src.get("mainJsx")
  const [t2, app] = src.get("appJsx")

  src.set("router", router)
  main.value = main.value.replace(
    /^/,
    `import { AppRouter } from "./router/router"`
  )
  main.value = main.value.replace(/(<App \/>)/, `<AppRouter>$1</AppRouter>`)
  app.value = app.value.replace(
    /^/,
    `import { RouterView } from "@setsuna/router"`
  )
  app.value = app.value.replace(
    /(<h1 class="title">Welcome to setsuna\.js app<\/h1>)/,
    "$1\n      <RouterView />"
  )
}
