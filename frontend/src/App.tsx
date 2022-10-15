import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ola React!</p>
        <Header />
      </header>
    </div>
  );
}

export default App;
