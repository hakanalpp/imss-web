import React from "react";
import { useSelector } from "react-redux";
import UserRole from "../../types/UserRole";
import StudentHome from "./StudentHome";

export function Home() {
  const { role } = useSelector((state) => state.user);
  return <>{role === UserRole.Student && <StudentHome />}</>;
}

export default Home;
