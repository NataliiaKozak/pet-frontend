import CheckOutButton from '../../ui/CheckOutButton/CheckOutButton';
import CategoriesBlock from '../../components/CategoriesBlock/CategoriesBlock';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import SaleBlock from '../../components/SaleBlock/SaleBlock';
import styles from './MainPage.module.css';
import backgroundImg from '../../assets/images/png/img.png';

const MainPage = () => {
  return (
    <div>
      <div className="globalContainer">
        <div className={styles.contentStyle}>
          <h1>Amazing Discounts 
            <br/> 
            on Pets Products!
            </h1>
          <CheckOutButton />
        </div>
      </div>
      <div className={styles.mainBgStyle} style={{ backgroundImage: `url(${backgroundImg})` }}></div>

      <CategoriesBlock />
      <DiscountForm />
      <SaleBlock />

    </div>
  )
}

export default MainPage
