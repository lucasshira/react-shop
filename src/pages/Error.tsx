import styles from "./Error.module.scss"
import { useNavigate } from "react-router"

export default function Error() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h1>Oops, something went wrong!</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}