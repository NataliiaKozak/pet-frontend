import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './CategoriesBlock.module.css'
import '../../utils/api.js'

const CategoriesBlock = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories/all`)
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchCategories()
  }, [])
  
// useEffect(() => {
//   axios.get(`${API_URL}/categories/all`)
//     .then(response => {
//       this.setState({categories: response.data}) // setCategories(response.data) 
//     })
//     .catch(error => {
//       console.error('There was an error fetching the categories!', error)
//     })
// }, [])
  return (
    <div className="globalContainer">
      <div className={styles.categoriesBlock}>
        <div className="titleBlock">
          <h2>Categories</h2>
          <div className="titleBlockLine"></div>
          <Link to="/categories" className="titleBlockButton">
            All categories
          </Link>
        </div>

        <ul className={styles.gridCategoriesContainer}>
          {categories.slice(0, 4).map((category) => (
            <li key={category.id} className={styles.gridCategoriesItem}>
              <Link
                to={`/categories/${category.id}`}
                className={styles.categoryItem}
              >
                <img
                  src={`${API_URL}/${category.image}`}
                  alt={category.title}
                  className={styles.categoryImage}
                />
                <h3 className={styles.categoryName}>{category.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoriesBlock
