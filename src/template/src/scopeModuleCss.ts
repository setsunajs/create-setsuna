import { fileTemps, TempItem } from "src/makeBaseTemplate";

export const scopeModuleCss = (ext: string) => {
  const content: TempItem = [
    `scope.module.${ext}`,
    {
      ext,
      path: "./src/scope.module",
      value: `.color {
    font-style: italic;
  }`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
