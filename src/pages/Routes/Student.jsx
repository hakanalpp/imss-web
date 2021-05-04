import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form, { AddForm } from "../Form";
import Home from "../Home";
import NotFound from "../NotFound";
import { StudentProposal, StudentInfo } from "../Proposal";
import RouteWithLayout from "./RouteWithLayout";

function Student() {
  return (
    <Switch>
      <RouteWithLayout exact path="/forms/:id/add">
        <AddForm />
      </RouteWithLayout>
      <RouteWithLayout exact path="/forms">
        <Form />
      </RouteWithLayout>
      <RouteWithLayout exact path="/proposals">
        <StudentProposal />
      </RouteWithLayout>
      <RouteWithLayout exact path="/proposals/:id">
        <StudentInfo />
      </RouteWithLayout>
      <RouteWithLayout exact path="/">
        <Home />
      </RouteWithLayout>
      <RouteWithLayout>
        <NotFound />
      </RouteWithLayout>
    </Switch>
  );
}

export default Student;
