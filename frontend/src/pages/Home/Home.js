import React from "react";
import ProviderPage from "../ProviderPage/ProviderPage";
import Products from "../../components/Products/Products";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Products /> */}
      <ProviderPage />
    </div>
  );
}
