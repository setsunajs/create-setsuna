#!/usr/bin/env node

import { relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { banner } from "../lib/banner.js"
import chalk from "chalk"
import inquirer from "inquirer"
import { existsSync } from "node:fs"
import { mkdir, rm } from "node:fs/promises"
import { makeBasePackage } from "../lib/makeBasePackage"
import { makeBaseFile } from "../lib/makeBaseTemplate"
import { resolvePkgManagement } from "../lib/resolvePkgManagement"
import { normalizeCommand } from "../lib/normalizeCommand"

const __dirname = fileURLToPath(new URL(".", import.meta.url))
const proRoot = process.cwd()
const validateDir = /^[-_a-zA-Z0-9]+$/

export async function create() {
  console.clear()
  console.log(`\n${banner}\n`)
  const { project, router, cssTemp, override } = await inquirer.prompt([
    {
      type: "input",
      name: "project",
      message: chalk.yellow("Project name:"),
      default: "setsuna-project",
      async validate(input) {
        return validateDir.test(input)
          ? true
          : "The project name must be defined by (number, character, - _) Character composition within"
      }
    },
    {
      type: "confirm",
      name: "router",
      message: chalk.yellow("Add Router?"),
      default: true
    },
    {
      type: "confirm",
      name: "css",
      message: chalk.yellow("Add css template?"),
      default: true
    },
    {
      type: "list",
      name: "cssTemp",
      message: chalk.yellow("choose css template"),
      choices: ["tailwind", "css-module", "sass", "stylus", "less"],
      default: "css-module",
      when: ({ css }) => css
    },
    {
      type: "confirm",
      name: "override",
      message: chalk.yellow(
        "The file already exists in the directory. Do you want to overwrite it"
      ),
      default: false,
      when: ({ project }) => existsSync(resolve(proRoot, project))
    }
  ])

  /* 
    {
      project: 'template',
      router: true,
      css: true,
      cssTemp: 'css-module',
      override: false
    }
  */
  const projectDir = resolve(proRoot, project)
  if (override !== undefined) {
    if (!override) {
      throw "The file already exists in the directory. Do you want to overwrite it"
    }

    await rm(projectDir, { force: true, recursive: true })
  }

  await mkdir(projectDir)

  const { pkg, withPkgToTemplate } = makeBasePackage(project, projectDir)
  const { template, writeTemplateFile } = makeBaseFile(projectDir)
  const manage = resolvePkgManagement()

  if (router) {
    withRouterOptions(pkg, template)
  }

  if (css) {
    withCssOptions(cssTemp, pkg, template)
  }

  console.log(`\n${chalk.yellow(`project generating ...`)}`)

  withPkgToTemplate(template)
  writeTemplateFile()

  console.log(chalk.green(`cd ${relative(cwd, root)}`))
  console.log(chalk.green(normalizeCommand(manage, "install")))
  console.log(chalk.green(normalizeCommand(manage, "dev")))
  console.log(  )
}

create().catch(e => {
  console.error(e)
})
