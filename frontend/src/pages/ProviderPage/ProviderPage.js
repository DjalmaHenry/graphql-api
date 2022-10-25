import React from "react";
import Iphone from "../../assets/img/iphone-14.webp";
import Products from "../../components/Products/Products";

export default function Provider() {
  const providerProducts = [
    {
      id: 1,
      image: { Iphone },
      description: "iPhone 14",
      provider: "Apple",
      price: 10000,
      name: "iPhone 14",
    },
    {
      id: 1,
      image: { Iphone },
      description: "iPhone 14",
      provider: "Apple",
      price: 10000,
      name: "iPhone 14",
    },
  ];
  return (
    <>
      <h1>Fornecedor Lucas</h1>
      <Products products={providerProducts} />
    </>
  );
}
