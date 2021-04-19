import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Routes from "../pages/Routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
