import React from "react";

import { Switch } from "react-router-dom";
import { AddForm } from "../Form";
import Home from "../Home";
import NotFound from "../NotFound";
import { AcademicianProposal, AcademicianInfo } from "../Proposal";
import Student from "../Student";
import StudentInfo from "../Student/StudentInfo";
import TSS from "../TSS";
import TSSInfo from "../TSS/TSSInfo";
import RouteWithLayout from "./RouteWithLayout";

function Academician() {
  return (
    <Switch>
      <RouteWithLayout exact path="/">
        <Home />
      </RouteWithLayout>
      <RouteWithLayout exact path="/students">
        <Student />
      </RouteWithLayout>
      <RouteWithLayout exact path="/students/:id">
        <StudentInfo />
      </RouteWithLayout>
      <RouteWithLayout exact path="/proposals">
        <AcademicianProposal />
      </RouteWithLayout>
      <RouteWithLayout exact path="/proposals/:id">
        <AcademicianInfo />
      </RouteWithLayout>
      <RouteWithLayout exact path="/TSSs">
        <TSS />
      </RouteWithLayout>
      <RouteWithLayout exact path="/TSSs/:id">
        <TSSInfo />
      </RouteWithLayout>
      <RouteWithLayout exact path="/forms/:id/add">
        <AddForm />
      </RouteWithLayout>
      <RouteWithLayout>
        <NotFound />
      </RouteWithLayout>
    </Switch>
  );
}

export default Academician;
