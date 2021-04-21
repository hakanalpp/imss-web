import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Toolbar, useTheme } from "@material-ui/core";
import useStyles from "./Drawer.styles";
import Content from "./Content";
import { NavList } from "./NavList";

export default function MenuDrawer({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={[classes.drawer, open && classes.drawerOpen, !open && classes.drawerClose].join(
          " "
        )}
        classes={{ paper: open ? classes.drawerOpen : classes.drawerClose }}>
        <Toolbar />
        <NavList open={open} setOpen={setOpen} />
      </Drawer>
      <Content>{children}</Content>
    </div>
  );
}
