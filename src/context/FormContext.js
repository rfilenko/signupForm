import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
export const FormContext = createContext();

const FormContextProvider = props => {
  //   nav btns
  const [loginBtns, setLoginBtns] = useState(false);
  // user
  const [person, setPerson] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  //error msg
  const [errorMsg, setErrorMsg] = useState("");

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
