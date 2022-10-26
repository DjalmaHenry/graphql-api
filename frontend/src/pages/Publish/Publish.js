import React from "react";
import "./Publish.css";
import { Footer } from "../../components/Footer/Footer";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Navbar } from "../../components/Navbar/Navbar";

export function Publish() {
  const validationsPublish = yup.object().shape({
    productCode: yup
      .number()
      .typeError("Product Code must be a number")
      .positive("Product Code must be a positive number")
      .integer("Product Code must be a integer")
      .required("Product Code is required"),
    productName: yup
      .string()
      .max(40, "Product Name can't exceed 40 characters"),
    providerCode: yup
      .number()
      .typeError("Provider Code must be a number")
      .positive("Provider Code must be a positive number")
      .integer("Provider Code must be a integer"),
    categoryCode: yup
      .number()
      .typeError("Category Code must be a number")
      .positive("Category Code must be a positive number")
      .integer("Category Code must be a integer"),
    quantityPerUnit: yup
      .string()
      .max(20, "Quantity Per Unit can't exceed 20 characters"),
    unitaryPrice: yup
      .number("Unitary Price must be a number")
      .positive("Unitary Price must be a positive number"),
    qttInStorage: yup
      .number()
      .typeError("Quantity In Storage must be a number")
      .positive("Quantity In Storage must be a positive number")
      .integer("Quantity In Storage must be a integer"),
    unitsOnOrder: yup
      .number()
      .typeError("Quantity Ordered must be a number")
      .positive("Quantity Ordered must be a positive number")
      .integer("Quantity Ordered must be a integer"),
    reorderLevel: yup
      .number()
      .typeError("Reorder Level must be a number")
      .positive("Reorder Level must be a positive number")
      .integer("Reorder Level must be a integer"),
    discontinued: yup.number().typeError("Discontinued must be a number"),
  });

  return (
    <div className="container">
      <Navbar />
      <div className="form">
        <span className="title">Publish Product</span>
        <Formik initialValues={{}} validationSchema={validationsPublish}>
          <Form className="publish-form">
            <div className="publish-form-group">
              <Field
                name="productCode"
                className="form-field"
                placeholder="Product Code"
              />

              <ErrorMessage
                component="span"
                name="productCode"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="productName"
                className="form-field"
                placeholder="Product Name"
              />

              <ErrorMessage
                component="span"
                name="productName"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="providerCode"
                className="form-field"
                placeholder="Provider Code"
              />

              <ErrorMessage
                component="span"
                name="providerCode"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="categoryCode"
                className="form-field"
                placeholder="Category Code"
              />

              <ErrorMessage
                component="span"
                name="categoryCode"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="quantityPerUnit"
                className="form-field"
                placeholder="Quantity Per Unity"
              />

              <ErrorMessage
                component="span"
                name="quantityPerUnit"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="unitaryPrice"
                className="form-field"
                placeholder="Unitary Price"
              />

              <ErrorMessage
                component="span"
                name="unitaryPrice"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="qttInStorage"
                className="form-field"
                placeholder="Quantity In Storage"
              />

              <ErrorMessage
                component="span"
                name="qttInStorage"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="unitsOnOrder"
                className="form-field"
                placeholder="Quantity Ordered"
              />

              <ErrorMessage
                component="span"
                name="unitsOnOrder"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="reorderLevel"
                className="form-field"
                placeholder="Reorder Level"
              />

              <ErrorMessage
                component="span"
                name="reorderLevel"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="discontinued"
                className="form-field"
                placeholder="Discontinued"
              />

              <ErrorMessage
                component="span"
                name="discontinued"
                className="form-error"
              />
            </div>

            <button className="button" type="submit">
              Publish
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
}
