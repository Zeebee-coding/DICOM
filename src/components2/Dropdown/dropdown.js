import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Input,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minwidth: 100,
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    color: "#6557d3",
  },
}));

function DropdownMenu() {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(1);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="my-dropdown">
          Period
        </InputLabel>
        <Select
          value={selectedOption}
          onChange={handleChange}
          input={<Input classes={{ root: classes.input }} />}
        >
          <MenuItem value={1}>All Time</MenuItem>
          <MenuItem value={2}>Selective</MenuItem>
          <MenuItem value={3}>Current</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default DropdownMenu;
