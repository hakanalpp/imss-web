import { makeStyles } from "@material-ui/core";
import React from "react";
import StatusBar from "../../components/StatusBar";

export default function StudentHome() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <StatusBar
        done="Status Proposed"
        current="Complete Program Plan Form"
        next="Propose Thesis Topic"
      />
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
