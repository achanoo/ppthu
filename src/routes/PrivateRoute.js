import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useGlobalContext } from './../views/context/context'

const PrivateRoute = ({ children, ...others }) => {
  const { user } = useGlobalContext()
  const isAuthenticated = user && user.access_token

  return (
    <Route
      {...others}
      render={() => {
        return isAuthenticated ? children : <Redirect to='/login' />
      }}
    ></Route>
  )
}
export default PrivateRoute
