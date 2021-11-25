import React from 'react'
import GoogleLogin from 'react-google-login'
import GoogleIcon from '@mui/icons-material/Google'
import styles from '../assets/cus.module.css'
import { useAuthContext } from '../context/AuthContext'

export default function Google(props) {
  const { loginByPovider } = useAuthContext()
  const onResponse = (googleResponse) => {
    if (googleResponse) {
      const res = googleResponse.profileObj
    const formData = {
      email: res.email,
      token: res.googleId,
      provider: 'Google',
      name: res.name,
      image: res.imageUrl,
    }
    //console.log(formData)
    loginByPovider(formData)
    } else {
      console.log('none');
    }
    
  }
  return (
    <GoogleLogin
      clientId='37192225670-f4gb7ohcfij72kvu5mfn5qtbque098q8.apps.googleusercontent.com'
      autoLoad={false}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          className={`${styles.mkBtn} ${styles.mkBtnBg}`}
        >
          <GoogleIcon />
          Continue with Google
        </button>
      )}
      onSuccess={onResponse}
      onFailure={onResponse}
      cookiePolicy={'single_host_origin'}
    />
  )
}
