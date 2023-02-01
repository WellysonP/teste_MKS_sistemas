import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";
import styles from "../styles/ProductCard.module.css"

export default function Home() {
  return (
    <div className="app">
      <AppBar />
      <div className={`${styles.grid} grid`}>
        {productDumy.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}