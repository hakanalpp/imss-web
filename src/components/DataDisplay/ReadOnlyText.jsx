import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textField: {
    margin: 15,
    width: 270
  }
}));

export const ReadOnlyText = (props) => {
  const classes = useStyles();
  const { label, value = "", rows = 4 } = props;

  return (
    <TextField
      label={label}
      className={classes.textField}
      value={value}
      rows={rows}
      multiline
      variant="outlined"
      InputProps={{
        readOnly: true
      }}
    />
  );
};
