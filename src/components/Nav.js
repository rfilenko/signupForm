import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink exact to="/">
        Signin
      </NavLink>
      <NavLink exact to="/signup">
        Signup
      </NavLink>
    </nav>
  );
}
export default Nav;
