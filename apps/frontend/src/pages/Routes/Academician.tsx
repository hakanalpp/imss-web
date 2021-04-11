import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Academician/Home";
import NotFound from "../NotFound";

export function Academician() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Academician;
