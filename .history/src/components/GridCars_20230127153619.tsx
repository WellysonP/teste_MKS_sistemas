import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";
import styles from "../styles/ProductCard.module.css"

export default function GridCards(){
    return (
        <div className={styles.grid}>
        {productDumy .map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    )
}