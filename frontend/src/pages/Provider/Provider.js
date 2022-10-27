import React from "react";
import Products from "../../components/Products/Products";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Provider.css";

export function Provider() {
  const providerProducts = [
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
    <>
    <Navbar />
      <h1>Fornecedor Lucas</h1>
      <Products products={providerProducts} />
    </>
  );
}