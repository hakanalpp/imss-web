import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";

export default function StudentInfoAcademician() {
  const styles = useStyles();
  const { id } = useParams(); // Visibility yerini gökberke sor
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Paper style={{ padding: 10, width: 120, marginRight: -120 }}>Student Info!</Paper>
        <div />
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  buttons: {
    display: "flex",
    alignSelf: "flex-end",
    paddingRight: 16
  }
}));
