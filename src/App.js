import React from "react";

import FormMain from "./components/FormMain";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FormMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
