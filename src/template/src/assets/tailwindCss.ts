import { TempItem } from "src/makeBaseTemplate";

export const tailwindCss: TempItem = [
  "tailwind.css",
  {
    ext: "css",
    path: "./src/assets/tailwind",
    value: `@tailwind base;
@tailwind components;
@tailwind utilities;`
  }
]
