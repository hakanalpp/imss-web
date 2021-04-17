import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textField: {
    margin: 15,
    width: 270
  }
}));

export const LineInput = (props) => {
  const classes = useStyles();
  const { label, value, onChange, disabled = false } = props;
  return (
    <TextField
      label={label}
      className={classes.textField}
      disabled={disabled}
      value={value}
      onChange={(text) => onChange(text.target.value)}
    />
  );
};

export const MultiLineInput = (props) => {
  const classes = useStyles();
  const { label, value, onChange, rows = 4 } = props;

  return (
    <TextField
      label={label}
      className={classes.textField}
      value={value}
      rows={rows}
      multiline
      variant="outlined"
      onChange={(text) => onChange(text.target.value)}
    />
  );
};

export const DatePicker = (props) => {
  const classes = useStyles();
  const { label, value, onChange } = props;

  return (
    <TextField
      id="date"
      label={label}
      type="date"
      value={value}
      className={classes.textField}
      onChange={(text) => onChange(text.target.value)}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};
