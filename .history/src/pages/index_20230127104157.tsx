import { Container, Row, Col } from "react-grid-system";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";
import styles from "../styles/ProductCard.module.css"

export default function Home() {
  return (
    <div className={styles.app}>
      <AppBar />
      {productDumy.map((product, index) => (
        <div className="card" key={index}>
          <ProductCard product={product} />
        </div>
      ))}
      <Footer />
    </div>
  );
}