import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import auth from "firebase/auth";

import Nav from "./Nav";
import Modal from "./Modal";

import { FormWrap } from "../styles/Wrap";
import { UserInfo } from "../styles/UserInfo";

import { FormContext } from "../context/FormContext";

function User() {
  const { loggedIn, person } = useContext(FormContext);

  return (
    <FormWrap>
      <Modal />
      <Nav />
      <main>
        <UserInfo>
          <h1>Profile information</h1>
          <h3>
            Welcome, <i>{person.email}</i>
          </h3>
          {!person.emailVerified && (
            <p>To use your account, please verify your email</p>
          )}
        </UserInfo>
      </main>
    </FormWrap>
  );
}

export default User;
