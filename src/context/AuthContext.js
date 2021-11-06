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

  return (
    <AuthContext.Provider value={{ ...state, loginbyAccount, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider }
