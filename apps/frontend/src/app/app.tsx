import React from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Auth from "../pages/Auth";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export function App() {
  const loggedIn = true;
  return (
    <Router>
      {!loggedIn && <Redirect to="/login" />}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
