#!/usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer"
import { relative, resolve } from "node:path"
import { banner } from "./banner.js"
import { existsSync } from "node:fs"
import { mkdir, rm } from "node:fs/promises"
import { makeBasePackage } from "./makeBasePackage.js"
import { makeBaseFile } from "./makeBaseTemplate.js"
import { resolvePkgManagement } from "./resolvePkgManagement.js"
import { normalizeCommand } from "./normalizeCommand.js"
import { withRouterOptions } from "./withRouterOptions.js"
import { withCssOptions } from "./withCssOptions.js"

const proRoot = process.cwd()
const validateDir = /^[-_a-zA-Z0-9]+$/

export async function create() {
  console.clear()
  console.log(`\n${banner}\n`)
  const { project, router, css, cssTemp, override } = await inquirer.prompt([
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
      throw chalk.red(
        "The file already exists in the directory. Do you want to overwrite it"
      )
    }

    await rm(projectDir, { force: true, recursive: true })
  }

  await mkdir(projectDir)

  const { pkg, withPkgToTemplate } = makeBasePackage(project)
  const { template, writeTemplateFile } = makeBaseFile(projectDir)
  const manage = await resolvePkgManagement()

  if (router) {
    withRouterOptions(pkg, template)
  }

  if (css) {
    withCssOptions(cssTemp, pkg, template)
  }

  console.log(`\n${chalk.yellow(`project generating ...`)}`)

  withPkgToTemplate(template)
  writeTemplateFile()

  console.log()
  console.log("\n" + chalk.green(`cd ${relative(proRoot, projectDir)}`))
  console.log("\n" + chalk.green(normalizeCommand(manage, "install")))
  console.log("\n" + chalk.green(normalizeCommand(manage, "dev")))
  console.log()
}

create().catch(e => {
  console.error(e)
})
