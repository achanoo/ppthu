import React from 'react'
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
  return (
    <Wrapper>
      <div className='container'>
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
            <CButton>Continue</CButton>
          </Grid>
          <Grid item sm={12} md={4}></Grid>
        </Grid>
      </div>
    </Wrapper>
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
