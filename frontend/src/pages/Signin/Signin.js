import React from "react";
import "./Signin.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import * as yup from "yup";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export function Signin() {
  const handleLogin = (values) => {
    Axios.post("", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve ter pelo menos 8 caracteres")
      .required("Senha é obrigatória"),
  });
  return (
    <div className="container">
      <Navbar />
      <div className="form">
      <span className="title">Login</span>
        <Formik
          initialValues={{}}
          onSubmit={handleLogin}
          validationSchema={validationsLogin}
        >
          <Form className="login-form">
            <div className="login-form-group">
              <Field name="email" className="form-field" placeholder="Email" />

              <ErrorMessage
                component="span"
                name="email"
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

            <button className="button" type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <div className="signup-btn">
          <span className="signup-txt">Não possui uma conta?</span>
          <br />
          <a className="signup-click" href="/signup">Cadastre-se</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
