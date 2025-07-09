import React from 'react'
import CheckOutButton from '../../components/ui/CheckOutButton/CheckOutButton';
import CategoriesBlock from '../../components/CategoriesBlock/CategoriesBlock';


import styles from '../../components/CategoriesBlock/CategoriesBlock.module.css';
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

    </div>
  )
}

export default MainPage
