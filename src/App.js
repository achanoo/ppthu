import React from 'react'
import { NavBar } from './components'

import { Home, Footer, Login, Edit } from './pages/'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      {/*<Footer /> */}
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/edit' component={Edit} />
        <Route path='*' component={Error} />
      </Switch>
    </>
  )
}

export default App
