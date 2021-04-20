import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api";
import { LineInput, MultiLineInput } from "../../components/Input/InputField";

export default function AdvisorInfo() {
  const [subject, setSubject] = useState("");
  const [explanation, setExplanation] = useState("");

  const history = useHistory();
  const styles = useStyles();
  const { id = 0 } = useParams();

  const handleClick = () => {
    api
      .proposeToAdvisor(subject, explanation, parseInt(id, 10))
      .then(() => {
        history.push("/proposals"); // TODO Notification zırzopunu yap
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <LineInput value={subject} onChange={setSubject} label="Subject" />
        <MultiLineInput
          value={explanation}
          onChange={setExplanation}
          label="Explanation"
          rows={10}
        />
        <div className={styles.buttons}>
          <Button variant="contained" color="primary" onClick={() => handleClick()}>
            Send
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
    alignItems: "center",
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
