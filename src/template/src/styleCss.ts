import { fileTemps, TempItem } from "src/makeBaseTemplate"

export const styleCss = () => {
  const content: TempItem = [
    "style.css",
    {
      ext: "css",
      path: "./src/style",
      value: `@keyframes route {
  from {
  }
  to {
    transform: rotate(360deg);
  }
}

.app {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app div {
  text-align: center;
}

.route {
  animation: route 5s linear infinite;
}

.title {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 40px;
  color: #d2ae82;
}

button {
  padding: 4px 8px;
  color: #fff;
  background: #d2ae82;
  border-radius: 4px;
}
`
    }
  ]

  if (fileTemps) {
    fileTemps.set(content[0], content[1])
  }

  return content
}
