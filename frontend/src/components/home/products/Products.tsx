import React from "react";
import ProductCard from "../product-card/ProductCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Product } from "../../../types/product";

// type ProductProps = {
//   id: number;
//   image: string;
//   description: string;
//   provider: string;
//   price: number;
//   name: string;
// };

export default function Products(products: Product[]) {
  return (
    <Row>
      <Col>
        <h1>Products</h1>
        <div>
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </Col>
    </Row>
  );
}
