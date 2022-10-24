import React from "react";
import "./Signup.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import * as yup from "yup";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export function Signup() {
  const handleRegister = (values) => {
    Axios.post("", {
      email: values.email,
      name: values.name,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    firstname: yup
      .string()
      .max(15, "Nome pode ter até 15 caracteres")
      .required("Nome é obrigatório"),
    lastname: yup
      .string()
      .max(15, "Nome pode ter até 15 caracteres")
      .required("Nome é obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve ter pelo menos 8 caracteres")
      .required("Senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <div className="container">
      <Navbar />
      <div className="form">
        <span className="title">Cadastro</span>
        <Formik
          initialValues={{}}
          onSubmit={handleRegister}
          validationSchema={validationsRegister}
        >
          <Form className="register-form">
            <div className="register-form-group">
              <Field name="email" className="form-field" placeholder="Email" />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="firstname"
                className="form-field"
                placeholder="Primeiro nome"
              />

              <ErrorMessage
                component="span"
                name="firstname"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="lastname"
                className="form-field"
                placeholder="Último nome"
              />

              <ErrorMessage
                component="span"
                name="lastname"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="password"
                className="form-field"
                placeholder="Senha"
              />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="confirmation"
                className="form-field"
                placeholder="Confirmar senha"
              />

              <ErrorMessage
                component="span"
                name="confirmation"
                className="form-error"
              />
            </div>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
}
