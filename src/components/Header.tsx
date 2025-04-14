import { SearchIcon, ShoppingCart, User } from 'lucide-react'
import styles from './Header.module.scss'

import { useToggle } from '../hooks/useToggle'
import CartDrawer from './CartDrawer'
import { Link, useNavigate } from 'react-router'

export default function Header() {
  const { value: isOpen, toggle, setFalse } = useToggle({ initialValue: false })

  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>React Shop</h1>
      </Link>
      <nav>
        <ul>
          <div className={styles.navLinks}>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
          </div>
          
          <div className={styles.searchBar}>
            <button>
              <SearchIcon size={16} />
            </button>
            <input type="text" placeholder="Search for products..." />
          </div>

          <div className={styles.navIcons}>
            <li>
              <button onClick={() => navigate('/login')}>
                <User size={16} />
              </button>
            </li>
            <li>
              <button onClick={toggle}>
                <ShoppingCart size={16} />
              </button>
            </li>
          </div>
        </ul>
      </nav>

      {isOpen && <CartDrawer close={setFalse} />}
    </div>
  )
}