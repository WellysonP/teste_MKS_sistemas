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
      <Container>
        <Row className={styles.marginCard}>
          {productDumy.map((product, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} width={218}
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}