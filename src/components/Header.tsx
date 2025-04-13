import { ShoppingCart } from 'lucide-react'
import styles from './Header.module.scss'

import { useToggle } from '../hooks/useToggle'
import CartDrawer from './CartDrawer'

export default function Header() {
  const { value: isOpen, toggle, setFalse } = useToggle({ initialValue: false })

  return (
    <div className={styles.header}>
      <h1>React Shop</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
          <li>
            <button onClick={toggle} className={styles.cartBtn}>
              <ShoppingCart size={16} />
            </button>
          </li>
        </ul>
      </nav>

      {isOpen && <CartDrawer close={setFalse} />}
    </div>
  )
}