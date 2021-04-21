import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import InstituteMember from "./InstituteMember";
import Student from "./Student";
import Academician from "./Academician";
import UserRole from "../../types/UserRole";
import Login from "../Login";

const Routes = () => {
  const { role } = useSelector((state) => state.user);
  const history = useHistory();

  const renderSwitch = () => {
    switch (role) {
      case UserRole.Academician:
        return <Academician />;
      case UserRole.InstituteMember:
        return <InstituteMember />;
      case UserRole.Student:
        return <Student />;
      default:
        return (
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        );
    }
  };

  useEffect(() => {
    if (!role) history.push("/login");
  }, [history, role]);

  return <>{renderSwitch()}</>;
};

export default Routes;
