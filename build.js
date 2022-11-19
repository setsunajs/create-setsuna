import { build } from "esbuild"
import { resolve } from "path"

build({
  entryPoints: [resolve(process.cwd(), "./src/create.ts")],
  outfile: "bin/create.cjs",
  incremental: true,
  bundle: true,
  format: "cjs",
  allowOverwrite: true,
  charset: "utf8",
  platform: "node",
  minify: true
})
  .then(() => {
    console.log(`build success `)
  })
  .finally(() => {
    process.exit(0)
  })
