import React from "react";
import Button from "@mui/material/Button";
import "./Header.css";

export function Header() {
  return (
    <div>
      <Button className="btn" onClick={() => handleClick()}>
        Click me
      </Button>
    </div>
  );

  // funcao para testar o botao
  function handleClick() {
    alert("Ola React!");
  }
}
