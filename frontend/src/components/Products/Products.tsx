import React from "react";
import ProductCard from "../Product-card/ProductCard";

// type ProductProps = {
//   id: number;
//   image: string;
//   description: string;
//   provider: string;
//   price: number;
//   name: string;
// };

export default function Products(products: any) {
  console.log(products);

  return (
    <>
      <h1>Products</h1>
      <div>
        {/* {products.map((product) => (
            <ProductCard {...product} />
          ))} */}
      </div>
    </>
  );
}
