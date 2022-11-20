import { PKG } from "src/makeBasePackage"
import { fileTemps, Temp } from "src/makeBaseTemplate"
import { tsconfigJson } from "src/template/tsConfigJson"
import { tsconfigNodeJson } from "src/template/tsconfigNodeJson"

export const withTsOptions = (pkg: PKG, template: Temp) => {
  pkg["devDependencies"].typescript = "^4.9.0"
  pkg["devDependencies"]["@types/node"] = "^18.0.0"

  const tsconfigJson_ = tsconfigJson()
  template.set(tsconfigJson_[0], tsconfigJson_[1])

  const tsconfigNodeJson_ = tsconfigNodeJson()
  template.set(tsconfigNodeJson_[0], tsconfigNodeJson_[1])

  const indexHtml = template.get("index.html")!
  indexHtml.value! = indexHtml.value!.replace("main.jsx", "tsx")

  template.get("vite.config.js")!.ext = "ts"

  const src = template.get("src")!.content!
  src.get("main.jsx")!.ext = "tsx"
  src.get("App.jsx")!.ext = "tsx"

  fileTemps!.forEach(item => {
    if (item.ext === "js") {
      item.ext = "ts"
    }
    else if (item.ext === "jsx") {
      item.ext = "tsx"
    }
  })
}
