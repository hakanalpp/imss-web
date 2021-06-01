import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";
import StatusBar from "../../components/StatusBar";
import { statusChanged } from "../../store/user/user.action";

const statusDictionary = {
  THESIS_TOPIC_PROPOSAL: "Proposal",
  FORM_TD: "TD Form",
  FORM_TJA: "TJA Form",
  FORM_TT: "TT Form",
  FORM_TJD: "TJD Form"
};

export default function StudentHome() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    async function getStatus() {
      const res = await api.getStatus();
      dispatch(statusChanged(res));
    }
    getStatus();
  }, [dispatch]);

  const getDisplayedValue = (value) => {
    return statusDictionary[value] || "";
  };

  return (
    <div className={styles.container}>
      <StatusBar
        done={getDisplayedValue(status?.done)}
        current={getDisplayedValue(status?.current)}
        next={getDisplayedValue(status?.next)}
      />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  status: {
    display: "flex",
    alignItems: "center"
  },
  paper: {
    backgroundColor: "#dedede",
    width: 150,
    height: 75,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  paperBig: {
    backgroundColor: "#95cfa5",
    width: 250,
    height: 125,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));
