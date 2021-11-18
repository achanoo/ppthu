import * as React from 'react'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { useSubscriptionContext } from './../context/SubscriptionContext'
import { makeStyles } from '@mui/styles'

import { subscriptPlan } from './../assets/data.js'

const useStyles = makeStyles((theme) => ({
  root: {
    '.MuiFormControl-root': {
      margin: '12px 0px 0px 0px',
    },
  },
}))

export default function CheckboxesGroup() {
  const classes = useStyles()
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

  const handleChange = (event) => {
    console.log(state)
  }

  //const { gilad, jason, antoine } = state
  //const error = [gilad, jason, antoine].filter((v) => v).length !== 2

  return (
    <>
      <FormControl
        required
        error={false}
        component='fieldset'
        sx={{ m: 3 }}
        variant='standard'
        className={classes.root}
      >
        {/* <FormLabel component='legend'>Pick two</FormLabel> */}
        <FormGroup>
          {subscriptPlan.map((item) => {
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
        {/* <FormHelperText > You can display an error</FormHelperText> */}
      </FormControl>
    </>
  )
}
