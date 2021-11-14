import * as React from 'react'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { useSubscriptionContext } from './../context/SubscriptionContext'
import { preventExtensions } from 'core-js/library/es7/object'

export default function CheckboxesGroup() {
  const { subscriptions, isloading } = useSubscriptionContext()

  const fromatSubscriptions = (data) => {
    return subscriptions.map((sub) => {
      const { level, id } = sub
      return { name: level, id, ischecked: false }
    })
  }

  const [state, setState] = React.useState(fromatSubscriptions(subscriptions))

  React.useEffect(() => {
    let data = fromatSubscriptions(subscriptions)
    setState((state) => {
      return data
    })
  }, [subscriptions])
  // console.log(state)

  // const handleChange = (event) => {
  //   console.log(event)

  //   setState((current) => {
  //     // const newobj = current.map((item) =>
  //     //   item.name === event.target.name ? { ...item, ischecked: true } : item
  //     // )

  //     return current
  //   })
  // }

  //const { gilad, jason, antoine } = state
  //const error = [gilad, jason, antoine].filter((v) => v).length !== 2

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl
        required
        error={false}
        component='fieldset'
        sx={{ m: 3 }}
        variant='standard'
      >
        {/* <FormLabel component='legend'>Pick two</FormLabel> */}
        <FormGroup>
          {state.map((item) => {
            const { name, id, ischecked } = item
            return (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={ischecked}
                    onChange={handleChange}
                    name={name}
                  />
                }
                label={name}
              />
            )
          })}
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  )
}
