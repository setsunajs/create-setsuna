import { fileTemps, TempItem } from "src/makeBaseTemplate";

export const indexHtml = () => {
  const content: TempItem = [
    "index.html",
    {
      ext: "html",
      path: "./index",
      value: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>setsuna.js app</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="./src/main.jsx" type="module"></script>
    </body>
  </html>`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
