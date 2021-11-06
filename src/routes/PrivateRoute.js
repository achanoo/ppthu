import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...others }) => {
  //const { user } = useGlobalContext()
  //const isAuthenticated = user && //user.access_token

  return (
    <Route
      {...others}

      // render={() => {
      //   return isAuthenticated ? children : <Redirect to='/login' />
      // }}
    >
      {children}
    </Route>
  )
}
export default PrivateRoute
