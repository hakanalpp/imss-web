import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";

export default function ProposalInfo() {
  const styles = useStyles();
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <div className={styles.content}>Proposal Info</div>
        <div className={styles.buttons}>
          <Button style={{ marginRight: 10 }} variant="contained" color="primary">
            Accept
          </Button>
          <Button variant="contained" color="secondary">
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    height: 200
  },
  buttons: {
    display: "flex",
    alignSelf: "flex-end",
    paddingRight: 16
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
