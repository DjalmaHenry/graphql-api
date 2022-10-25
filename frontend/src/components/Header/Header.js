import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/products">
        <button>Produtos</button>
      </Link>
      <Link to="/provider">
        <button>Fornecedores</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
