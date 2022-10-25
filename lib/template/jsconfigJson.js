export const jsconfigJson = [
  "jsconfig.json",
  {
    ext: "json",
    path: "/",
    value: {
      compilerOptions: {
        jsx: "preserve",
        baseUrl: ".",
        paths: {
          "@modules/*": ["modules/*"],
          "@assets/*": ["src/assets/*"]
        },
        types: []
      },
      include: [
        "src/**/*.js",
        "src/**/*.jsx",
        "src/**/*",
        "modules/**/*.js",
        "modules/**/*.jsx",
        "modules/**/*"
      ],
      exclude: ["node_modules"]
    }
  }
]
