import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import NotFoundImg from '../../assets/images/png/not-found.png'
import Four from '../../assets/images/svg/four.svg'

const NotFound = () => {
  return (
    <div className="globalContainer">
      <div className={styles.pageNotFoundContainer}>
        <div className={styles.imageContainer}>
          <img src={Four} alt="404" className={styles.image} />
          <img src={NotFoundImg} alt="404" className={styles.image} />
          <img src={Four} alt="404" className={styles.image} />
        </div>
        <div className={styles.contextContainer}>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.message}>
            We’re sorry, the page you requested could not be found. <br />{' '}
            Please go back to the homepage.
          </p>
        </div>
        <Link to="/" className={styles.homeButton}>
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
