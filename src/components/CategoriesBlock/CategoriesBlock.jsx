mport React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from './CategoriesBlock.module.css';
import '../../utils/api.js'

const CategoriesBlock = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories/all`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return 
  <div></div>
  
};

export default CategoriesBlock;
