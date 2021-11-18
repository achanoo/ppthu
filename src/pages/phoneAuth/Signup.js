import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
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
import { useAuthContext } from '../../context/AuthContext'

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
}))

function gettingCode(phonenumber) {
  return '902336'
}

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

const CodeVerify = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { phone, smscode, nextToPasswordCreate } = props

  const [code, setSMScode] = useState(smscode)
  const [phonenum, setPhonenum] = useState(phone)
  console.log(code)
  const [errors, setErrors] = useState({ helperText: '', error: false })
  const [verifyCode, setVerifyCode] = useState('')
  const [openVerification, setOpenVerification] = React.useState(false)

  const handlVerifyCode = (e) => {
    setVerifyCode(e.target.value)
  }

  const handleSubmit = () => {
    if (verifyCode === code) {
      // console.log('verify is correct')
      nextToPasswordCreate(true)
    }
    //setOpenVerification(true)
  }

  const handleCloseVerification = () => setOpenVerification(false)
  const handleCancelVerification = () => setOpenVerification(false)
  const handleVerification = () => {
    console.log('heelo world')
    //
  }

  const ResendingCode = (e) => {
    e.preventDefault()
    setOpenVerification(true)
  }
  const Resending = () => {
    setSMScode(gettingCode(phone))
    setOpenVerification(false)
  }
  const ChangeLogin = () => {
    history.push('/login')
  }
  return (
    <>
      <div className={classes.wrapper}>
        <h2>Sing Up</h2>
        <div className={`${classes.container} FaintBox `}>
          <FormControl variant='standard' error={errors.error} fullWidth>
            <label htmlFor='verifyCode' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Enter to Verify {phone ? phone : ' +95 9 00000000'}
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
              onClick={ResendingCode}
              style={{
                dispaly: 'inline-flex',
                alignSelf: 'flex-end',
                textDecoration: 'underline',
                color: '#0582dd',
              }}
            >
              Didn't receive a text?
            </a>
            <CButton onClick={handleSubmit}>Continue</CButton>
          </FormControl>
        </div>
      </div>

      {/* dialog for code verification start */}
      <Dialog open={openVerification} onClose={handleCloseVerification}>
        <DialogTitle>Didn't receive a text?</DialogTitle>
        <DialogContent>
          <div>
            <CButton fullWidth onClick={Resending}>
              Resend SMS
            </CButton>
            <CButton
              bgcolor='#eeeeee'
              textcolor='#0f0f0f'
              fullWidth
              onClick={ChangeLogin}
            >
              Use email instead
            </CButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

const CreatePassword = (props) => {
  const classes = useStyles()
  const { registerByPhone } = useAuthContext()
  const [state, setState] = React.useState({
    phone: props.phone,
    password: '',
    confirmPassword: '',
    isError: {
      password: '',
      confirmPassword: '',
    },
  })

  const formValueChange = (e) => {
    const { name, value } = e.target
    // console.log(name)
    const { isError, password, confirmPassword } = state

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

  const RegisterByPhone = () => {
    const formData = {
      phone_no: state.phone,
      password: state.password,
      role_id: '3',
    }
    registerByPhone(formData)
  }
  return (
    <>
      <div className={classes.wrapper}>
        <h2>Sing Up</h2>
        <div className={`${classes.container} FaintBox `}>
          <Typography className='textCenter' variant='subtitle2'>
            Create Your Own Password
          </Typography>

          <FormControl
            variant='standard'
            error={state.isError.password.length > 0 ? true : false}
            fullWidth
          >
            <label htmlFor='PhoneNumber' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Password
              </Typography>
            </label>
            <OutlinedInput
              id='standard-adornment-amount'
              value={state.password}
              onChange={formValueChange}
              aria-describedby='component-error-text'
              inputProps={{
                maxLength: 10,
                minLength: 7,
                type: 'password',
                name: 'password',
              }}
            />
            <FormHelperText id='component-error-text'>
              {state.isError.password.length > 0 ? state.isError.password : ''}
            </FormHelperText>
          </FormControl>

          <FormControl
            variant='standard'
            error={state.isError.confirmPassword.length > 0 ? true : false}
            fullWidth
          >
            <label htmlFor='confirmPassword' style={{ textAlign: 'start' }}>
              <Typography variant='subtitle2' gutterBottom>
                Confirm Password
              </Typography>
            </label>

            <OutlinedInput
              id='confirmPassword'
              value={state.confirmPassword}
              onChange={formValueChange}
              aria-describedby='component-error-text'
              inputProps={{
                maxLength: 10,
                minLength: 7,
                type: 'password',
                name: 'confirmPassword',
              }}
            />
            <FormHelperText id='component-error-text'>
              {state.isError.confirmPassword.length > 0
                ? state.isError.confirmPassword
                : ''}
            </FormHelperText>
            <CButton onClick={RegisterByPhone}>Sign Up</CButton>
          </FormControl>
          <Box
            style={{ margin: '20px auto', textAlign: 'center', width: '60%' }}
          >
            By Signing Up,you agree to PanPoe's <a href='/'>Terms of Use</a>,
            <a href='/'>Pravicy Policy</a> and
            <a href='/'>Cookie Policy</a>.
          </Box>
        </div>
      </div>
    </>
  )
}
const Signup = () => {
  const classes = useStyles()
  const [errors, setErrors] = useState({ helperText: '', error: false })
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')

  const [state, setState] = useState({
    codeMessage: false,
    verifyDialog: false,
    passwordDialog: false,
  })

  //message
  // const [dialogopen, setDialogOpen] = React.useState(false)

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

    setState({
      ...state,
      codeMessage: true,
    })
    return setErrors({
      ...errors,
      helperText: '',
      error: false,
    })
  }

  const handleDialogClose = () => {
    console.log(phone)
    setState({
      ...state,
      codeMessage: false,
    })
  }

  const NextToVerification = () => {
    setState({
      ...state,
      codeMessage: false,
      verifyDialog: true,
    })
  }

  const nextToPasswordCreate = (data) => {
    if (data) {
      setState({
        ...state,
        verifyDialog: false,
        passwordDialog: true,
      })
    }
  }

  if (state.verifyDialog) {
    return (
      <CodeVerify
        phone={phone}
        smscode={code}
        nextToPasswordCreate={nextToPasswordCreate}
      />
    )
  }

  if (state.passwordDialog) {
    return <CreatePassword phone={phone} />
  }

  return (
    <>
      {/* <CreatePassword /> */}

      <div className={classes.wrapper}>
        <h2>Sing Up</h2>
        <div className={`${classes.container} FaintBox `}>
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
      </div>

      {/* dialog start */}
      <Dialog
        open={state.codeMessage}
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
          <Button onClick={NextToVerification} autoFocus>
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
