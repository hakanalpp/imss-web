import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "../pages/Login";
import Routes from "../pages/Routes";

export function App() {
  const loggedIn = false;
  return (
    <Router>
      {!loggedIn && <Redirect to="/login" />}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
