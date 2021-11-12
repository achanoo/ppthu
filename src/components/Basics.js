import React, { useState, useRef } from 'react'
import {
  Typography,
  Box,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import JoditEditor from 'jodit-react'
import Link from '@mui/material/Link'
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'
import '../assets/style.css'
import Avatar from '@mui/material/Avatar'
import { FiEdit3 } from 'react-icons/fi'
import { makeStyles } from '@mui/styles'
import { CButton } from '../layout/CCButton'

const useStyles = makeStyles((theme) => ({
  boxer: {
    display: 'flex',
    padding: '20px 25px',
    justifyContent: 'flex-start',
    justifyItems: 'center',
    alignItems: 'baseline',
    '& .MuiAvatar-root': {
      display: 'flex',
      alignSelf: 'center',
      marginRight: theme.spacing(2),
    },
    '& h4': {
      display: 'flex',
      alignSelf: 'center',
      marginRight: theme.spacing(1),
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1.3rem',
    },
    '& svg': {
      color: 'rgb(229,227,221)',
      fontSize: '1.3rem',
      alignSelf: 'center',
    },
  },
  cusFormInput: {
    textAlign: 'start',
    padding: ' 10px 0px',

    '& label': {
      color: '#333333',
      padding: '18px 0px',
      marginBottom: '8px',
    },
    '& .inputField': {
      margin: '0.5rem 0px',
      background: 'rgb(245, 244, 242)',
    },
  },
  datePickupInput: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    '& span': {
      margin: '0px 8px',
    },
    '& .MuiOutlinedInput-root #day,.MuiOutlinedInput-root #month': {
      width: '24px',
    },
    '& .MuiOutlinedInput-root #year': {
      width: '42px',
    },
  },
  subtitle: {
    fontSize: '0.725rem',
    color: '#c9c8c4',
  },
  buttonGroup: {
    float: 'right',
    '& .MuiButton-root': {
      margin: '0px 8px',
    },
  },
}))

// input formula=> (valu.length + 1)*8

const Basic = () => {
  const classes = useStyles()
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  }

  return (
    <Wrapper>
      <Grid className='container'>
        <Typography variant='h4' gutterBottom component='div'>
          Personal Information
        </Typography>
        <Box className={`${classes.boxer} FaintBox`}>
          <Avatar src='https://cdn-icons-png.flaticon.com/128/1946/1946429.png' />
          <h4>Username</h4>
          <FiEdit3 />
        </Box>

        <Box>
          {/* cover photo */}
          <Grid container>
            <Grid item xs={4} sm={4} md={4} alignSelf='center'>
              <p className='input-label' id='labelCoverphoto'>
                Cover photo
              </p>
              <p className='input-required subtitle'>Required</p>
              <span className={classes.subtitle}>
                We recommend an image at least 1600px wide and 400px tall.
              </span>
            </Grid>
            <Grid item xs={8} sm={8} md={8} alignSelf='center'>
              <TextField
                type='file'
                name='file'
                id='cover-photo'
                className='cover-photo'
              />
              <label htmlFor='cover-photo' className='show-cover-photo'></label>
            </Grid>
          </Grid>
          {/* profile photo */}
          <Grid container>
            <Grid item xs={4} sm={4} md={4} alignSelf='center'>
              <p className='input-label'> Profile photo </p>
              <p className='input-required subtitle'>Required</p>
              <span className={classes.subtitle}>
                We recommend a 256px by 256px image.
              </span>
            </Grid>
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              alignSelf='center'
              className='container'
              style={{ border: 'none' }}
            >
              <Avatar
                src='http://localhost:3000/static/media/logo.39c48425.png'
                alt='Avatar'
                className='image circle-img'
              />

              {/* <input type="file" name="file" id="profile1" className="profile" />
                                        <label for="profile1" className="show-profile"></label> */}
              <div className='overlay'>
                <div className='upload'>
                  <input
                    type='file'
                    name='file'
                    id='profile'
                    className='profile'
                  />
                  <label htmlFor='profile' className='show-profile'></label>
                  <div>Edit</div>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* page url */}
        </Box>
        <Box className={`${classes.formControl}`}>
          <Box className={classes.cusFormInput}>
            <label className='input-label' htmlFor='day'>
              Birthday
            </label>
            <Box className={classes.datePickupInput}>
              <TextField
                id='day'
                type='text'
                // name={aemail}
                name='day'
                className={classes.inputField}
                placeholder='XX'

                // onChange={(e) => setEmail(e.target.value)}
              />
              <span>Day</span>
              <TextField
                variant='outlined'
                type='text'
                id='month'
                name='month'
                placeholder='XX'
              />
              <span>Month</span>
              <TextField
                variant='outlined'
                type='text'
                name='year'
                id='year'
                placeholder='XXXX'
              />
              <span>Year</span>
            </Box>
          </Box>
          <Box className={classes.cusFormInput}>
            <label className='input-label' htmlFor='email'>
              Email
            </label>
            <TextField
              id='email'
              type='email'
              name='email'
              className={classes.inputField}
              fullWidth
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box className={classes.cusFormInput}>
            <label className='input-label' htmlFor='loginPh'>
              Login Phone Number
            </label>
            <OutlinedInput
              fullWidth
              id='loginPh'
              // value={phone}
              // onChange={handlePhoneNumber}
              startAdornment={
                <InputAdornment position='start'>
                  +95
                  <KeyboardArrowRightIcon /> 9
                </InputAdornment>
              }
              aria-describedby='component-error-text'
              inputProps={{ type: 'number' }}
              placeholder='000000000'
            />
          </Box>
          <Box className={classes.cusFormInput}>
            <label className='input-label' htmlFor='contactPh'>
              Contact Phone Number
            </label>
            <OutlinedInput
              fullWidth
              id='contactPh'
              // value={phone}
              // onChange={handlePhoneNumber}
              startAdornment={
                <InputAdornment position='start'>
                  +95
                  <KeyboardArrowRightIcon /> 9
                </InputAdornment>
              }
              aria-describedby='component-error-text'
              inputProps={{ type: 'number' }}
              placeholder='000000000'
            />
          </Box>
          <Box className={classes.buttonGroup}>
            <CButton bgcolor='#eeeeee' textcolor='#0f0f0f'>
              Cancel
            </CButton>
            <CButton>Save</CButton>
          </Box>
        </Box>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;

    height: auto;
    padding: 20px;
  }
`

export default Basic
