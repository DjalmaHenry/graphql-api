import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Provider from "./components/home/providerPage/ProviderPage";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/provider" element={<Provider />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
