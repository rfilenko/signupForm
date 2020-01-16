import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
import auth from "firebase/auth";
export const FormContext = createContext();

const FormContextProvider = props => {
  //   nav btns
  const [loginBtns, setLoginBtns] = useState(false);
  // user
  const [person, setPerson] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  //error msg
  const [errorMsg, setErrorMsg] = useState("");

  function authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //logged user
        setPerson(user);
        setLoggedIn(true);
        setLoginBtns(false);
        console.log(user, person);
      } else {
        setPerson({});
        setLoggedIn(false);
        setLoginBtns(true);
        console.log("User is not signin");
      }
    });
  }
  useEffect(() => {
    authListener();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = e => {
    e.preventDefault();
    setModalVisible(!modalVisible);
  };

  return (
    <FormContext.Provider
      value={{
        person,
        loggedIn,
        modalVisible,
        setModalVisible,
        errorMsg,
        setErrorMsg,
        loginBtns,
        toggleModal
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
