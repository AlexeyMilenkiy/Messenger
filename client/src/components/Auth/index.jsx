import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./style.scss";

const Auth = ({ auth }) => {
  return (
    <div className="Auth">
      <h1 className="Auth__headline">Register or Login</h1>
      <Formik
        initialValues={{
          name: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Name is required"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Minimum 6 number of characters")
            .max(10, "Maximun 10 number of characters")
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          auth(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="Auth__form">
            <div className="Auth__container">
              <ErrorMessage
                className="Auth__error"
                name="name"
                component="span"
              />
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="Auth__input"
              />
            </div>
            <div className="Auth__container">
              <ErrorMessage
                className="Auth__error"
                name="password"
                component="span"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="Auth__input"
              />
            </div>
            <button className="Auth__btn" type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
