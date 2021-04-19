import { makeStyles } from "@material-ui/core";
import React from "react";
import List from "../../components/DataDisplay/List";

const arr = [
  { id: 1, name: "TSS1" },
  { id: 2, name: "TSS2" },
  { id: 3, name: "TSS3" },
  { id: 4, name: "TSS4" },
  { id: 5, name: "TSS5" },
  { id: 31, name: "TSS6" }
];

export default function TSS() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <List title="TSSs" array={arr} />
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
