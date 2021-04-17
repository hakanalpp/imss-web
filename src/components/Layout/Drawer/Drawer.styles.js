import { makeStyles } from "@material-ui/core";

const drawerWidth = 210;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    overflow: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    paddingBottom: 12,
    display: "flex",
    flexDirection: "column",
  },
  titleCard: {
    marginBottom: 24,
    height: "60px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    height: 35,
    fontSize: 24,
    fontWeight: 600,
  },
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 0,
    justifyContent: "flex-start",
  },
  extendButton: {
    marginTop: "auto",
  },
}));
