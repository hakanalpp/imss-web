import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api";

export default function Form() {
  const styles = useStyles();
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Button variant="contained" color="secondary" onClick={() => history.push("forms/1/add")}>
        Add
      </Button>
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
