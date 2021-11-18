import React from 'react'
import { NavBar, ImageGrid } from './components'
import {
  Home,
  Footer,
  Login,
  Register,
  Edit,
  PhoneSignUp,
  PhoneLogin,
  UserHome,
  CreatorHome,
  CreatorProfile,
  PostCreate,
  PostDetail,
  StepOne,
  StepTwo,
  EditProfile,
  UserProfile,
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

import { RouterRounded } from '@mui/icons-material'

function App() {
  return (
    <>
      <NavBar />
      {/*<Footer /> */}
      <Switch>
        <Route exact={true} path='/' component={Home} />

        <Route exact={true} path='/login' component={Login} />

        <Route exact={true} path='/register' component={Register} />
        <Route path='/register/phone' component={PhoneSignUp} />
        <Route path='/login/phone' component={PhoneLogin} />

        <Route path='/edit' component={Edit} />

        <Route path='/home'>
          <UserHome />
        </Route>

        <Route path='/user-profile'>
          <UserProfile />
        </Route>

        <Route path='/creator-home'>
          <CreatorHome />
        </Route>

        <Route path='/creator-profile'>
          <CreatorProfile />
        </Route>

        <Route path='/creator-edit'>
          <EditProfile />
        </Route>

        {/* <Route path='/gi'>
          <ImageGrid />
        </Route> */}

        <Route exact={true} path='/post-create' component={PostCreate} />

        <Route path='/post-detail/1'>
          <PostDetail />
        </Route>

        <Route extact={true} path='/step/1'>
          <StepOne />
        </Route>
        <Route path='/step/2'>
          <StepTwo />
        </Route>

        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
