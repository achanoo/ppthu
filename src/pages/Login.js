import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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

const Login = () => {
  const { loginbyAccount } = useAuthContext()

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
    e.preventDefault()
    const formData = {
      email: aemail,
      password: apassword,
    }
    loginbyAccount(formData)
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
    <Wrapper>
      <div>
        <h2>Log in</h2>
        <div className={`container ${showMobile && 'hideDiv'}`}>
          <form onSubmit={handleLogin}>
            <Box className='cus-form-control'>
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

            <Button type='submit' className='btn btn-filled'>
              Log in
            </Button>
          </form>

          <div className='line'>
            <div className='liner'></div>
            <div className='linerSec'>
              <p>or</p>
            </div>
            <div className='liner'></div>
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
        </div>

        <div className={`container ${showMobile || 'hideDiv'}`}>
          <div
            className={`phoneTextField ${!showphonePassword ? '' : 'hideDiv'}`}
          >
            <div style={{ textAlign: 'center' }}>
              <label htmlFor='Phone'>Phone Number</label>
              <Box className='cus-form-control '>
                <PhoneInput
                  id='Phone'
                  disableDropdown='true'
                  containerStyle={{ marginLeft: '25%' }}
                  country={'mm'}
                  name={phone}
                  placeholder='+95 9000000000'
                  onChange={(phone) => setPhone(phone)}
                  component={TextField}
                />
              </Box>
            </div>
            <div>
              <CButton fullWidth onClick={handlePhoneSubmit} type='button'>
                Log in
              </CButton>
            </div>
          </div>

          <div
            className={`phonePasswordTextField ${
              showphonePassword ? '' : 'hideDiv'
            }`}
          >
            <div>
              <label htmlFor='PhonePassword'>Password</label>
              <Box className='cus-form-control '>
                <TextField
                  id='PhonePassword'
                  type='password'
                  name={phonePassword}
                  className='input-field'
                  fullWidth
                  onChange={(e) => setPhonePassword(e.target.value)}
                />
              </Box>
            </div>
            <CButton
              fullWidth
              onClick={handlePhonePasswordSubmit}
              type='button'
            >
              Log in
            </CButton>
          </div>
        </div>

        <p style={{ textAlign: 'center' }}>
          New to PantPoe? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
      {/* modal start */}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              mt={3}
              mb={3}
              variant='h5'
              component='h5'
            >
              SMS Verification Code Sent!
            </Typography>

            <Typography variant='subtitle2' color='primary'>
              Please enter here!
            </Typography>
            <TextField
              id='Code'
              type='number'
              name={confirmCode}
              className='input-field'
              fullWidth
              maxLength='6'
              onChange={handleCodeConfirm}
            />
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              If you don't receive any code from us, sent again!
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* modal end */}
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
