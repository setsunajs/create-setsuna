import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const tsconfigJson = () => {
  const content: TempItem = [
    "tsconfig.json",
    {
      ext: "json",
      path: "./tsconfig",
      value: {
        compilerOptions: {
          target: "ESNext",
          useDefineForClassFields: true,
          lib: ["DOM", "DOM.Iterable", "ESNext"],
          allowJs: false,
          skipLibCheck: false,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          module: "ESNext",
          moduleResolution: "Node",
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: "preserve",
          types: []
        },
        include: [
          "src/**/*.ts",
          "src/**/*.tsx",
          "modules/**/*.ts",
          "modules/**/*.tsx"
        ],
        references: [{ path: "./tsconfig.node.json" }]
      }
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
