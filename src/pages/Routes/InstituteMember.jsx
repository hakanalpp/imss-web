import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Form from "../Form";
import Home from "../Home";
import NotFound from "../NotFound";

function InstituteMember() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forms" component={Form} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default InstituteMember;
