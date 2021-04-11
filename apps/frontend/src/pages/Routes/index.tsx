import React from "react";
import InstituteMember from "./InstituteMember";
import Student from "./Student";
import Academician from "./Academician";
import NotFound from "../NotFound";

const Routes = ({ role }): JSX.Element => {
  const renderSwitch = (param: string) => {
    switch (param) {
      case "Academician":
        return <Academician />;
      case "InstituteMember":
        return <InstituteMember />;
      case "Student":
        return <Student />;
      default:
        return <NotFound />;
    }
  };

  return <>{renderSwitch("Student")}</>;
};

export default Routes;
