import { Link } from 'react-router-dom';
import styles from './CheckOutButton.module.css';

const CheckOutButton = () => {
  return (
    <Link to="/discounts" className={styles.buttonStyle}>
      Check out
    </Link>

  )
}

export default CheckOutButton
