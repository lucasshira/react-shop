import styles from './Breadcrumb.module.scss'
import { ChevronsRight } from "lucide-react";

interface BreadcrumbProps {
  product?: string
  isShopMainPage?: boolean
}

export default function Breadcrumb({ product, isShopMainPage }: BreadcrumbProps) {
  return (
    <div>
      <header className={styles.header}>
        <a href="/">Home</a>
        <ChevronsRight />
        {isShopMainPage ? (
          <span>Shop</span>
        ) : (
          <a href="/shop">Shop</a>
        )}
        {product && <>
          <ChevronsRight />
          <span>{product}</span>
        </>}
      </header>
    </div>
  )
}