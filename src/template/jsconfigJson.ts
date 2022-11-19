import { TempItem } from "src/makeBaseTemplate";

export const jsconfigJson: TempItem = [
  "jsconfig.json",
  {
    ext: "json",
    path: "./jsconfig",
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
