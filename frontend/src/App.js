import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Provider from "./pages/ProviderPage/ProviderPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
