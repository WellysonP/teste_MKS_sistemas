import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";
import styles from "../styles/ProductCard.module.css"
import axios from 'axios';
import { Component } from "react";
import React from "react";

class GridCards extends React.Component {
    componentDidMount() {
      axios
        .get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
        .then(response => {
            const productData = response.data;
            // Aqui você pode usar o setState para atualizar o seu estado com os dados retornados pela API
            this.setState({ products: productData });
        })
        .catch(error => {
          console.log(error);
        });
    }
    render() {
      return (
          <div className={styles.grid}>
          {this.state.products .map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )
    }
  }

export default GridCards;