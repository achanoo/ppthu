import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import FormControl, { useFormControl } from '@mui/material/FormControl'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import {
  OutlinedInput,
  FormHelperText,
  Box,
  Typography,
  InputAdornment,
  TextField,
} from '@mui/material'
import { CButton } from './../../layout/CCButton'
import { useAuthContext } from '../../context/AuthContext'

//

const NextToPassword = (props) => {
  const { loginbyPhone } = useAuthContext()
  // console.log(phone)
  const [data, setData] = React.useState({
    phone_no: props.phone,
    password: '',
    role_id: '3',
  })
  const handlePassword = (e) => {
    const { value } = e.target
    setData({ ...data, password: value })
  }

  const LoginByPhone = () => {
    loginbyPhone(data)
  }

  return (
    <Wrapper>
      <h4>Log in</h4>
      <div className='container'>
        <FormControl variant='standard' fullWidth>
          <label htmlFor='Password' style={{ textAlign: 'start' }}>
            <Typography variant='subtitle2' gutterBottom>
              Enter Your Password
            </Typography>
          </label>
          <OutlinedInput
            id='Password'
            onChange={handlePassword}
            aria-describedby='component-error-text'
            inputProps={{ type: 'password' }}
          />
          <FormHelperText id='component-error-text'>
            {/* {errors.helperText} */}
          </FormHelperText>
          <a
            // onClick={ResendingCode}
            style={{
              dispaly: 'inline-flex',
              alignSelf: 'flex-end',
              textDecoration: 'underline',
              color: '#0582dd',
              margin: '12px 0px',
            }}
          >
            forgot password?
          </a>
          <CButton onClick={LoginByPhone}>Continue</CButton>
        </FormControl>
      </div>
    </Wrapper>
  )
}

const LoginPhone = () => {
  const [state, setState] = useState({
    showPassword: false,
    phone: '',
    helperText: '',
    error: false,
  })

  // console.log(state)
  const handlePhoneNumber = (e) => {
    const { name, value } = e.target
    let helperText = ''
    // console.log(helperText)

    if (value.length === 0 || value.length === 7 || value.length === 9) {
      helperText = ''
    }

    if (value.length < 7) {
      helperText = 'Minimun value is 7'
    }

    if (value.length > 9) {
      helperText = 'Maximum value is 9'
    }
    setState({
      ...state,
      error: helperText.length > 0 ? true : false,
      helperText,
      [name]: value,
    })
  }

  if (state.showPassword) {
    return <NextToPassword phone={state.phone} />
  }

  return (
    <>
      <Wrapper>
        <h4>Log in</h4>
        <div className='container'>
          <FormControl variant='standard' error={state.error} fullWidth>
            <label htmlFor='PhoneNumber' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Phone Number
              </Typography>
            </label>
            <OutlinedInput
              id='standard-adornment-amount'
              startAdornment={
                <InputAdornment position='start'>
                  +95
                  <KeyboardArrowRightIcon /> 9
                </InputAdornment>
              }
              value={state.phone}
              name='phone'
              aria-describedby='component-error-text'
              inputProps={{ inputMode: 'text', pattern: '[0-9]{9}' }}
              placeholder='000000000'
              onChange={handlePhoneNumber}
            />
            <FormHelperText id='component-error-text'>
              {state.helperText}
            </FormHelperText>
            <CButton onClick={() => setState({ ...state, showPassword: true })}>
              Continue
            </CButton>
          </FormControl>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  max-height: 100vh;
  margin-top: 10vh;
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
`

export default LoginPhone
