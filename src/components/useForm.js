import { useState } from "react";

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
    callback();
    console.log(
      `Submitted values are - email: ${values.email}, password: ${values.password}, remember: ${values.isChecked}`
    );
  };
  return { handleChange, handleSubmit, handleFocus, values };
};

export default useForm;
