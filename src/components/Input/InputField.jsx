import React, { useState } from "react";
import { Checkbox, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textField: {
    margin: 15,
    width: 270
  }
}));

export const CheckBox = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const { label, onChange, disabled = false } = props;

  const onClick = () => {
    setChecked(!checked);
    onChange(checked);
  };

  return (
    <Checkbox
      name={label}
      className={classes.textField}
      disabled={disabled}
      checked={checked}
      onChange={() => onClick()}
    />
  );
};

export const LineInput = (props) => {
  const classes = useStyles();
  const { label, value, onChange, disabled = false, error = false } = props;
  return (
    <TextField
      label={label}
      className={classes.textField}
      disabled={disabled}
      error={error}
      value={value}
      onChange={(text) => onChange(text.target.value)}
    />
  );
};

export const MultiLineInput = (props) => {
  const classes = useStyles();
  const { label, value, onChange, rows = 4, error = false, errorMessage = "" } = props;

  return (
    <TextField
      label={label}
      className={classes.textField}
      value={value}
      rows={rows}
      multiline
      error={error}
      helperText={error ? errorMessage : ""}
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
