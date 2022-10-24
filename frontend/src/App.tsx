import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Provider from "./pages/ProviderPage/ProviderPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<Provider />} />
      </Routes>
    </Router>
  );
}

export default App;
