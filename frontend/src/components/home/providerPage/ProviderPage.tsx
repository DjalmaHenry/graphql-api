import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Products from "../products/Products";

import { Product } from "../../../types/product";

// type ProductProps = {
//   id: number;
//   image: string;
//   description: string;
//   provider: string;
//   price: number;
//   name: string;
// };

export default function Provider() {
  var providerProducts: Product[] = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      description: "iPhone 14",
      provider: "Apple",
      price: 10000,
      name: "iPhone 14",
    },
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      description: "iPhone 14",
      provider: "Apple",
      price: 10000,
      name: "iPhone 14",
    },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <h1>Fornecedor Lucas</h1>
        </Col>
        <Col>
          <Products {...providerProducts} />
        </Col>
      </Row>
    </Container>
  );
}
