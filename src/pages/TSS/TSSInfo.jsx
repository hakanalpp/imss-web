import { makeStyles } from "@material-ui/core";
import React from "react";

export default function TSSInfo() {
  const styles = useStyles();
  return <div className={styles.container}>TSS Info!</div>;
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}));
