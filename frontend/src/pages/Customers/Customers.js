import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Customers.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

function createData(name, id) {
  return { name, id };
}

const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      first_name
    }
  }
`;

export function Customers() {
  const { data } = useQuery(GET_CUSTOMERS);
  const rows = data?.customers.map((customer) => {
    return createData(
      customer.first_name,
      customer.id
    );
  });

  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
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
                <TableCell align="right">
                  <Button variant="contained">Edit</Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained">Orders</Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button className="add-action" variant="contained">
        Add Customer
      </Button>
      <Footer />
    </div>
  );
}
