import { postcssConfig } from "./template/postcssConfig.js"
import { tailwindConfig } from "./template/tailwindConfig.js"
import { scopeModuleCss } from "./template/src/scopeModuleCss.js"
import { tailwindCss } from "./template/src/assets/tailwindCss.js"
import { Temp } from "./makeBaseTemplate.js"
import { PKG } from "./makeBasePackage.js"

export function withCssOptions(type: string, pkg: PKG, template: Temp) {
  const src = template.get("src")!.content!

  if (type === "tailwind") {
    pkg.devDependencies["autoprefixer"] = "^10.4.12"
    pkg.devDependencies["postcss"] = "^8.4.18"
    pkg.devDependencies["tailwindcss"] = "^3.2.1"

    template.set(postcssConfig[0], postcssConfig[1])
    template.set(tailwindConfig[0], tailwindConfig[1])

    const main = src.get("main.jsx")!
    main.value = main.value!.replace(
      /(import ".\/style.css")/,
      `$1\nimport "./assets/tailwind.css"`
    )

    const assets = src.get("assets")!.content!
    assets.set(tailwindCss[0], tailwindCss[1])
    return
  }

  const { ext, version } = resolveCssConfig(type)!
  if (type !== "css-module") {
    pkg.devDependencies[type] = version
  }

  src.set(`scope.module.${ext}`, {
    ext,
    path: `./src/scope.module.${ext}`,
    value: scopeModuleCss[1].value
  })

  const app = src.get("App.jsx")!
  app.value = app.value!.replace(
    /^/,
    `import style from "./scope.module.${ext}"\n`
  )
  app.value = app.value!.replace(/"title"/, `{"title " + style.color}`)
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
