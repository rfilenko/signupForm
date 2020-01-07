import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";
import { FormSign } from "../styles/Form";

function FormSignup() {
  return (
    <FormWrap>
      <Nav />
      <FormSign noValidate>
        <h2>Signup For An Account</h2>
        <div className="form-field">
          <label htmlFor="user">
            <input type="text" name="user" />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <input type="email" name="email" />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="password">
            <input type="password" name="password" />
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
    </FormWrap>
  );
}

export default FormSignup;