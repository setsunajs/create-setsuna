import { postcssConfig } from "../template/postcssConfig.js"
import { tailwindConfig } from "../template/tailwindConfig.js"
import { scopeModuleCss } from "../template/src/scopeModuleCss.js"
import { tailwindCss } from "../template/src/assets/tailwindCss.js"
import { Temp } from "../makeBaseTemplate.js"
import { PKG } from "../makeBasePackage.js"

export function withCssOptions(type: string, pkg: PKG, template: Temp, lang: string) {
  const src = template.get("src")!.content!

  if (type === "tailwind") {
    pkg.devDependencies["autoprefixer"] = "^10.4.12"
    pkg.devDependencies["postcss"] = "^8.4.18"
    pkg.devDependencies["tailwindcss"] = "^3.2.1"

    const postcssConfig_ = postcssConfig()
    template.set(postcssConfig_[0], postcssConfig_[1])

    const tailwindConfig_ = tailwindConfig(lang)
    template.set(tailwindConfig_[0], tailwindConfig_[1])

    const assets = src.get("assets")!.content!
    const tailwindCss_ = tailwindCss()
    assets.set(tailwindCss_[0], tailwindCss_[1])

    const main = src.get("main.jsx")!
    main.value = main.value!.replace(
      /(import ".\/style.css")/,
      `import "./assets/tailwind.css"\n$1`
    )
    return
  }

  const { ext, version } = resolveCssConfig(type)!
  if (type !== "css-module") {
    pkg.devDependencies[type] = version
  }

  const scopeModuleCss_ = scopeModuleCss(ext)
  src.set(scopeModuleCss_[0], scopeModuleCss_[1])

  const app = src.get("App.jsx")!
  app.value = app.value!.replace(
    /^/,
    `import style from "./scope.module.${ext}"\n`
  )
  app.value = app.value!.replace(
    /class="title"/,
    `class={"title " + style.color}`
  )
}

export function resolveCssConfig(type: string) {
  return {
    "css-module": {
      ext: "css"
    },
    sass: {
      ext: "scss",
      version: "^1.55.0"
    },
    less: {
      ext: "less",
      version: "^4.1.3"
    },
    stylus: {
      ext: "styl",
      version: "^0.59.0"
    }
  }[type]
}
