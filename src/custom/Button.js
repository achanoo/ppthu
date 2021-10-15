import React from 'react'
import { withStyles } from '@mui/styles'
import Button from '@mui/material/Button'

export const CustomButton = withStyles({
  root: {
    background: 'rgb(51,149,255)',
    background:
      'linear-gradient(0deg, rgba(51,149,255,1) 0%, rgba(3,224,255,1) 100%)',
    borderRadius: '50px',
    border: 0,
    color: 'white',
    height: 48,

    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})((props) => <Button {...props} />)
