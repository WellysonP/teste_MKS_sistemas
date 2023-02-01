import { Container, Row, Col } from "react-grid-system";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Container className="app-container">
        <Row>
          {productDumy.map((product, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}