export function makeBasePackage(project) {
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
  const withPkgToTemplate = template => {
    template.set("package.json", {
      ext: "json",
      path: "./package.json",
      value: pkg
    })
  }

  return { pkg, withPkgToTemplate }
}
