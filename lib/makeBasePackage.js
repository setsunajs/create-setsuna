import { writeFileSync } from "node:fs"
import { resolve } from "node:path"

export function makeBasePackage(project, projectDir) {
  const pkg = {
    name: project,
    version: "0.0.0",
    scripts: {
      dev: "vite",
      build: "vite build"
    },
    dependencies: {
      "@setsuna/observable": "^0.0.1",
      "@setsuna/setsuna": "^0.0.1"
    },
    devDependencies: {
      vite: "^3.1.0",
      "@setsuna/plugin-setsuna": "^0.0.1"
    }
  }
  const withPkgToTemplate = () => {}

  return { pkg, withPkgToTemplate }
}
