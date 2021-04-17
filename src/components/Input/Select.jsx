import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  }
}));

const SelectBool = (props) => {
  const classes = useStyles();
  const { label, value, onChange } = props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={handleChange}>
        <MenuItem value={false}>False</MenuItem>
        <MenuItem value>True</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectBool;
