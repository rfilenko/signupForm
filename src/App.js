import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormContextProvider from "./context/FormContext";

import User from "./components/User";
import FormSignin from "./components/FormSignin";
import FormSignup from "./components/FormSignup";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <FormContextProvider>
            <GlobalStyle />
            <Route exact path="/" component={FormSignin} />
            <Route exact path="/signup" component={FormSignup} />
            <Route exact path="/user" component={User} />
          </FormContextProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
