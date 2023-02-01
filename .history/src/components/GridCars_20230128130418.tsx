import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styles from "../styles/ProductCard.module.css";
import productDumy from "../data/product_dummy";
import ProductModel from "../models/ProductModel";

const GridCards = () => {
    // const products = productDumy;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.grid}>
      {products.map((product: ProductModel, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default GridCards;
