import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  container: {
    backgroundColor: "#d6d6d6",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    paddingTop: "10rem"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column"
  },
  card: {
    width: "20rem"
  },
  resetDB: {
    position: "fixed",
    bottom: 10,
    right: 10
  }
}));
