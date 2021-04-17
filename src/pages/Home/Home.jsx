import React from "react";
import { useSelector } from "react-redux";
import UserRole from "../../types/UserRole";
import StudentHome from "./StudentHome";

export function Home() {
  const { role } = useSelector((state) => state.user);
  console.log(role);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  // return <>{role === UserRole.Student && <StudentHome />}</>;
  return <StudentHome />;
}

export default Home;
