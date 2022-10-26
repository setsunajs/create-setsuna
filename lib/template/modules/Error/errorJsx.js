export const errorJsx = [
  "errorJsx",
  {
    ext: "jsx",
    path: "./modules/Error/Error.jsx",
    value: `import { useNavigate } from "@setsuna/router"

    export function Error() {
      const navigate = useNavigate()
      const toLogin = () => navigate.push("/")
    
      return () => <div>
        <p>error page</p>
        <button onClick={toHome}>to toHome</button>
      </div>
    }`
  }
]
