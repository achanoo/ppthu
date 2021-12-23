/** @format */

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const NOOP = () => {};
export default function SelectLabels({ onChange = "", ...props }) {
  const { data, name, inputChange } = props;
  const [value, setValue] = React.useState("none");

  React.useEffect(() => {
    setValue(onChange);
  }, [value, onChange]);

  const handleChange = (event) => {
    setValue(event.target.value);
    inputChange(event);
  };
  console.log(props.data);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={props.fullWidth}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          name={name}>
          <MenuItem value="none">
            <em>Choose one</em>
          </MenuItem>
          {data.map((item, index) => {
            return (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </>
  );
}
