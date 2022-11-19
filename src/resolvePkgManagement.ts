import { exec } from "node:child_process"

// pnpm > yarn > tnpm > > cnpm > npm
export function resolvePkgManagement() {
  return new Promise<string>(resolve => {
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

          exec("cnpm --version", err => {
            if (!err) {
              return resolve("cnpm")
            }

            resolve("npm")
          })
        })
      })
    })
  })
}
