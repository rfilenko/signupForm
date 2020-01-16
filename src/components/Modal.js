import React, { useState, useContext } from "react";
import firebase from "../firebase";

import { FormContext } from "../context/FormContext";
import { ModalWrap } from "../styles/Modal";

function Modal() {
  const { modalVisible, toggleModal, person } = useContext(FormContext);
  const [todos, setTodos] = useState({
    title: "title goes here",
    content: "some content here"
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setTodos({ ...todos, [name]: value });
  };
  const handleFocus = e => {
    setTodos({ ...todos, [e.target.name]: "" });
  };
  const handleAddTodo = e => {
    e.preventDefault();
    console.log(todos);

    //   add new todo to firestore
    firebase
      .firestore()
      .collection("todos")
      .add({
        title: todos.title,
        content: todos.content
      })
      .then(() => {
        console.log("added new todo to db");
      });
    console.log(
      `Submitted new todo - title: ${todos.title}, content: ${todos.content}`
    );
  };
  return (
    <ModalWrap className={modalVisible ? "modal visible" : "hidden modal"}>
      <div className="modal-content">
        <h2>Create todo</h2>
        <form id="create-form">
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="title"
              value={todos.title}
              onChange={handleChange}
              onFocus={handleFocus}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">content</label>
            <textarea
              name="content"
              value={todos.content}
              onChange={handleChange}
              onFocus={handleFocus}
              required
            ></textarea>
          </div>
          <div className="buttons-wrap">
            <button type="submit" className="btn" onClick={handleAddTodo}>
              Add
            </button>
            <button className="btn modal-close" onClick={toggleModal}>
              close
            </button>
          </div>
        </form>
      </div>
    </ModalWrap>
  );
}

export default Modal;
