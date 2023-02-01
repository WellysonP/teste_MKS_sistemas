import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";
import styles from "../styles/ProductCard.module.css"
import { Component } from "react";

class GridCards extends Component {
    state = {
        products: productDumy
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