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

import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'

import 'react-phone-input-2/lib/style.css'

const Register = () => {
  // console.log(getCountryCallingCode('MM'))

  return (
    <Wrapper>
      <div>
        <h2>Sign Up</h2>
        <div className='container'>
          <Google />

          <FacebookLogin />
          <div className='line'>
            <div className='liner'></div>
            <div className='linerSec'>
              <p>or</p>
            </div>
            <div className='liner'></div>
          </div>

          <form>
            <Box className='cus-form-control'>
              <label htmlFor='name'>Name</label>
              <TextField
                id='name'
                type='text'
                className='input-field'
                fullWidth
              />
            </Box>

            <Box className='cus-form-control'>
              <label htmlFor='email'>Email</label>
              <TextField
                id='email'
                type='email'
                className='input-field'
                fullWidth
              />
            </Box>

            <Box className='cus-form-control'>
              <label htmlFor='password'>Password</label>
              <TextField
                id='password'
                type='password'
                className='input-field'
                fullWidth
              />
            </Box>

            <Box className='cus-form-control'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <TextField
                id='confirmPassword'
                type='password'
                className='input-field'
                fullWidth
              />
            </Box>

            <Button type='submit' className='btn btn-filled'>
              Sign Up
            </Button>
            <p style={{ textAlign: 'center' }}>
              By signing up, you agree to Patreon's Terms of Use, Privacy Policy
              and Cookie Policy.
            </p>
          </form>
        </div>
      </div>
    </Wrapper>
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
