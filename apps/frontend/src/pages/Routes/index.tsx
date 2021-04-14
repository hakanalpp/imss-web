import React from "react";
import InstituteMember from "./InstituteMember";
import Student from "./Student";
import Academician from "./Academician";
import NotFound from "../NotFound";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

const Routes = (): JSX.Element => {
  const { role } = useSelector((state) => state.user);
  console.log(role);
  const renderSwitch = () => {
    switch (role) {
      case "ACADEMICIAN":
        return <Academician />;
      case "INSTITUTEMEMBER":
        return <InstituteMember />;
      case "STUDENT":
        return <Student />;
      default:
        return <NotFound />;
    }
  };

  return <Layout>{renderSwitch()}</Layout>;
};

export default Routes;
