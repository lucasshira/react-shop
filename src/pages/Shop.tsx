import { useNavigate, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

import api from "../utils/api";

import styles from "./Shop.module.scss"
import { Star } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

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
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products')
        setAllProducts(response.data)

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

  useEffect(() => {
    let filtered = [...allProducts]

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
  }
  
    setProducts(filtered);
  }, [selectedCategory, allProducts, searchQuery])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? "" : category))
  }
  
  const handleProductClick = (productId: number) => {
    navigate(`/shop/${productId}`)
  }

  return (
    <>
      <Breadcrumb isShopMainPage />
      <div className={styles.container}>
        <nav>
          <h2>Filters</h2>
          <div>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <input 
                    type="checkbox" 
                    id={category} 
                    name={category} 
                    value={category} 
                    checked={selectedCategory === category} 
                    onChange={() => handleCategoryChange(category)}  
                  />
                  <label htmlFor={category}>{category}</label>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div>
          {products.length === 0 ? (
            <p style={{ fontSize: '1.5rem' }}>Nenhum produto encontrado para <strong>"{searchQuery}"</strong>.</p>
          ) : (
            <section>
              <h2>{selectedCategory ? selectedCategory : 'All'}</h2>
              {products.map((product) => (
                <div key={product.id} className={styles.product}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                    onClick={() => handleProductClick(product.id)}
                  />
                  <h3>{product.title}</h3>
                  <span>
                    <Star size={13} />
                    {product.rating.rate} ({product.rating.count})
                  </span>
                  <span>€ {product.price}</span>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </>
  )
}