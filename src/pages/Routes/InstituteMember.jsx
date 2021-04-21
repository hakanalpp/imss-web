import React from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Student, { StudentInfoAcademician } from "../Student";
import NotFound from "../NotFound";
import RouteWithLayout from "./RouteWithLayout";

function InstituteMember() {
  return (
    <Switch>
      <RouteWithLayout exact path="/">
        <Redirect to="/students" />
      </RouteWithLayout>
      <RouteWithLayout exact path="/students">
        <Student />
      </RouteWithLayout>
      <RouteWithLayout exact path="/students/:id">
        <StudentInfoAcademician />
      </RouteWithLayout>
      <RouteWithLayout>
        <NotFound />
      </RouteWithLayout>
    </Switch>
  );
}

export default InstituteMember;
