import React from "react";
import "./Buy.css";
import { Footer } from "../../components/Footer/Footer";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Navbar } from "../../components/Navbar/Navbar";

export function Buy() {
  const [productCode, setProductCode] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [orders, setOrders] = React.useState([]);

  var data = {
    productCode: productCode,
    quantity: quantity,
  };
  function handleProduct() {
    orders.push(data);
    console.log(orders);
  }

  const validationsPublish = yup.object().shape({
    productCode: yup.string().required("Product Code is required"),
    productQuantity: yup
      .number()
      .required("Product Quantity is required")
      .positive("Product Quantity must be positive")
      .min(1, "Product Quantity must be greater than 0"),
  });
  return (
    <div className="container">
      <Navbar />
      <div className="form">
        <span className="title">Order</span>
        <Formik initialValues={{}} validationSchema={validationsPublish}>
          <Form className="publish-form">
            <div className="publish-form-group">
              <Field
                name="productCode"
                className="form-field"
                placeholder="Product Code"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
              />
              <ErrorMessage
                component="span"
                name="productCode"
                className="form-error"
              />
            </div>

            <div className="publish-form-group">
              <Field
                name="productQuantity"
                className="form-field"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <ErrorMessage
                component="span"
                name="productQuantity"
                className="form-error"
              />
            </div>

            <button className="button" type="submit">
              Buy
            </button>
            <button onClick={handleProduct} className="button" type="submit">
              Add
            </button>
          </Form>
        </Formik>
        Products in order:
        {orders.map((order) => (
          <div>
            <p>Product code: {order.productCode}</p>
            <p>Quantity: {order.quantity}</p>
          </div>
        ))}
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
