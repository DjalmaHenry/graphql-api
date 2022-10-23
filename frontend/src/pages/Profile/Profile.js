import React from 'react';
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { FiEdit } from "react-icons/fi";

export function Profile() {
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="profile-container">
                <div className="profile-name">
                    <p className="name">Marcos Fellipe Andrade da Silva</p>
                    <FiEdit />
                </div>
                <div className="delete-acc">
                    <button type="button" className="delete-btn">
                        Deletar conta
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}