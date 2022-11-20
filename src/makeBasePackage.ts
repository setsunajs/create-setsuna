import { Temp } from "./makeBaseTemplate"

export function makeBasePackage(project: string) {
  const pkg = {
    name: project,
    version: "0.0.0",
    scripts: {
      dev: "vite",
      build: "vite build"
    },
    dependencies: {
      "@setsunajs/observable": "^0.2.0",
      "setsunajs": "^0.1.0"
    },
    devDependencies: {
      vite: "^3.2.0",
      "@setsunajs/plugin-setsuna": "^0.2.2"
    }
  }
  const withPkgToTemplate = (template: Temp) => {
    template.set("package.json", {
      ext: "json",
      path: "./package",
      value: pkg
    })
  }

  return { pkg, withPkgToTemplate }
}

export type PKG = Record<string, any>