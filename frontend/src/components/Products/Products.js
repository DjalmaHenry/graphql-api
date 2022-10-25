import React from "react";
import ProductCard from "../Product-card/ProductCard";

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
