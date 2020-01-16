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
    history.push("/signin");
  }
  return (
    <nav>
      <button
        data-target="modal-create"
        className={loginBtns ? "hide" : ""}
        onClick={toggleModal}
      >
        add
      </button>
      <button onClick={handleSignOut} className={loginBtns ? "hide" : ""}>
        signout
      </button>
      <NavLink exact to="/signin" className={loginBtns ? "" : "hide"}>
        Signin
      </NavLink>
      <NavLink exact to="/signup" className={loginBtns ? "" : "hide"}>
        Signup
      </NavLink>
      <NavLink exact to="/user" className={loginBtns ? "hide" : ""}>
        profile
      </NavLink>
    </nav>
  );
}
export default Nav;
