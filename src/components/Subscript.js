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
import { usePostContext } from '../context/PostContext'

const useStyles = makeStyles((theme) => ({
  root: {
    '.MuiFormControl-root': {
      margin: '12px 0px 0px 0px',
    },
  },
}))

export default function CheckboxesGroup(props) {
  const classes = useStyles()
  const { subscriptions, isloading } = useSubscriptionContext()
  const {}=usePostContext();

  const fromatSubscriptions = (data) => {
    return subscriptions.map((sub) => {
      const { level, id } = sub
      return { name: level, id, ischecked: false }
    })
  }

  const [state, setState] = React.useState({
    list:fromatSubscriptions(subscriptions),
    selected:[]
  })

  React.useEffect(() => {
    let data = fromatSubscriptions(subscriptions)
    setState((state) => {
      return {...state,list:data}
    })
  }, [subscriptions])
  // console.log(state)

  const handleChange = (id) => {
    
    const {list,selected}=state;
    let newlist=list.map((item)=>{
      if(item.id == id)
       item.ischecked =!item.ischecked;
       
       return item;

    })

    let find = selected.indexOf(id)

      if(find > -1) {
        selected.splice(find, 1)
      } else {
        selected.push(id)
      }

    setState((prev)=>({
      selected,
      list:newlist
    })) 
    
    props.getTiers(state.selected);
    
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
          {state.list.map((item) => {
            const { name, id, ischecked } = item
            return (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={ischecked}
                    onChange={(e)=>handleChange(id)}
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
