import React from "react";
import { useState } from "react";
import Modal from "react-modal";
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
import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import { gql, useQuery, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

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

const GET_CUSTOMER = gql`
  query GetCustomer($id: String!) {
    customer(id: $id) {
      id
      first_name
      company
      email_address
      business_phone
      address
    }
  }
`;

const CREATE_CUSTOMER = gql`
  mutation CreateCustomer(
    $first_name: String!
    $company: String!
    $email_address: String!
    $business_phone: String!
    $address: String!
  ) {
    createCustomer(
      first_name: $first_name
      company: $company
      email_address: $email_address
      business_phone: $business_phone
      address: $address
    ) {
      id
    }
  }
`;

const DELETE_CUSTOMER = gql`
  mutation DeleteCustomer($id: String!) {
    deleteCustomer(id: $id)
  }
`;

Modal.setAppElement("#root");

export function Customers() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [createCustomer] = useMutation(CREATE_CUSTOMER);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleCreateNewCustomer = (values) => {
    // create new customer
    createCustomer({
      variables: {
        first_name: values.name,
        company: values.company,
        email_address: values.email,
        business_phone: values.phone,
        address: values.address,
      },
    });

    closeModal();
    window.location.reload();
  };

  const validationsRegister = yup.object().shape({
    name: yup
      .string()
      .required("Name is required"),
    company: yup
      .string()
      .required("Company is required"),
    email: yup
    .string()
    .email("Invalid Email")
    .required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required"),
    address: yup
      .string()
      .required("Address is required"),
  });

  const { data } = useQuery(GET_CUSTOMERS);
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER);
  const rows = data?.customers.map((customer) => {
    return createData(customer.first_name, customer.id);
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
      <Button className="add-action" variant="contained" onClick={openModal}>
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
                  <Button
                    variant="contained"
                    onClick={() => handleOpenOrders(row.id)}
                  >
                    Orders
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteCustomer(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2 className="title-modal">
          Add new customer
          <button onClick={closeModal} className="close-btn">
            <FontAwesomeIcon className="close-icon" icon={faXmark} />
          </button>
        </h2>
        <hr className="line" />
        <Formik
          initialValues={{}}
          onSubmit={handleCreateNewCustomer}
          validationSchema={validationsRegister}
        >
          <Form className="register-form">
            <div className="register-form-group">
              <Field name="name" className="form-field" placeholder="name" />

              <ErrorMessage
                component="span"
                name="name"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="company"
                className="form-field"
                placeholder="Company"
              />

              <ErrorMessage
                component="span"
                name="company"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="email"
                className="form-field"
                placeholder="Email"
              />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="phone"
                className="form-field"
                placeholder="Phone"
              />

              <ErrorMessage
                component="span"
                name="phone"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="address"
                className="form-field"
                placeholder="Address"
              />

              <ErrorMessage
                component="span"
                name="address"
                className="form-error"
              />
            </div>

            <button className="button" type="submit">
              Create
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}
