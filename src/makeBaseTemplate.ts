import { mkdirSync, writeFileSync } from "node:fs"
import * as path from "node:path"
import { indexHtml } from "./template/indexHtml"
import { public_ } from "./template/public/public"
import { src } from "./template/src/src"
import { viteConfig } from "./template/viteConfig"

export type Temp = Map<string, TempContent>
export type TempItem = [string, TempContent]
export type TempContent = {
  ext: string
  path: string
  value?: string | Record<string, any>
  content?: Temp
}

export let fileTemps: Temp | null = null

export function makeBaseFile(projectDir: string) {
  const template: Temp = new Map([indexHtml(), viteConfig(), src(), public_()])
  const resolve = (...ps: string[]) => path.resolve(projectDir, ...ps)
  const writeTemplateFile = (content: Temp) => {
    content.forEach(({ ext, path, value, content }) => {
      if (ext === "json") {
        writeFileSync(
          resolve(path + "." + ext),
          JSON.stringify(value, null, 2),
          "utf-8"
        )
      } else if (ext === "") {
        mkdirSync(resolve(path))
        writeTemplateFile(content!)
      } else {
        writeFileSync(resolve(path + "." + ext), value as string, "utf-8")
      }
    })
  }
  fileTemps = new Map()

  return {
    template,
    writeTemplateFile: () => writeTemplateFile(template)
  }
}
