import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../InstituteMember/Home";
import NotFound from "../NotFound";

export function InstituteMember() {
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
