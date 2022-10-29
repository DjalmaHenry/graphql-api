import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

function createData(name, price, unitary, discontinued) {
  return { name, price, unitary, discontinued };
}

const GET_PRODUCTS = gql`
  query {
    products {
      supplier_ids
      product_name
      list_price
      quantity_per_unit
      discontinued
    }
  }
`;

export function Market() {
  const { data } = useQuery(GET_PRODUCTS);
  const rows = data?.products.map((product) => {
    return createData(
      product.product_name,
      product.list_price,
      product.quantity_per_unit,
      product.discontinued
    );
  });

  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Unitary Price&nbsp;($)</TableCell>
              <TableCell align="right">Quantity Per Unit</TableCell>
              <TableCell align="right">Discontinued</TableCell>
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
                <TableCell align="right">{row.price}</TableCell>
                {row.unitary ? (
                  <TableCell align="right">{row.unitary}</TableCell>
                ) : (
                  <TableCell align="right">-</TableCell>
                )}
                {
                  row.discontinued === 0 ? (
                    <TableCell align="right">No</TableCell>
                  ) : (
                    <TableCell align="right">Yes</TableCell>
                  )
                }
                <TableCell align="right">
                  <Button variant="contained">Add to Cart</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    //botão flutuante para ir no carrinho
    //Modal
    //Título: Carrinho
    //Tabela com produtos adicionados (Nome do Produto, Quantidade, Valor Unitário, Valor Total)
    //Uma linha do final da tabela teria o valor final da soma de todos os produtos
    //Um botão com comprar
  );
}
