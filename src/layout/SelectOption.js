import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectLabels(props) {
  const { data } = props
  const [value, setValue] = React.useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  // console.log(props.fullWidth)

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={props.fullWidth}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=''>
            <em>Choose one</em>
          </MenuItem>
          {data.map((item, index) => {
            return (
              <MenuItem key={index} value={index}>
                {item}
              </MenuItem>
            )
          })}
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </>
  )
}
