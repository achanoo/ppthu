import React from 'react'
import { NavBar } from './components'

import {
  Home,
  Footer,
  Login,
  Register,
  Edit,
  PhoneSignUp,
  UserHome,
  CreatorHome,
  PostCreate,
} from './pages/'
import PrivateRoute from './routes/PrivateRoute'
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

        <Route exact={true} path='/register' component={Register} />
        <Route path='/register/phone' component={PhoneSignUp} />
        <Route path='/edit' component={Edit} />

        <PrivateRoute exact={true} path='/home'>
          <UserHome></UserHome>
        </PrivateRoute>

        <PrivateRoute exact={true} path='/creator-home'>
          <CreatorHome></CreatorHome>
        </PrivateRoute>

        <PrivateRoute exact={true} path='/create-post'>
          <PostCreate></PostCreate>
        </PrivateRoute>

        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
