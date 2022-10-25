import * as path from "node:path"
import { indexHtml } from "./template/indexHtml"
import { jsconfigJson } from "./template/jsconfigJson"
import { src } from "./template/src"
import { viteConfig } from "./template/viteConfig"

export function makeBaseFile(projectDir) {
  const template = new Map([
    indexHtml,
    jsconfigJson,
    viteConfig,
    src
  ])
  const resolve = p => path.resolve(projectDir, p)
  const writeTemplateFile = () => {}

  return {
    template,
    writeTemplateFile
  }
}
