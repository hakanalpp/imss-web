import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api";
import { ReadOnlyText } from "../../components/DataDisplay/ReadOnlyText";
import { proposalSuccess } from "../../store/proposal/proposal.action";

export default function ProposalInfo() {
  const [thesis, setThesis] = useState({});

  const history = useHistory();
  const styles = useStyles();
  const { id } = useParams();

  useEffect(() => {
    api
      .getProposal(id)
      .then((response) => {
        setThesis(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleClick = (status) => {
    api
      .evaluateThesis(status, id)
      .then(() => {
        if (status) {
          history.push("/forms/1/add", thesis);
        } else {
          proposalSuccess();
          history.push("/proposals");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <ReadOnlyText label="Title" value={thesis.title} rows={1} />
        <ReadOnlyText label="Description" value={thesis.description} />

        <div className={styles.buttons}>
          <Button
            style={{ marginRight: 10 }}
            variant="contained"
            color="secondary"
            onClick={() => handleClick(true)}>
            Accept
          </Button>
          <Button variant="contained" color="primary" onClick={() => handleClick(false)}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  span: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  buttons: {
    display: "flex",
    alignSelf: "flex-end",
    paddingRight: 16
  }
}));
