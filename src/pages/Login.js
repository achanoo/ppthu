import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'

//modal import

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '8px',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 'auto',
  bgcolor: '#fff',
  border: '1px solid rgb(229,227,221)',
  boxShadow: 0,
  pt: 2,
  px: 4,
  pb: 3,
}

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
const Login = () => {
  const classes = useStyles()
  const { loginbyAccount, defaultLogged } = useAuthContext()

  const [showMobile, setShowMobile] = React.useState(false)
  const [showphonePassword, setphonePassword] = React.useState(false)

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const history = useHistory()

  const [aemail, setEmail] = useState('')
  const [apassword, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [phonePassword, setPhonePassword] = useState('')
  const [confirmCode, setConfirmCode] = useState('')

  // const handleGoogle = (data) => {
  //   console.log(data.profileObj)
  //   loginByGoogle(data.profileObj)
  // }
  const handlePhoneDivOpen = () => {
    history.push('/login/phone')
  }

  const handleLogin = (e) => {
    // e.preventDefault()
    // const formData = {
    //   email: aemail,
    //   password: apassword,
    // }
    // loginbyAccount(formData)
    defaultLogged()
  }

  const handlePhoneSubmit = () => {
    console.log(phone)
    setphonePassword(true)
  }

  const handlePhonePasswordSubmit = () => {
    console.log(phone)
    console.log(phonePassword)

    fetch(`http://localhost:8000/api/v1/auth/phone/send-sms/sample/+${phone}`)
      .then((res) => res.json())
      .then((res) => {
        setConfirmCode(res.data.code)
        handleOpen()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleCodeConfirm = (e) => {
    let len = e.target.value.length
    console.log(confirmCode)
    if (len === 6) {
      if (confirmCode === e.target.value) {
        handleClose()
      } else {
        console.log('invalid code entered!')
      }
    }
  }
  return (
    <div className={classes.wrapper}>
      <h2>Log in</h2>
      <div className={`${classes.container} FaintBox `}>
        <form onSubmit={handleLogin}>
          <Box className={classes.cusFormControl}>
            <label htmlFor='email'>Email</label>
            <TextField
              id='email'
              type='email'
              name={aemail}
              className='input-field'
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box className='cus-form-control'>
            <label htmlFor='password'>Password</label>
            <TextField
              id='password'
              type='password'
              className='input-field'
              name={apassword}
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Box>
            <a href='/'>Forget password</a>
          </Box>

          <CButton
            fullWidth
            bgcolor='rgb(195 197 194)'
            type='submit'
            className='btn btn-filled'
          >
            Log in
          </CButton>
        </form>

        <div className={classes.line}>
          <div className={classes.liner}></div>
          <div className={classes.linerSec}>
            <p>or</p>
          </div>
          <div className={classes.liner}></div>
        </div>

        <Google />

        <FacebookLogin />
        <Button
          onClick={handlePhoneDivOpen}
          fullWidth
          className='btn btn-facebook'
        >
          continue with phone number
        </Button>
        <p style={{ textAlign: 'center' }}>
          New to PantPoe? <Link to='/register'>Sign Up</Link>
        </p>
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
    max-width: 600px;
    text-align: center;
    border: 1px solid rgb(229, 227, 221);
    border-radius: 4px;
    height: auto;
    padding: 20px;
  }
  .hideDiv {
    display: none;
  }
  img {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
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

export default Login
