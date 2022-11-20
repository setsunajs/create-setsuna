#!/usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer"
import { relative, resolve } from "node:path"
import { banner } from "./banner.js"
import { existsSync } from "node:fs"
import { mkdir, rm } from "node:fs/promises"
import { makeBasePackage } from "./makeBasePackage"
import { makeBaseFile } from "./makeBaseTemplate"
import { resolvePkgManagement } from "./resolvePkgManagement.js"
import { normalizeCommand } from "./normalizeCommand.js"
import { withRouterOptions } from "./withOptions/withRouterOptions.js"
import { withCssOptions } from "./withOptions/withCssOptions.js"
import { withJsOptions } from "./withOptions/withJsOptions.js"
import { withTsOptions } from "./withOptions/withTsOptions.js"

const proRoot = process.cwd()
const validateDir = /^[-_a-zA-Z0-9]+$/

export async function create() {
  console.clear()
  console.log(`\n${banner}\n`)

  const { project, override } = await inquirer.prompt([
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
      name: "override",
      message: chalk.yellow(
        "The file already exists in the directory. Do you want to overwrite it"
      ),
      default: false,
      when: ({ project }) => existsSync(resolve(proRoot, project))
    }
  ])
  const projectDir = resolve(proRoot, project)
  if (override !== undefined) {
    if (!override) {
      throw chalk.red(
        "The file already exists in the directory. Do you want to overwrite it"
      )
    }

    await rm(projectDir, { force: true, recursive: true })
  }

  const { router, css, cssTemp, lang } = await inquirer.prompt([
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
      choices: ["css-module", "tailwind", "sass", "stylus", "less"],
      default: "css-module",
      when: ({ css }) => css
    },
    {
      type: "list",
      name: "lang",
      message: chalk.yellow("choose language type"),
      choices: ["js", "ts"],
      default: "js"
    },
    {
      type: "confirm",
      name: "format",
      message: chalk.yellow("add prettier?"),
      default: true
    }
  ])

  /* 
    {
      project: 'template',
      override: false

      router: true,
      css: true,
      cssTemp: 'css-module',
      lang: javascript,
      format: true
    }
  */
  await mkdir(projectDir)

  const { pkg, withPkgToTemplate } = makeBasePackage(project)
  const { template, writeTemplateFile } = makeBaseFile(projectDir)
  const manage = await resolvePkgManagement()

  if (router) {
    withRouterOptions(pkg, template, lang)
  }

  if (css) {
    withCssOptions(cssTemp, pkg, template)
  }

  lang === "js" ? withJsOptions(pkg, template) : withTsOptions(pkg, template)

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
