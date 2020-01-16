import React from "react";
import { Link } from "react-router-dom";

// import "firebase/auth";
import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";

function Home() {
  return (
    <FormWrap>
      <Nav />
      <h1>Home page</h1>
      <Link to="/signin">Signin</Link>
    </FormWrap>
  );
}

export default Home;
