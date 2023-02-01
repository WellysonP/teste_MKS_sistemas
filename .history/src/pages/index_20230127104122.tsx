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
            <Col key={index} width={218}
            className={styles.marginCard}>
              <ProductCard product={product} />
            </Col>
          ))}


      <Footer />
    </div>
  );
}