import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase";

import Nav from "./Nav";
import Modal from "./Modal";

import { FormWrap } from "../styles/Wrap";
import { UserInfo } from "../styles/UserInfo";
import { UserTodos } from "../styles/UserTodos";

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
        <UserTodos>
          {/* list of todos */}
          {loggedIn && todos.length > 0 ? (
            <div className="todos">
              <h4>Saved todos</h4>
              <ol>
                {todos.map(todo => {
                  return (
                    <li key={todo.id}>
                      <b>{todo.title}</b>
                      <span>{todo.content}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          ) : (
            ""
          )}
        </UserTodos>
      </main>
    </FormWrap>
  );
}

export default User;
