import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../api";
import Table from "../../components/DataDisplay/Table";

const keys = [
  { id: "id", label: "#" },
  { id: "date", label: "Date" },
  { id: "place", label: "Place" }
];

const beautifyDate = (date) => {
  return `${date.split("T")[0]} ${date.split("T")[1].substring(0, 5)}`;
};

export default function TSS() {
  const styles = useStyles();
  const [TSSs, setTSSs] = useState([]);

  useEffect(() => {
    api
      .getTSSs()
      .then((response) => {
        setTSSs(response.tsss.map((tss) => ({ ...tss, date: beautifyDate(tss.date) })));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Table values={TSSs} keys={keys} />
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
