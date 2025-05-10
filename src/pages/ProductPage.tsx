import { useEffect, useState } from "react"
import { useParams } from "react-router"

import api from "../utils/api"

import styles from './ProductPage.module.scss'
import { Product } from "./Shop"
import { Star } from "lucide-react"

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`products/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (!product) return <p>Carregando produto...</p>

  return (
    <>
      <header>
        Home - Shop - {id}
      </header>
    
      <div className={styles.container}>
        <div>
          <img src={product.image} height={160} width={160} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span>
            <Star size={16} />
            {product.rating.rate} ({product.rating.count})</span>
          <span>€ {product.price}</span>

          {["men's clothing", "women's clothing"].includes(product.category) && (
            <div>
              <p>Choose size</p>
              <button>Small</button>
              <button>Medium</button>
              <button>Large</button>
              <button>X-Large</button>
            </div>
          )}

          <div>
            <div>
              <span>- 1 +</span>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}