import React from "react";
import ProductCard from "../product-card/ProductCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Products(props: any) {
  const products = props.products;
  return (
    <Row>
      <Col>
        <h1>Products</h1>
        <div>
          {products.map(() => (
            <ProductCard></ProductCard>
          ))}
        </div>
      </Col>
    </Row>
  );
}
