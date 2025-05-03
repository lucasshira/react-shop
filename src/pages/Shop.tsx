import styles from "./Shop.module.scss"
import api from "../utils/api";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const products: Product[] = await api.get('/products').then((response) => response.data);

// response.map((response: any) => {
//   console.log(response.category)
// })

const categories = Array.from(new Set(products.map((product: Product) => product.category)))

export default function Shop() {
  return (
    <>
      <header>
        Home - Shop
      </header>

    <div className={styles.container}>
      <nav>
        <h2>Filters</h2>
        <div>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <input type="checkbox" id={category} name={category} value={category} />
                <label htmlFor={category}>{category}</label>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section>
        <h2>All</h2>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h3>{product.title}</h3>
            {/* <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count})</p>
            <button>Add to Cart</button> */}
          </div>
        ))}
      </section>
    </div>
    </>
  )
}