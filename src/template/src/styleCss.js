export const styleCss = [
  "style.css",
  {
    ext: "css",
    path: "./src/style.css",
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

.route {
  animation: route 5s linear infinite;
}

.title {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 40px;
  color: #d2ae82;
}`
  }
]
