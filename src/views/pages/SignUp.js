import React from 'react'
import styled from 'styled-components'
import { CustomButton } from './../layout/CutomerButton'
import { TextField, Box } from '@mui/material'

const Login = () => {
  return (
    <Wrapper>
      <div>
        <h2>Sign Up</h2>
        <div className='container'>
          <div className='btn'>Sign up with Google</div>
          <div className='btn'>Sign up with Facebook</div>

          <div className='line'>
            <div className='liner'></div>
            <div className='linerSec'>
              <p>or</p>
            </div>
            <div className='liner'></div>
          </div>

          <form action=''>
            <Box className='form-control'>
              <label htmlFor=''>Name</label>
              <TextField
                id='outlined-basic'
                className='input-field'
                fullWidth
              />
            </Box>

            <Box className='form-control'>
              <label htmlFor=''>Name</label>
              <TextField
                id='outlined-basic'
                className='input-field'
                fullWidth
              />
            </Box>
            <Box className='form-control'>
              <label htmlFor=''>Name</label>
              <TextField
                id='outlined-basic'
                className='input-field'
                fullWidth
              />
            </Box>
            <Box className='form-control'>
              <label htmlFor=''>Name</label>
              <TextField
                id='outlined-basic'
                className='input-field'
                fullWidth
              />
            </Box>
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
    max-width: 600px;
    text-align: center;
    border: 1px solid rgb(229, 227, 221);
    border-radius: 4px;
    min-height: 600px;
    padding: 20px;
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
  .form-control {
    text-align: start;
  }
  .form-control label {
    color: #333333bd;
  }
  .form-control .input-field {
    margin: 0.5rem 0px;
    background: rgb(245, 244, 242);
  }
`
export default Login
