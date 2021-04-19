import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default (props) => {
  const { title, array } = props;
  const styles = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.list}>
        <List>
          {array.map((item) => (
            <ListItem divider key={item.id}>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => history.push(`${match.url}/${item.id}`)}>
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
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
