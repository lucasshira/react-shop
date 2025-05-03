import styles from "./Home.module.scss"
import HomeImg from "../assets/home.png"

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.message}>
        <h2>Find clothes that matches your style</h2>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>

        <div className={styles.stats}>
          <div>
            <h3>200+</h3>
            <p>International Brands</p>
          </div>

          <div>
            <h3>2,000+</h3>
            <p>High-Quality Products</p>
          </div>

          <div>
            <h3>30,000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <img src={HomeImg} alt="" />

    </div>
  )
}