import { Container, Row, Col } from "react-grid-system";
import AppBar from "../components/AppBar";
import ProductCard from "../components/ProductCard";
import productDumy from "../data/product_dummy";
import ProductModel from "../models/ProductModel";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Container>
        <Row>
          {productDumy .map((product, index) => (
            <Col xs={10} sm={6} md={4} lg={3} key={index}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}