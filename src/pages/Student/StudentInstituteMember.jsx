import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../api";
import Table from "../../components/DataDisplay/Table";

const keys = [
  { id: "name", label: "Name" },
  { id: "department", label: "Department" },
  { id: "semester", label: "Semester" },
  { id: "reason", label: "Reason" }
];

export default function StudentInstituteMember() {
  const styles = useStyles();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api
      .getFailedStudents()
      .then((response) => {
        setStudents(response.failedStudents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Table values={students} keys={keys} />
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
