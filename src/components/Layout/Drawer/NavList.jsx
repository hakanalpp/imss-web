import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import useStyles from "./Drawer.styles";

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
        <ListItem
          key={index}
          button
          onClick={() => history.push(item.onClickPath)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
      <ListItem
        className={classes.extendButton}
        button
        onClick={() => handleClick()}
      >
        {open && <ListItemText primary="Show Less" />}
        <ListItemIcon>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

const NavController = () => {
  const type = "lala";
  switch (type) {
    default:
      return mainNav;
  }
};

const mainNav = [
  { name: "Home", onClickPath: "/", icon: <HomeIcon /> },
  { name: "Forms", onClickPath: "/forms", icon: <BusinessIcon /> },
  { name: "Students", onClickPath: "/students", icon: <PeopleIcon /> },
];

export default NavList;
