import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import reducer from '../reducers/authReducers'

const BaseUrl = ' http://localhost:8000/api/v1'

const AuthContext = React.createContext()

const initialStates = {
  isAuthenticated: false,
  token: JSON.parse(localStorage.getItem('token')) || '',
  loading: false,
  erors: false,
  user: JSON.parse(localStorage.getItem('user')) || {},
}

const adminToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2MzQ1NDQzMTAsIm5iZiI6MTYzNDU0NDMxMCwianRpIjoicmdpMjFiYXF6eVJZZHlQdCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.BDK4k4MmNb6fy_S3AabTughzzkvldQrAudt60XH88sA'

const AuthProvider = ({ children }) => {
  const history = useHistory()
  const [state, dispatch] = useReducer(reducer, initialStates)

  useEffect(() => {
    dispatch({ type: 'IS_AUTHENTICATED' })
  }, [])

  const loginbyAccount = async (formdata) => {
    //console.log(formdata)
    try {
      const response = await axios({
        method: 'post',
        url: `${BaseUrl}/auth/login`,
        data: formdata,
      })
      const data = response.data.data
      if (data.status === 'Active') {
        localStorage.setItem('token', JSON.stringify(data.access_token))
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: 'LOGIN_SUCCESS', payload: data })
        history.push('/Edit')
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log('there is no error!')
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch({ type: 'LOGOUT_ACTION' })
    history.push('/')
    // window.location.reload()
  }

  const loginByPovider = async (data) => {
    const formData = data

    try {
      const response = await axios({
        method: 'post',
        url: `${BaseUrl}/auth/google`,
        data: formData,
      })
      const data = response.data.data
      //console.log(data)
      if (data.status === 'Active') {
        localStorage.setItem('token', JSON.stringify(data.access_token))
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: 'LOGIN_SUCCESS', payload: data })
        history.push('/Edit')
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log('there is  error!')
    }
  }

  //for register by account

  const registerByaccount = async (formdata) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BaseUrl}/auth/register`,
        data: formdata,
        headers: { Authorization: `Bearer ${adminToken}` },
      })
      const data = response.data.data
      if (data.status === 'Active') {
        localStorage.setItem('token', JSON.stringify(data.access_token))
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: 'LOGIN_SUCCESS', payload: data })
        history.push('/Edit')
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log('there is no error!')
    }
  }

  const registerByPhone = async (formdata) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BaseUrl}/auth/phone/register`,
        data: formdata,
      })
      const data = response.data.data
      if (data.status === 'Active') {
        localStorage.setItem('token', JSON.stringify(data.access_token))
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: 'LOGIN_SUCCESS', payload: data })
        history.push('/Edit')
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log('there is no error!')
    }
  }

  const loginbyPhone = async (formdata) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BaseUrl}/auth/phone/login`,
        data: formdata,
      })
      const data = response.data.data
      if (data.status === 'Active') {
        localStorage.setItem('token', JSON.stringify(data.access_token))
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: 'LOGIN_SUCCESS', payload: data })
        history.push('/Edit')
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log('there is no error!')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginbyAccount,
        loginByPovider,
        logout,
        registerByaccount,
        registerByPhone,
        loginbyPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider }
