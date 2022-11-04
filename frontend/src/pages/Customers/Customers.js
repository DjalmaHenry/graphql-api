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
import { gql, useQuery, useMutation } from "@apollo/client";

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

// delete customer and return result in boolean format
const DELETE_CUSTOMER = gql`
  mutation DeleteCustomer($id: String!) {
    deleteCustomer(id: $id)
  }
`;

export function Customers() {
  const { data } = useQuery(GET_CUSTOMERS);
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER);
  const rows = data?.customers.map((customer) => {
    return createData(
      customer.first_name,
      customer.id
    );
  });

  function handleDeleteCustomer(id) {
    const result = deleteCustomer({
      variables: {
        id: id,
      },
    });

    if (result) {
      window.location.reload();
    }
  }

  function handleOpenOrders(id) {
    window.location.href = "/orders/" + id;
  }

  return (
    <div>
      <Navbar />
      <Button className="add-action" variant="contained">
        Add Customer
      </Button>
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
            {rows?.map((row) => (
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
                  <Button variant="contained" onClick={() => handleOpenOrders(row.id)}>Orders</Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" onClick={() => handleDeleteCustomer(row.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}
