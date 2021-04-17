import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

export default function StudentHome() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <Paper className={styles.paper}>
          <div style={{ margin: "auto" }}>Advisor Proposed</div>
          <span style={{ fontStyle: "italic" }}>Done</span>
        </Paper>
        <Paper className={styles.paperBig}>
          <div style={{ margin: "auto" }}>Complete Program Plan Form</div>
          <span style={{ fontStyle: "italic" }}>Current</span>
        </Paper>
        <Paper className={styles.paper}>
          <div style={{ margin: "auto" }}>Propose Thesis Topic</div>
          <span style={{ fontStyle: "italic" }}>Next</span>
        </Paper>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
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
