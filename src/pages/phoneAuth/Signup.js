import React, { useState } from 'react'
import styled from 'styled-components'
//form input
import FormControl, { useFormControl } from '@mui/material/FormControl'
import {
  OutlinedInput,
  FormHelperText,
  Box,
  Typography,
  InputAdornment,
  TextField,
} from '@mui/material'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
// dialog start
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
//custom Button import
import { CButton } from './../../layout/CCButton'
function MyFormHelperText() {
  const { focused } = useFormControl() || {}

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused'
    }

    return 'Helper text'
  }, [focused])

  return <FormHelperText>{helperText}</FormHelperText>
}

const CodeVerify = () => {
  const [errors, setErrors] = useState({ helperText: '', error: false })
  const [verifyCode, setVerifyCode] = useState('')
  const [openVerification, setOpenVerification] = React.useState(false)

  const handlVerifyCode = (e) => {
    setVerifyCode(e.target.value)
  }

  const handleSubmit = () => {
    alert('helo world')
    setOpenVerification(true)
  }

  const handleCloseVerification = () => setOpenVerification(false)
  const handleCancelVerification = () => setOpenVerification(false)
  const handleVerification = () => {
    console.log('heelo world')
  }
  return (
    <>
      <Wrapper>
        <h4>Sign Up</h4>
        <div className='container'>
          <FormControl variant='standard' error={errors.error} fullWidth>
            <label htmlFor='verifyCode' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Enter to Verify +95 9 00000000
              </Typography>
            </label>
            <OutlinedInput
              id='verifyCode'
              value={verifyCode}
              onChange={handlVerifyCode}
              aria-describedby='component-error-text'
              inputProps={{ maxLength: 6, minLength: 6, type: 'number' }}
            />
            <FormHelperText id='component-error-text'>
              {errors.helperText}
            </FormHelperText>
            <a
              href='/'
              style={{ dispaly: 'inline-flex', alignSelf: 'flex-end' }}
            >
              Didn't receive a text?
            </a>
            <CButton onClick={handleSubmit}>Continue</CButton>
          </FormControl>
        </div>
      </Wrapper>

      {/* dialog for code verification start */}
      <Dialog open={openVerification} onClose={handleCloseVerification}>
        <DialogTitle>Didn't receive a text?</DialogTitle>
        <DialogContent>
          <div>
            <CButton fullWidth>Resend SMS</CButton>
            <CButton bgcolor='#eeeeee' textcolor='#0f0f0f' fullWidth>
              Use email instead
            </CButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

const CreatePassword = () => {
  const [errors, setError] = useState({
    error: false,
    helperText: '',
  })
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
    <>
      <Wrapper>
        <h4>Sign Up</h4>
        <div className='container'>
          <Typography className='textCenter' variant='subtitle2'>
            Create Your Own Password
          </Typography>

          <FormControl variant='standard' error={errors.error} fullWidth>
            <label htmlFor='PhoneNumber' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Password
              </Typography>
            </label>
            <OutlinedInput
              id='standard-adornment-amount'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby='component-error-text'
              inputProps={{ maxLength: 10, minLength: 7, type: 'password' }}
            />
            <FormHelperText id='component-error-text'>
              {errors.helperText}
            </FormHelperText>
          </FormControl>

          <FormControl variant='standard' error={errors.error} fullWidth>
            <label htmlFor='confirmPassword' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Confirm Password
              </Typography>
            </label>

            <OutlinedInput
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-describedby='component-error-text'
              inputProps={{ maxLength: 10, minLength: 7, type: 'password' }}
            />
            <FormHelperText id='component-error-text'>
              {errors.helperText}
            </FormHelperText>
            <CButton>Sign Up</CButton>
          </FormControl>
          <Box
            style={{ margin: '20px auto', textAlign: 'center', width: '60%' }}
          >
            By Signing Up,you agree to PanPoe's <a href='/'>Terms of Use</a>,
            <a href='/'>Pravicy Policy</a> and
            <a href='/'>Cookie Policy</a>.
          </Box>
        </div>
      </Wrapper>
    </>
  )
}
const Signup = () => {
  const [errors, setErrors] = useState({ helperText: '', error: false })
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')

  //message
  const [dialogopen, setDialogOpen] = React.useState(false)

  const handlePhoneNumber = (e) => {
    const phone = e.target.value
    setPhone(phone)

    if (phone.length === 0 || phone.length === 7 || phone.length === 9) {
      return setErrors({
        ...errors,
        helperText: '',
        error: false,
      })
    }

    if (phone.length < 7) {
      return setErrors({
        ...errors,
        helperText: 'minimum required is 7! ',
        error: true,
      })
    }

    if (phone.length > 9) {
      return setErrors({
        ...errors,
        helperText: 'maximum required is 9',
        error: true,
      })
    }
  }

  function gettingCode(phonenumber) {
    return '902336'
  }

  const handleClickOpenDialog = () => {
    if (phone === '') {
      return setErrors({
        ...errors,
        helperText: 'required',
        error: true,
      })
    }
    let number = '+959' + phone
    setCode(gettingCode(number))
    console.log(code)

    setDialogOpen(true)
    return setErrors({
      ...errors,
      helperText: '',
      error: false,
    })
  }

  const handleDialogClose = () => {
    console.log(phone)
    setDialogOpen(false)
  }

  const handleDialog = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <CodeVerify />

      <CreatePassword />

      <Wrapper>
        <h4>Sign Up</h4>
        <div className='container'>
          <FormControl variant='standard' error={errors.error} fullWidth>
            <label htmlFor='PhoneNumber' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Phone Number
              </Typography>
            </label>
            <OutlinedInput
              id='standard-adornment-amount'
              value={phone}
              onChange={handlePhoneNumber}
              startAdornment={
                <InputAdornment position='start'>
                  +95
                  <KeyboardArrowRightIcon /> 9
                </InputAdornment>
              }
              aria-describedby='component-error-text'
              inputProps={{ maxLength: 10, minLength: 7, type: 'number' }}
              placeholder='000000000'
            />
            <FormHelperText id='component-error-text'>
              {errors.helperText}
            </FormHelperText>
            <CButton onClick={handleClickOpenDialog}>Continue</CButton>
          </FormControl>
        </div>
      </Wrapper>

      {/* dialog start */}
      <Dialog
        open={dialogopen}
        onClose={handleDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Verify phone</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            We'll text your verification code to +95 9 000000000. Standard SMS
            fee may apply.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Edit</Button>
          <Button onClick={handleDialog} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
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

export default Signup
