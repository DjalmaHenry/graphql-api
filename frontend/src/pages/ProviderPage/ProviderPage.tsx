import React from "react";
import Products from "../../components/Products/Products";

// type ProductProps = {
//   id: number;
//   image: string;
//   description: string;
//   provider: string;
//   price: number;
//   name: string;
// };

export default function Provider() {
  const providerProducts: any = [
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
    <>
      <h1>Fornecedor Lucas</h1>
      <Products products={providerProducts} />
    </>
  );
}
