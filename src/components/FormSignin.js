import React, { useContext } from "react";
import firebase from "../firebase";

import { FormContext } from "../context/FormContext";
import { Link, useHistory } from "react-router-dom";

import useForm from "./useForm";

import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";
import { ModalError } from "../styles/Modal";
import { Form } from "../styles/Form";

function FormMain() {
  const {
    modalVisible,
    toggleModal,
    setModalVisible,
    errorMsg,
    setErrorMsg
  } = useContext(FormContext);

  const history = useHistory();
  const { handleChange, handleSubmit, handleFocus, values } = useForm(submit);
  function login(e) {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(u => {
        console.log(`${u.operationType} successfully`);
        //redirect to user's page
        history.push("/user");
      })
      .catch(err => {
        setErrorMsg(err.message);
        setModalVisible(true);
        console.log(err.message);
      });
  }
  function submit() {
    login();
  }

  return (
    <FormWrap>
      <Nav />
      <Form noValidate onSubmit={handleSubmit}>
        <h2>Login to Your Account</h2>
        <div className="form-field">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder={values.Navpassword}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </label>
        </div>
        <div className="form-field remember-block">
          <label>
            <input
              type="checkbox"
              name="isChecked"
              value={values.isChecked}
              onChange={handleChange}
            />
            <span></span>
            Remember me
          </label>

          <Link to="/"> Forgot Password?</Link>
        </div>
        <div className="form-field">
          <button>Login</button>
        </div>
        <div className="form-field signup-block">
          <span>Don't have an account? </span>
          <Link to="/signup"> Signup</Link>
        </div>
      </Form>
      <ModalError
        className={modalVisible ? "modal error visible" : "modal error hidden"}
      >
        <div className="modal-content">
          <h2>Oops, there was an error...</h2>
          <p>{errorMsg}</p>
          <div className="buttons-wrap">
            <button className="btn modal-close" onClick={toggleModal}>
              close
            </button>
          </div>
        </div>
      </ModalError>
    </FormWrap>
  );
}
export default FormMain;
