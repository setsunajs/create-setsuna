export function normalizeCommand(manage, command) {
  return ["yarn", "pnpm"].includes(manage)
    ? `${manage} ${command}`
    : `${manage} ${command === "install" ? command : `run ${command}`}`
}
