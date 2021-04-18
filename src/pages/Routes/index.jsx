import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import InstituteMember from "./InstituteMember";
import Student from "./Student";
import Academician from "./Academician";
import UserRole from "../../types/UserRole";

const Routes = () => {
  const { role } = useSelector((state) => state.user);
  const renderSwitch = () => {
    switch (role) {
      case UserRole.Academician:
        return <Academician />;
      case UserRole.InstituteMember:
        return <InstituteMember />;
      case UserRole.Student:
        return <Student />;
      default:
        return <Redirect to="/login" />;
    }
  };

  return <>{renderSwitch()}</>;
};

export default Routes;
