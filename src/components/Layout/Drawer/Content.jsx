import React from "react";
import { Card, CardContent, IconButton, Toolbar, useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory, useRouteMatch } from "react-router-dom";
import useStyles from "./Drawer.styles";

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
          Title
        </div>
      </Card>

      <Card className={classes.card}>
        <CardContent>{children}</CardContent>
      </Card>
    </main>
  );
}
