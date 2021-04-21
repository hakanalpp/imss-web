/* eslint-disable react/no-array-index-key */
import React from "react";
import { Card, CardContent, IconButton, Toolbar, useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory, useRouteMatch } from "react-router-dom";
import useStyles from "./Drawer.styles";

const titleDictionary = {
  students: "Students",
  proposals: "Proposals",
  forms: "Forms"
};

const getTitle = () => {
  const url = window.location.pathname;
  const newUrl = url.replace(/\w+/gi, (m) => (titleDictionary[m] ? titleDictionary[m] : m));
  const routeArr = newUrl.split("/").splice(1);

  if (routeArr.length === 1) {
    return <div style={{ paddingTop: 3 }}>{routeArr[0] === "" ? "Home" : routeArr[0]}</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      {routeArr.map((item, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "row" }}>
          {index !== 0 && <ChevronRightIcon fontSize="large" />}
          <div style={{ height: 35, paddingTop: 3 }}>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default function Content({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const match = useRouteMatch();

  const hasBack = match.url.split("/").length - 1 > 1;
  const previousRoute = "/";

  return (
    <main className={classes.content}>
      <Toolbar />
      <Card className={classes.titleCard}>
        {hasBack && (
          <IconButton style={{ padding: 0 }} onClick={() => history.push(previousRoute)}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        )}
        <div
          className={classes.title}
          style={!hasBack ? { paddingLeft: "35px" } : { paddingLeft: "0px" }}>
          {getTitle()}
        </div>
      </Card>

      <Card className={classes.card}>
        <CardContent>{children}</CardContent>
      </Card>
    </main>
  );
}
