import React, { useEffect } from "react";
import "./style.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { setStorage } from "../../utils/storage";
import { socket } from "../../utils/socket";

export default function Chat({ logout, send, user, messages, getMessage }) {
  useEffect(() => {
    socket.on("message", data => {
      getMessage(data);
    });

    return () => {
      socket.removeAllListeners("message");
    };
  }, []);

  const chat = messages.map(item => {
    return (
      <div
        className={
          user.id === item.user_id ? "Chat__block" : "Chat__block interlocutor"
        }
        key={item.time}
      >
        <span className="Chat__text">{item.text}</span>
        <span className="Chat__details">
          {item.name} {item.time}
        </span>
      </div>
    );
  });
  return (
    <div className="Chat">
      <div className="Chat__wrapper">
        <h3>Messenger</h3>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="Chat__window">{chat}</div>
      <Formik
        initialValues={{
          text: ""
        }}
        validationSchema={Yup.object().shape({
          text: Yup.string().required("Text is required")
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          values.name = user.name || setStorage("name");
          values.id = user.id || setStorage("id");
          send(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="Chat__form">
            <div className="Chat__container">
              <ErrorMessage
                className="Chat__error"
                name="text"
                component="span"
              />
              <Field
                type="text"
                name="text"
                placeholder="Your message"
                className="Chat__input"
              />
            </div>
            <button className="Chat__btn" type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
