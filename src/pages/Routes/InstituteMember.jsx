import React from "react";

import { Redirect, Switch } from "react-router-dom";
import StudentInstituteMember from "../Student/StudentInstituteMember";
import NotFound from "../NotFound";
import RouteWithLayout from "./RouteWithLayout";

function InstituteMember() {
  return (
    <Switch>
      <RouteWithLayout exact path="/">
        <Redirect to="/students" />
      </RouteWithLayout>
      <RouteWithLayout exact path="/students">
        <StudentInstituteMember />
      </RouteWithLayout>
      <RouteWithLayout>
        <NotFound />
      </RouteWithLayout>
    </Switch>
  );
}

export default InstituteMember;
