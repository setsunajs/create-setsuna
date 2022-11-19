export function normalizeCommand(manage: string, command: string) {
  return ["yarn", "pnpm"].includes(manage)
    ? `${manage} ${command}`
    : `${manage} ${command === "install" ? "install" : `run ${command}`}`
}
