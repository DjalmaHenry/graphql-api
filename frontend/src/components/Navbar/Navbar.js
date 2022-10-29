import React, { Component } from "react";
import "./Navbar.css";
import Cart from "../cart/Cart";

export function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar-title">Marketplace</div>
      <div className="navbar-options">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/market">Mercado</a>
          </li>
          <li>
            <a href="/publish">Publicar</a>
          </li>
          <li>
            <a href="/signin">Login</a>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </div>
    </nav>
  );
}
