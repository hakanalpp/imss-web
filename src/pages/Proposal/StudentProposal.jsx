import { makeStyles } from "@material-ui/core";
import React from "react";
import Table from "../../components/DataDisplay/Table";

const arr = [
  { id: 1, name: "test1", topic: "topic1" },
  { id: 2, name: "test12", topic: "topic2" },
  { id: 3, name: "test13", topic: "topic3" },
  { id: 4, name: "test134", topic: "topic4" },
  { id: 5, name: "test1143", topic: "topic5" },
  { id: 31, name: "test1134", topic: "topic6" }
];

const keys = [
  { id: "id", label: "#" },
  { id: "name", label: "Name" },
  { id: "topic", label: "Research Topic" }
];

export default function Proposal() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <h2>Possible Advisors that you can propose</h2>
      <Table values={arr} keys={keys} hasInfo />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
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
