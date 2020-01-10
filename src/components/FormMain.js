import React from "react";
import { Link } from "react-router-dom";

import useForm from "./useForm";

import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";
import { Form } from "../styles/Form";

function FormMain() {
  const { handleChange, handleSubmit, handleFocus, values } = useForm(submit);
  function submit() {
    console.log("Submit successfully");
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

          <Link to="/forgot"> Forgot Password?</Link>
        </div>
        <div className="form-field">
          <button>Login</button>
        </div>
        <div className="form-field signup-block">
          <span>Don't have an account? </span>
          <Link to="/signup"> Signup</Link>
        </div>
      </Form>
    </FormWrap>
  );
}
export default FormMain;
