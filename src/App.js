import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FormMain from "./components/FormMain";
import FormSignup from "./components/FormSignup";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FormMain} />
          <Route exact path="/signup" component={FormSignup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
