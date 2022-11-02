import * as React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { gql, useQuery } from "@apollo/client";

const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      first_name
    }
  }
`;

function handleChange(event) {
  console.log(event.target.value);
}

export default function Cart(props) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const { customers } = useQuery(GET_CUSTOMERS);

  console.log(customers);

  useEffect(() => {
    let products = [];
    products = JSON.parse(localStorage.getItem("products"));
    if (products === null) {
      products = [];
    }

    let totalPrice = 0;
    products.map((product) => {
      product.total = totalPrice + product.price;
      totalPrice = product.total;
    });
    setTotal(totalPrice);

    setProducts(products);
  }, [localStorage.getItem("products")]);

  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price&nbsp;($)</TableCell>
              <TableCell align="right">Quantity per Unit</TableCell>
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.unitary}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <div>
            <p>Total: {total}</p>
            {customers ? 
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Customer
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={customers.name}
                onChange={handleChange}
                label="Customer"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            : null}
          </div>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <FontAwesomeIcon className="cartIcon" icon={faCartShopping} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
