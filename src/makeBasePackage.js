export function makeBasePackage(project) {
  const pkg = {
    name: project,
    version: "0.0.0",
    scripts: {
      dev: "vite",
      build: "vite build"
    },
    dependencies: {
      "@setsunajs/observable": "^0.1.2",
      "@setsunajs/setsuna": "^0.1.4"
    },
    devDependencies: {
      vite: "^3.1.0",
      "@setsunajs/plugin-setsuna": "^0.1.4"
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
