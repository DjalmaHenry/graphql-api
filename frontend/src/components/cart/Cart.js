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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { gql, useQuery, useMutation } from "@apollo/client";

const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      first_name
    }
  }
`;

const CREATE_ORDER = gql`
  mutation CreateOrder($customer_id: String!, $ship_name: String!) {
    createOrder(customer_id: $customer_id, ship_name: $ship_name) {
      id
    }
  }
`;

const CREATE_ORDER_DETAILS = gql`
  mutation CreateOrderDetail($order_id: String!, $product_id: String!, $unit_price: Float!, $quantity: Float!) {
    createOrderDetail(order_id: $order_id, product_id: $product_id, unit_price: $unit_price, quantity: $quantity) {
      id
    }
  }
`;

export default function Cart(props) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const { data } = useQuery(GET_CUSTOMERS);
  const [createOrder] = useMutation(CREATE_ORDER);
  const [createOrderDetail] = useMutation(CREATE_ORDER_DETAILS);
  const [selectedCustomerId, setSelectedCustomerId] = useState();
  const [selectedCustomerName, setSelectedCustomerName] = useState();

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
      return product;
    });
    setTotal(totalPrice);

    setProducts(products);

    if (data) {
      setSelectedCustomerId(data.customers[0].id);
    }
  }, [localStorage.getItem("products"), data]);

  const [state, setState] = useState({
    bottom: false,
  });

  function handleChange(event) {
    setSelectedCustomerId(event.target.value);
    setSelectedCustomerName(data.customers[event.target.value].first_name);
  }

  async function handleCheckout() {
    console.log(selectedCustomerName);
    const order_id = await createOrder({
      variables: {
        customer_id: selectedCustomerId,
        ship_name: selectedCustomerName,
      },
    });

    products.map((product) => {
      createOrderDetail({
        variables: {
          order_id: order_id.data.createOrder.id,
          product_id: product.id,
          unit_price: product.price,
          quantity: 1,
        },
      });
    });

    localStorage.clear();
  }

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
              <TableCell align="right">Unitary Price&nbsp;($)</TableCell>
              <TableCell align="right">Quantity per Unit</TableCell>
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name.split(" ")[2]}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.unitary}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <div className="footer">
            <p>Total: {total}</p>
            {data ? (
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Customer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectedCustomerId}
                  onChange={handleChange}
                  label="Customer"
                >
                  {data.customers.map((customer) => (
                    <MenuItem value={customer.id}>
                      {customer.first_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}

            <Button
              variant="contained"
              type="submit"
              onClick={() => handleCheckout()}
            >
              Checkout
            </Button>
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
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
