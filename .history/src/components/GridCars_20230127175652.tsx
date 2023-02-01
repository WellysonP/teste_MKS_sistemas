import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";
import styles from "../styles/ProductCard.module.css"
import axios from 'axios';
import { Component } from "react";

class GridCards extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        axios.get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
            .then(res => {
                const products = res.data.data; this.setState({ products });
            })
    }
    render() {
        return (
            <div className={styles.grid}>
                {this.state.products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        )
    }
}

export default GridCards;