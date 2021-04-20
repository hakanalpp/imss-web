import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Form, { AddForm } from "../Form";
import Home from "../Home";
import NotFound from "../NotFound";
import { StudentProposal, StudentInfo } from "../Proposal";

function Student() {
  return (
    <Router>
      <Switch>
        <Route exact path="/forms/add">
          <Layout>
            <AddForm />
          </Layout>
        </Route>
        <Route exact path="/forms">
          <Layout>
            <Form />
          </Layout>
        </Route>
        <Route exact path="/proposals">
          <Layout>
            <StudentProposal />
          </Layout>
        </Route>
        <Route exact path="/proposals/:id">
          <Layout>
            <StudentInfo />
          </Layout>
        </Route>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route>
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default Student;
