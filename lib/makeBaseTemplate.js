import { mkdirSync, writeFileSync } from "node:fs"
import * as path from "node:path"
import { indexHtml } from "./template/indexHtml.js"
import { jsconfigJson } from "./template/jsconfigJson.js"
import { src } from "./template/src/src.js"
import { viteConfig } from "./template/viteConfig.js"

export function makeBaseFile(projectDir) {
  const template = new Map([indexHtml, jsconfigJson, viteConfig, src])
  const resolve = p => path.resolve(projectDir, p)
  const writeTemplateFile = content => {
    content.forEach(({ ext, path, value, content }) => {
      if (ext === "json") {
        writeFileSync(resolve(path), JSON.stringify(value, null, 2), "utf-8")
      } else if (ext === "") {
        mkdirSync(resolve(path))
        writeTemplateFile(content)
      } else {
        writeFileSync(resolve(path), value, "utf-8")
      }
    })
  }

  return {
    template,
    writeTemplateFile: () => writeTemplateFile(template)
  }
}
