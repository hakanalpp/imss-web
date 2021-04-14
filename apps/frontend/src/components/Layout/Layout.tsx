import React from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Drawer>{children}</Drawer>
    </>
  );
};

export default Layout;
