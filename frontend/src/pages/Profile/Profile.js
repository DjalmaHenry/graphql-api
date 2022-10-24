import { React, useState } from "react";
import "./Profile.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { FiEdit, FiX, FiCheck } from "react-icons/fi";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function Profile() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="profile-container">
          <div className="profile-name">
            <p className="name">
              Marcos Silva
              <button onClick={openModal} className="edit-btn">
                <FiEdit />
              </button>
            </p>
          </div>
          <div className="items">
            <div className="historic">
              <p>#122234 - IPhone 14 Pro Max</p>
            </div>
            <div className="historic">
              <p>#122235 - Moto g8 plus</p>
            </div>
          </div>
          <div className="delete-acc">
            <button type="button" className="delete-btn">
              Deletar conta
            </button>
          </div>
        </div>
        {/* ====================================================================== */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <h2>
            Trocar nome
            <button onClick={closeModal} className="close-btn">
              <FiX />
            </button>
          </h2>
          <hr />
          <input type="input" placeholder="Primeiro nome" className="name-input"></input>
          <input type="input" placeholder="Último nome" className="name-input"></input>
          <button onClick={closeModal} className="confirm-btn">
            <FiCheck />
          </button>
        </Modal>
      </div>

      <Footer />
    </div>
  );
}
