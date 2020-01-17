import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase";

import Nav from "./Nav";
import Modal from "./Modal";

import { FormWrap } from "../styles/Wrap";
import { UserInfo } from "../styles/UserInfo";

import { FormContext } from "../context/FormContext";

function User() {
  const { loggedIn, person } = useContext(FormContext);

  // to show data from firebase
  function AddTodo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection("todos")
        .onSnapshot(snapshot => {
          const newTodos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setTodos(newTodos);
          // debugger;
        });
      return () => unsubscribe();
    }, []);
    return todos;
  }
  const todos = AddTodo();
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

        {/* list of todos */}
        {loggedIn && todos.length > 0 ? (
          <div className="todos">
            <h4>Saved todos</h4>
            <ul>
              {todos.map(user => {
                return (
                  <li key={user.id}>
                    <p>
                      Task <b>{user.title},</b>
                    </p>
                    <span>description: {user.content}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </main>
    </FormWrap>
  );
}

export default User;
