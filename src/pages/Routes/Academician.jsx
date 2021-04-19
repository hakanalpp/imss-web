import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../Home";
import NotFound from "../NotFound";
import Proposal, { ProposalInfo } from "../Proposal";
import Student from "../Student";
import StudentInfo from "../Student/StudentInfo";
import TSS from "../TSS";
import TSSInfo from "../TSS/TSSInfo";

function Academician() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students" component={Student} />
          <Route exact path="/students/:id" component={StudentInfo} />
          <Route exact path="/proposals" component={Proposal} />
          <Route exact path="/proposals/:id" component={ProposalInfo} />
          <Route exact path="/TSSs" component={TSS} />
          <Route exact path="/TSSs/:id" component={TSSInfo} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Academician;
