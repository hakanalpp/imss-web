import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";

function InstituteMember() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default InstituteMember;
