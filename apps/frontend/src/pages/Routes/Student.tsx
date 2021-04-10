import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from "../NotFound";
import Home from '../Student/Home';

export function Student() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Student;
