import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { makeStyles } from '@mui/styles'
import { CButton } from '../layout/CCButton'

import {
  TextField,
  Box,
  Button,
  Fade,
  Backdrop,
  Typography,
} from '@mui/material'
import GoogleLogin from 'react-google-login'
import facebookLogo from './../assets/logos/icons8-facebook.svg'
import FacebookLogin from './Facebook'
import Google from './Google'
import Modal from '@mui/material/Modal'

import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'

import 'react-phone-input-2/lib/style.css'
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
  line: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    transition: 'all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
    verticalAlign: 'middle',
    padding: '0.5rem 0rem 0rem',
    margin: '0rem',
  },
  liner: {
    boxSizing: 'border-box',
    webkitBoxFlex: 1,
    flexGrow: 1,
    transition: ' all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
    padding: '0rem',
    margin: '0rem',
    borderBottom: '1px solid rgb(229, 227, 221)',
  },

  linerSec: {
    boxSizing: 'border-box',
    transition: 'all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
    padding: '0rem 0.5rem',
    margin: '0rem',

    '& p': {
      color: 'rgb(112, 108, 100)',
      fontFamily: 'aktiv-grotesk, sans-serif',
      position: 'relative',
      transition: 'all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
      textAlign: 'center',
      fontWeight: '400 !important',
      margin: ' 0.5rem 0rem !important',
      fontSize: '1rem !important',
      lineHeight: '1.5 !important',
    },
  },

  cusFormControl: {
    textAlign: 'start',
    padding: ' 10px 0px',
    '& label': {
      color: '#333333bd',
    },
    '& .input-field': {
      margin: '0.5rem 0px',
      background: 'rgb(245, 244, 242)',
    },
  },

  // start//////////////////////

  // end//////////////////////
}))

const Register = () => {
  const classes = useStyles()
  const { registerByaccount } = useAuthContext()
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isError: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const history = useHistory()
  // console.log(getCountryCallingCode('MM'))

  const formValChange = (e) => {
    const { name, value } = e.target
    const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

    const { isError, email, name: ename, password, confirmPassword } = state

    if (name === 'email') {
      isError.email = regExp.test(value) ? '' : 'Email address is invalid!'
    }

    if (name === 'password') {
      if (confirmPassword.length > 0) {
        isError.confirmPassword =
          value == confirmPassword ? '' : 'ConfirmPassword is not match!'
      } else {
        isError.password =
          value.length < 8 ? '"Atleast 6 characaters required"' : ''
      }
    }

    if (name === 'confirmPassword') {
      isError.confirmPassword =
        value == password ? '' : 'ConfirmPassword is not match!'
    }

    setState({
      ...state,
      isError,
      [name]: value,
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const formdata = {
      name: state.name,
      email: state.email,
      password: state.password,
      password_confirmation: state.confirmPassword,
      dob: '',
      categories: '[2]',
      role_id: '2',
    }
    //console.log(formdata)
    registerByaccount(formdata)
  }

  const gotoHome = () => {
    history.push('/home')
  }

  const RegisterByPhone = () => {
    history.push('/register/phone')
  }

  return (
    <div className={classes.wrapper}>
      <h2>Sign Up</h2>
      <div className={`${classes.container} FaintBox `}>
        <Google />

        <FacebookLogin />

        {/* <Button
          onClick={RegisterByPhone}
          fullWidth
          className='btn btn-facebook'
        >
          continue with phone number
        </Button> */}

        <CButton
          fullWidth
          bgcolor='#fff'
          textcolor='#333'
          border={true}
          type='submit'
          className='btn btn-filled'
          onClick={RegisterByPhone}
        >
          continue with phone number
        </CButton>

        <div className={classes.line}>
          <div className={classes.liner}></div>
          <div className={classes.linerSec}>
            <p>or</p>
          </div>
          <div className={classes.liner}></div>
        </div>

        <form onSubmit={handleSubmitForm}>
          <Box className={classes.cusFormControl}>
            <label htmlFor='name'>Name</label>
            <TextField
              id='name'
              type='text'
              name='name'
              className='input-field'
              fullWidth
              onChange={formValChange}
              variant='outlined'
            />
          </Box>

          <Box className={classes.cusFormControl}>
            <label htmlFor='email'>Email</label>
            <TextField
              id='email'
              type='email'
              error={state.isError.email.length > 0 ? true : false}
              name='email'
              className='input-field'
              fullWidth
              helperText={
                state.isError.email.length > 0 ? state.isError.email : ''
              }
              onChange={formValChange}
              variant='outlined'
            />
          </Box>

          <Box className={classes.cusFormControl}>
            <label htmlFor='password'>Password</label>
            <TextField
              id='password'
              type='password'
              error={state.isError.password.length > 0 ? true : false}
              name='password'
              className='input-field'
              fullWidth
              helperText={
                state.isError.password.length > 0 ? state.isError.password : ''
              }
              onChange={formValChange}
              variant='outlined'
            />
          </Box>

          <Box className={classes.cusFormControl}>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <TextField
              error={state.isError.confirmPassword.length > 0 ? true : false}
              id='confirmPassword'
              type='password'
              name='confirmPassword'
              className='input-field'
              fullWidth
              helperText={
                state.isError.confirmPassword.length > 0
                  ? state.isError.confirmPassword
                  : ''
              }
              onChange={formValChange}
              variant='outlined'
            />
          </Box>

          <CButton
            fullWidth
            bgcolor='rgb(195 197 194)'
            type='submit'
            className='btn btn-filled'
            onClick={handleSubmitForm}
          >
            Sing Up
          </CButton>
          <p style={{ textAlign: 'center' }}>
            By signing up, you agree to Patreon's Terms of Use, Privacy Policy
            and Cookie Policy.
          </p>
        </form>
      </div>
    </div>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 500px;
    border: 1px solid rgb(229, 227, 221);
    border-radius: 4px;
    height: auto;
    padding: 30px 20px;
  }
  .hideDiv {
    display: none;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50px;
    border: 1px solid rgb(195 197 194);
    color: 'white';
    height: 48px;
    padding: 0px 30px;
    text-transform: capitalize;
    margin: 6px 0px;
    width: 100%;
  }
  .btn-filled {
    background: rgb(245, 244, 242);
    color: #333333bd;
    border: 0px;
  }

  img {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .line {
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    vertical-align: middle;
    padding: 0.5rem 0rem 0rem;
    margin: 0rem;
  }
  .liner {
    box-sizing: border-box;
    -webkit-box-flex: 1;
    flex-grow: 1;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem;
    border-bottom: 1px solid rgb(229, 227, 221);
  }
  .linerSec {
    box-sizing: border-box;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem 0.5rem;
    margin: 0rem;
  }
  .linerSec p {
    color: rgb(112, 108, 100);
    font-family: aktiv-grotesk, sans-serif;
    position: relative;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    text-align: center;
    font-weight: 400 !important;
    margin: 0.5rem 0rem !important;
    font-size: 1rem !important;
    line-height: 1.5 !important;
  }

  .cus-form-control {
    text-align: start;
    padding: 10px 0px;
  }
  .cus-form-control label {
    color: #333333bd;
  }
  .cus-form-control .input-field {
    margin: 0.5rem 0px;
    background: rgb(245, 244, 242);
  }
`
export default Register
