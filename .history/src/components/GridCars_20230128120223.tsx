import React, { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";
import axios from 'axios';
import styles from "../styles/ProductCard.module.css"

export default function GridCards(){
const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
        setProducts(result.data.data);
    };
    fetchData();
}, []);

return (
    <div className={styles.grid}>
    {products.map((product, index) => (
      <ProductCard product={product} key={index} />
    ))}
  </div>
)


}