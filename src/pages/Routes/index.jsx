import React from "react";
import InstituteMember from "./InstituteMember";
import Student from "./Student";
import Academician from "./Academician";
import NotFound from "../NotFound";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
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
        return <Student />;
    }
  };

  return <Layout>{renderSwitch()}</Layout>;
};

export default Routes;
