import React from "react";
import firebase from "../firebase";
import { Link, useHistory } from "react-router-dom";
import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";
import { FormSign } from "../styles/Form";

import useForm from "./useForm";

function FormSignup() {
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
        console.log(err.message);
      });
  }
  function submit() {
    signup();
    console.log("Submit successfully");
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
          <Link to="/signin"> Login</Link>
        </div>
      </FormSign>
    </FormWrap>
  );
}

export default FormSignup;
