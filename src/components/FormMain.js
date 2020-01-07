import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

function FormMain() {
  return (
    <>
      <Nav />
      <form noValidate>
        <h2>Login to Your Account</h2>
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
        <div className="form-field remember-block">
          <label>
            <input type="checkbox" name="isChecked" />
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
      </form>
    </>
  );
}
export default FormMain;
