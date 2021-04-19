import { makeStyles } from "@material-ui/core";
import React from "react";
import List from "../../components/DataDisplay/List";

const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test12" },
  { id: 3, name: "test13" },
  { id: 4, name: "test134" },
  { id: 5, name: "test1143" },
  { id: 31, name: "test1134" }
];

export default function Student() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <List title="Students" array={arr} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  list: {
    maxHeight: 600,
    overflow: "auto",
    backgroundColor: "#f5f3f0",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "black"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));
