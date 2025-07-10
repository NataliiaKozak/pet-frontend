import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import cartIcon from '../../assets/images/svg/basket=empty.svg'
import Logo from '../../assets/images/svg/logo.svg'
import styles from './Header.module.css'

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.Header}>
      <div className="globalContainer">
        <div className={styles.headerContent}>
          {/* Изменено: Link → NavLink */}
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <div
            className={`${styles.burgerMenu} ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </div>

          <nav className={`${styles.navBlock} ${menuOpen ? styles.open : ''}`}>
            <ul>
              <li>
                {/* Изменено: Link → NavLink */}
                <NavLink to="/" className={styles.navLink}>
                  Main Page
                </NavLink>
              </li>
              <li>
                {/* Изменено: Link → NavLink */}
                <NavLink to="/categories" className={styles.navLink}>
                  Categories
                </NavLink>
              </li>
              <li>
                {/* Изменено: Link → NavLink */}
                <NavLink to="/products" className={styles.navLink}>
                  All Products
                </NavLink>
              </li>
              <li>
                {/* Изменено: Link → NavLink */}
                <NavLink to="/discounts" className={styles.navLink}>
                  All Sales
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Изменено: Link → NavLink */}
          <NavLink to="/cart" className={styles.cartLink}>
            <img src={cartIcon} alt="Cart" />
            {cartItemsCount > 0 && (
              <span className={styles.cartBadge}>{cartItemsCount}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
