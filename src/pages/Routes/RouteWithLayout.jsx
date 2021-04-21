import React from "react";
import { Route } from "react-router-dom";
import Layout from "../../components/Layout";

function RouteWithLayout({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...props}>
      <Layout>{children}</Layout>
    </Route>
  );
}

export default RouteWithLayout;
