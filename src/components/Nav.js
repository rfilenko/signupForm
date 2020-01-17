import React, { useState, useContext } from "react";
import firebase from "../firebase";
import { NavLink, useHistory } from "react-router-dom";

import { FormContext } from "../context/FormContext";

function Nav() {
  const history = useHistory();
  const { toggleModal, loginBtns } = useContext(FormContext);

  function handleSignOut() {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("Signed Out");
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );

    //redirect to signin page after
    history.push("/");
  }
  return (
    <nav>
      <button className={loginBtns ? "hide" : "show"} onClick={toggleModal}>
        add todo
      </button>
      <button onClick={handleSignOut} className={loginBtns ? "hide" : "show"}>
        signout
      </button>
      <NavLink exact to="/" className={loginBtns ? "show" : "hide"}>
        Signin
      </NavLink>
      <NavLink exact to="/signup" className={loginBtns ? "show" : "hide"}>
        Signup
      </NavLink>
      <NavLink exact to="/user" className={loginBtns ? "hide" : "show"}>
        profile
      </NavLink>
    </nav>
  );
}
export default Nav;
