import { exec } from "node:child_process"

// pnpm > yarn > tnpm > npm
export function resolvePkgManagement() {
  return new Promise(resolve => {
    exec("pnpm --version", err => {
      if (!err) {
        return resolve("pnpm")
      }

      exec("yarn --version", err => {
        if (!err) {
          return resolve("yarn")
        }

        exec("tnpm --version", err => {
          if (!err) {
            return resolve("tnpm")
          }

          resolve("npm")
        })
      })
    })
  })
}
