import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, useTheme } from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import useStyles from "./Drawer.styles";
import store from "../../../store";

export const NavList = ({ open, setOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.list}>
      {NavController().map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={index} button onClick={() => history.push(item.onClickPath)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
      <ListItem className={classes.extendButton} button onClick={() => handleClick()}>
        {open && <ListItemText primary="Show Less" />}
        <ListItemIcon>{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}</ListItemIcon>
      </ListItem>
    </List>
  );
};

const NavController = () => {
  const { role } = store.getState().user;
  switch (role) {
    case "ACADEMICIAN":
      return academicianNav;
    case "INSTITUTE_MEMBER":
      return instituteMemberNav;
    default:
      return studentNav;
  }
};

const studentNav = [
  { name: "Graduation Process", onClickPath: "/", icon: <HomeIcon /> },
  { name: "Forms", onClickPath: "/forms", icon: <DescriptionIcon /> }
];

const academicianNav = [
  { name: "Home", onClickPath: "/", icon: <HomeIcon /> },
  { name: "Students", onClickPath: "/students", icon: <PeopleIcon /> },
  { name: "Proposals", onClickPath: "/proposals", icon: <DescriptionIcon /> },
  { name: "TSSs", onClickPath: "/TSSs", icon: <DescriptionIcon /> }
];

const instituteMemberNav = [{ name: "Students", onClickPath: "/students", icon: <BusinessIcon /> }];

export default NavList;
