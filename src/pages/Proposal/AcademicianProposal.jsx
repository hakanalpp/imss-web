import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api";
import Table from "../../components/DataDisplay/Table";

const keys = [
  { id: "id", label: "#" },
  { id: "title", label: "Title" },
  { id: "description", label: "Description" },
  { id: "status", label: "Status" }
];

export default function AdvisorProposal() {
  const [theses, setTheses] = useState([]);
  const styles = useStyles();
  const { version } = useSelector((state) => state.proposal);
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    api
      .getProposals()
      .then((response) => {
        setTheses(response.filter((proposal) => proposal.advisor_id === id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, version]);

  return (
    <div className={styles.container}>
      <Table values={theses} keys={keys} hasInfo />
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
