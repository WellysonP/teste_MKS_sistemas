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
          {productDumy.map((product, index) => (
            <Col xs={12} sm={60} md={40} lg={30} key={index}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}