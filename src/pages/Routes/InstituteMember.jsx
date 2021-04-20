import React from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Student, { StudentInfoAcademician } from "../Student";
import NotFound from "../NotFound";

function InstituteMember() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/students" />
          </Route>
          <Route exact path="/students">
            <Layout>
              <Student />
            </Layout>
          </Route>
          <Route exact path="/students/:id">
            <Layout>
              <StudentInfoAcademician />
            </Layout>
          </Route>
          <Route>
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default InstituteMember;
