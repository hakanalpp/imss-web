import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../Home";
import NotFound from "../NotFound";
import { AcademicianProposal, AcademicianInfo } from "../Proposal";
import Student from "../Student";
import StudentInfo from "../Student/StudentInfo";
import TSS from "../TSS";
import TSSInfo from "../TSS/TSSInfo";

function Academician() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path="/students">
          <Layout>
            <Student />
          </Layout>
        </Route>
        <Route exact path="/students/:id">
          <Layout>
            <StudentInfo />
          </Layout>
        </Route>
        <Route exact path="/proposals">
          <Layout>
            <AcademicianProposal />
          </Layout>
        </Route>
        <Route exact path="/proposals/:id">
          <Layout>
            <AcademicianInfo />
          </Layout>
        </Route>
        <Route exact path="/TSSs">
          <Layout>
            <TSS />
          </Layout>
        </Route>
        <Route exact path="/TSSs/:id">
          <Layout>
            <TSSInfo />
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

export default Academician;
