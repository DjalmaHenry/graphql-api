import React from "react";
import Iphone from "../../assets/img/iphone-14.webp";
import Products from "../../components/Products/Products";

export default function AllProducts() {
  const AllProducts = [
    {
      id: 1,
      image: "https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png",
      description: "iPhone 14",
      provider: "Apple",
      price: 10000,
      name: "iPhone 14",
    },
    {
      id: 1,
      image: "https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png",
      description: "iPhone 14",
      provider: "Apple",
      price: 10000,
      name: "iPhone 14",
    },
  ];
  return (
    <div>
      <h1>Todos os Products</h1>
      <Products products={AllProducts} />
    </div>
  );
}
