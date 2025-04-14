import styles from "./CartDrawer.module.scss"

interface CartDrawerProps {
  isOpen?: boolean
  close: () => void
}

export default function CartDrawer({ close }: CartDrawerProps) {
  const cartItems = [
    { id: 1, name: "Product 1", price: 10.00, quantity: 2 },
    { id: 2, name: "Product 2", price: 20.00, quantity: 1 },
    { id: 3, name: "Product 3", price: 15.00, quantity: 3 },
    { id: 4, name: "Product 4", price: 5.00, quantity: 5 },
    { id: 5, name: "Product 5", price: 32.99, quantity: 1 },
    { id: 6, name: "Product 6", price: 85.00, quantity: 2 },
    { id: 7, name: "Product 7", price: 100.00, quantity: 1 },
    { id: 8, name: "Product 8", price: 5.00, quantity: 4 },
  ]

  return (
    <>
      <div className={styles.overlay} onClick={close}></div>

      <div className={styles.drawer}>
        <header>
          <button className={styles.closeBtn} onClick={close}>x</button>
          <h2>Your cart</h2>
        </header>
        {cartItems.length === 0 ? (
          <p>Empty car!</p>
        ) : (
          <ul className={styles.cartList}>
            {cartItems.map(item => (
              <li key={item.id} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className={styles.removeBtn}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}