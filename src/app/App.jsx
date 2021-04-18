import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
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
