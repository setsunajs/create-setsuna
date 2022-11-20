import { fileTemps, TempItem } from "src/makeBaseTemplate";

export const tailwindCss = () => {
  const content: TempItem = [
    "tailwind.css",
    {
      ext: "css",
      path: "./src/assets/tailwind",
      value: `@tailwind base;
  @tailwind components;
  @tailwind utilities;`
    }
  ]
  
  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}