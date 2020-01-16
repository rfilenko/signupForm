import { useState } from "react";
import firebase from "../firebase";

const useForm = callback => {
  const [values, setValues] = useState({
    user: "Johnny Doe",
    email: "john.doe@test.com",
    password: "pass",
    isChecked: false
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setValues({ ...values, [name]: checked })
      : setValues({ ...values, [name]: value });
  };
  const handleFocus = e => {
    setValues({ ...values, [e.target.name]: "" });
  };
  const handleSubmit = e => {
    e.preventDefault();

    //add user to firestore
    firebase
      .firestore()
      .collection("users")
      .add({
        user: values.user,
        email: values.email,
        password: values.password
      })
      .then(() => {
        console.log("added user to db");
      });

    callback();
    console.log(
      `Submitted values are - user: ${values.user}, email: ${values.email}`
    );
  };

  return { handleChange, handleSubmit, handleFocus, values };
};

export default useForm;
