import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material'
import { CButton } from './../../../layout/CCButton'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    display: 'grid',
    marginTop: '5vh',
    placeItems: 'center',
    padding: '10px',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      padding: '10px',
    },
    '& h2': {
      textAlign: 'center',
    },
  },
  container: {
    width: '90vw',
    maxWidth: '700px',
    textAlign: 'start',
    height: 'auto',
    padding: '20px',

    [theme.breakpoints.only('xs')]: {
      padding: '5px',
    },
  },
  categories: {
    padding: ' 20px 30px',
  },
  subtitle: {
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '20px',
  },
}))

const StepOne = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Grid container>
          <Grid item sm={12} md={8}>
            <span className={classes.subtitle}>Step 1 of 2</span>
            <Typography variant='h4' component='div' gutterBottom={false}>
              What describes your content?
            </Typography>
            <span className='cText'>
              You can pick up more than one categories
            </span>
            <Grid container className={classes.categories}>
              <Grid item xs={12} sm={12} md={6}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='Podcasts'
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='Animation & illustration'
                  />
                  <FormControlLabel control={<Checkbox />} label='Music' />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='Communities'
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='Videos'
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='Writing & Journalism'
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='Games & SoftWare'
                  />
                  <FormControlLabel control={<Checkbox />} label='Others' />
                </FormGroup>
              </Grid>
            </Grid>
            <CButton onClick={() => history.push('/step/2')}>Continue</CButton>
          </Grid>
          <Grid item sm={12} md={4}></Grid>
        </Grid>
      </div>
    </div>
  )
}
const Wrapper = styled.section`
  max-height: 100vh;
  margin-top: 10vh;
  display: grid;
  padding: 10px;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 800px;
    text-align: start;
    border: 1px solid rgb(229, 227, 221);
    border-radius: 4px;
    height: auto;
    padding: 20px;
  }
`
export default StepOne
