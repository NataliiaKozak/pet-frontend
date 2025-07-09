import React from 'react'
import Logo from '../../assets/images/svg/logo.svg'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import cartIcon from '../../assets/images/svg/basket=empty.svg';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items)

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <header className={styles.header_wrapper}>
      <div className="globalContainer">
        <div className={styles.header_content}>
          
          <NavLink to="/" className={styles.logo}>
            <img src={Logo} alt="Pet Shop Logo" />
          </NavLink>

          
          <nav className={styles.nav_block}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles.nav_link} ${isActive ? styles.active : ''}`
                  }
                  end
                >
                  Main Page
                </NavLink>
              </li>
              <li className={styles.nav_item}>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    `${styles.nav_link} ${isActive ? styles.active : ''}`
                  }
                >
                  Categories
                </NavLink>
              </li>
              <li className={styles.nav_item}>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${styles.nav_link} ${isActive ? styles.active : ''}`
                  }
                >
                  All products
                </NavLink>
              </li>
              <li className={styles.nav_item}>
                <NavLink
                  to="/discounts"
                  className={({ isActive }) =>
                    `${styles.nav_link} ${isActive ? styles.active : ''}`
                  }
                >
                  All sales
                </NavLink>
              </li>
            </ul>
          </nav>

          
          <NavLink to="/cart" className={styles.cart_link}>
            <img src={cartIcon} alt="Shopping Cart" />
            {cartItemsCount > 0 && (
              <span className={styles.cart_badge}>{cartItemsCount}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
