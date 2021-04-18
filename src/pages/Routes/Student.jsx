import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Form, { AddForm } from "../Form";
import Home from "../Home";
import NotFound from "../NotFound";

function Student() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/forms/add" component={AddForm} />
          <Route exact path="/forms" component={Form} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Student;
