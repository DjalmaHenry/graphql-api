import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

export default function Products(props) {
  return (
    <>
      <h1>Products</h1>
      <div>
        {props.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
}