import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Home.css";
import banner from "../../assets/images/banner.png";

export function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <img src={banner} width="900" height="300" className ="banner" />
        <div className="text">
          <span className="recent">Recentes</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
