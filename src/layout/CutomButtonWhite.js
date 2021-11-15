import Button from '@mui/material/Button'

import { styled } from '@mui/styles'

export const CustomButtonWhite = styled('button')(({ theme }) => ({
  background: 'white',
  border: 'gray 1px solid',
  borderRadius: '50px',
  color: 'black',
  height: 48,
  padding: '0px 30px',
  [theme.breakpoints.down('md')]: {
    height: 28,
    padding: '0 20px',
  },
  textTransform: 'capitalize',
  '&:hover': {
    cursor: 'pointer',
  },
}))
