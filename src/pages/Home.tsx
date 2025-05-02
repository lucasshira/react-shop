import styles from "./Home.module.scss"
import HomeImg from "../assets/home.png"

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.message}>
        <h2>Find clothes that matches your style</h2>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>
      </div>

      <img src={HomeImg} alt="" />

    </div>
  )
}