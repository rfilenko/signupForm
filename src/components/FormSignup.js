import React, { useContext } from "react";
import firebase from "../firebase";
import { FormContext } from "../context/FormContext";
import { Link, useHistory } from "react-router-dom";

import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";
import { FormSign } from "../styles/Form";
import { ModalError } from "../styles/Modal";

import useForm from "./useForm";

function FormSignup() {
  const {
    modalVisible,
    toggleModal,
    setModalVisible,
    setErrorMsg,
    errorMsg
  } = useContext(FormContext);
  const history = useHistory();

  const { handleChange, handleSubmit, handleFocus, values } = useForm(submit);

  function signup(e) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
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
    signup();
  }

  return (
    <FormWrap>
      <Nav />
      <FormSign noValidate onSubmit={handleSubmit}>
        <h2>Signup For An Account</h2>
        <div className="form-field">
          <label htmlFor="user">
            <input
              type="text"
              name="user"
              value={values.user}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </label>
        </div>
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
              placeholder={values.password}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </label>
        </div>
        <div className="form-field">
          <button>Sign me up</button>
        </div>
        <div className="form-field signup-block">
          <span>Already have an account? </span>
          <Link to="/"> Login</Link>
        </div>
      </FormSign>
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

export default FormSignup;
