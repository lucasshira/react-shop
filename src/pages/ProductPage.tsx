import { useEffect, useState } from "react"
import { useParams } from "react-router"

import api from "../utils/api"

import styles from './ProductPage.module.scss'
import { Product } from "./Shop"
import { Star } from "lucide-react"
import Breadcrumb from "../components/Breadcrumb"

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1);

  const handleAddProductQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }

  const handleDecreaseProductQuantity = () => {
    setQuantity((quantity) => Math.max(1, quantity - 1))
  }

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
      <Breadcrumb product={product.title} isShopMainPage={false} />
    
      <div className={styles.container}>
        <img src={product.image} alt={product.title} />
        
        <div className={styles.productInfo}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span>
            <Star size={16} />
            {product.rating.rate} ({product.rating.count})
          </span>
          <strong>€ {product.price}</strong>

          {["men's clothing", "women's clothing"].includes(product.category) && (
            <div className={styles.productSize}>
              <p>Choose Size</p>
              <button>Small</button>
              <button>Medium</button>
              <button>Large</button>
              <button>X-Large</button>
            </div>
          )}

          <div className={styles.productActionArea}>
            <div className={styles.productQuantity}>
              <button onClick={handleDecreaseProductQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={handleAddProductQuantity}>+</button>
            </div>
            <button className={styles.productPurchaseButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}