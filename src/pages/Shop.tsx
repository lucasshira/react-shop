import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import api from "../utils/api";

import styles from "./Shop.module.scss"
import { Star } from "lucide-react";

export interface Product {
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

export default function Shop() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products')
        setProducts(response.data)

        const uniqueCategories: string[] = Array.from(
          new Set(response.data.map((p: Product) => p.category))
        )

        setCategories(uniqueCategories)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProducts()
  }, [])

  const handleProductClick = (productId: number) => {
    navigate(`/shop/${productId}`)
  }

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
            <img src={product.image} alt={product.title} className={styles.productImage} onClick={() => handleProductClick(product.id)} />
            <h3>{product.title}</h3>
            <span>
              <Star size={13} />
              {product.rating.rate} ({product.rating.count})</span>
            <span>€ {product.price}</span>
          </div>
        ))}
      </section>
    </div>
    </>
  )
}