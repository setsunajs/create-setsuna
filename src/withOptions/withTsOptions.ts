import { PKG } from "src/makeBasePackage"
import { fileTemps, Temp } from "src/makeBaseTemplate"
import { tsconfigJson } from "src/template/tsconfig-json"
import { tsconfigNodeJson } from "src/template/tsconfigNodeJson"

export const withTsOptions = (pkg: PKG, template: Temp) => {
  pkg["devDependencies"].typescript = "^4.9.0"
  pkg["devDependencies"]["@types/node"] = "^18.0.0"

  const tsconfigJson_ = tsconfigJson()
  template.set(tsconfigJson_[0], tsconfigJson_[1])

  const tsconfigNodeJson_ = tsconfigNodeJson()
  template.set(tsconfigNodeJson_[0], tsconfigNodeJson_[1])

  const mainJsx = fileTemps!.get("main.jsx")!
  mainJsx.value! = mainJsx.value!.replace(/(querySelector\("#root"\))/, "$1!")

  const indexHtml = fileTemps!.get("index.html")!
  indexHtml.value! = indexHtml.value!.replace("main.jsx", "main.tsx")

  const appJsx = fileTemps!.get("App.jsx")!
  appJsx!.value = appJsx
    .value!.replace("const App", "const App: FC")
    .replace(/^/, `import { FC } from "setsunajs"\n`)

  fileTemps!.get("vite.config.js")!.ext = "ts"

  fileTemps!.forEach(item => {
    if (item.ext === "js") {
      item.ext = "ts"
    } else if (item.ext === "jsx") {
      item.ext = "tsx"
    }
  })
}
