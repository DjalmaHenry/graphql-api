import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Orders.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { gql, useQuery } from "@apollo/client";

function createData(id, ship_name, price) {
  return { id, ship_name, price };
}

const GET_ORDERS = gql`
  query {
    ordersByCustomer(customer_id: $customer_id) {
      id
      ship_name
    }
    orderDetailsByOrder(order_id: $order_id) {
      unit_price
    }
  }
`;

export function Orders() {
  const { data } = useQuery(GET_ORDERS);
  console.log(data);
  // get customer id from url query using useParams
  const { customer_id } = useParams();
  data.customer_id = customer_id;
  // get all ordersByCustomer with customer_id and orderDetailsByOrder with order_id from database query and createData
  const rows = data?.ordersByCustomer.map((order) => {
    return createData(
      order.id,
      order.ship_name,
      data?.orderDetailsByOrder.map((orderDetail) => {
        return orderDetail.unit_price;
      })
    );
  });

  console.log(rows);
  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell align="right">Shipped Name</TableCell>
              <TableCell align="right">Unitary Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.ship_name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}
