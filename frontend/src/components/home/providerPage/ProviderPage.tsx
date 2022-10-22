import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Products from "../products/Products";

export default function Provider() {
  const providerProducts = [
    {
      id: 1,
      name: "iPhone 14 pro max",
      description:
        "iPhone 14 pro max, de 512gb com 3 cameras, tela de 6.7 polegadas e processador A15 Bionic de 5nm com 6 núcleos.",
      image: "",
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      title: "Detalhes",
      description:
        "iPhone 14 pro max, de 512gb com 3 cameras, tela de 6.7 polegadas e processador A15 Bionic de 5nm com 6 núcleos.",
      image:
        "https://www.apple.com/v/iphone/home/ae/images/overview/compare/compare_iphone_14_pro__f2x.png",
      like: 0,
      dislike: 0,
    },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <h1>Fornecedor Lucas</h1>
        </Col>
        <Col>
          <Products products={providerProducts} />
        </Col>
      </Row>
    </Container>
  );
}
