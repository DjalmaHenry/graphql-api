import { React, useState } from "react";
import "./Profile.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { FiEdit, FiX, FiCheck } from "react-icons/fi";
import Modal from "react-modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

Modal.setAppElement("#root");

export function Profile() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
          <input
            type="input"
            placeholder="Primeiro nome"
            className="name-input"
          ></input>
          <input
            type="input"
            placeholder="Último nome"
            className="name-input"
          ></input>
          <button onClick={closeModal} className="confirm-btn">
            <FiCheck />
          </button>
        </Modal>
      </div>

      <Footer />
    </div>
  );
}
