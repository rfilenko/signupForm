import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormContextProvider from "./context/FormContext";

import User from "./components/User";
import FormMain from "./components/FormMain";
import FormSignup from "./components/FormSignup";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <FormContextProvider>
            <Route exact path="/signin" component={FormMain} />
            <Route exact path="/signup" component={FormSignup} />
            <Route exact path="/user" component={User} />
          </FormContextProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
