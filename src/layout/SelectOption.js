/** @format */

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels(props) {
  const { data, handleChange, selected = 0 } = props;
  const [value, setValue] = React.useState(0);

  const handleSubmit = (event) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };
  React.useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <FormControl sx={{ minWidth: 120 }} fullWidth={props.fullWidth}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Region"
        onChange={handleSubmit}>
        <MenuItem value={0}>
          <em>None</em>
        </MenuItem>

        {data.map((item, index) => {
          return (
            <MenuItem key={index} value={item.id}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
