import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

export default function StatusBar(props) {
  const { done = "", current = "", next = "" } = props;
  const styles = useStyles();

  return (
    <div className={styles.status}>
      <Paper className={styles.paper}>
        <div style={{ margin: "auto" }}>{done}</div>
        <span style={{ fontStyle: "italic" }}>Done</span>
      </Paper>
      <Paper className={styles.paperBig}>
        <div style={{ margin: "auto" }}>{current}</div>
        <span style={{ fontStyle: "italic" }}>Current</span>
      </Paper>
      <Paper className={styles.paper}>
        <div style={{ margin: "auto" }}>{next}</div>
        <span style={{ fontStyle: "italic" }}>Next</span>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  status: {
    display: "flex",
    alignItems: "center"
  },
  paper: {
    backgroundColor: "#dedede",
    width: 150,
    height: 75,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  paperBig: {
    backgroundColor: "#95cfa5",
    width: 250,
    height: 125,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));
