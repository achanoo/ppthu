import React, { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Error from './pages/Error'
import Home from './pages'
import Nav from './components/Nav'

import imgtwo from './../assets/inmgtwo.png'

import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Controls from './components/Controls'
import SearchInput from './layout/SearchInput'
import { CustomButton } from './layout/CutomerButton'
import CustomCard from './layout/CustomCard'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import TopicCard from './layout/TopicCard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import AuthWrapper from './pages/AuthWrapper'
import { useGlobalContext } from './context/context'
import PrivateRoute from '../routes/PrivateRoute'
import UserHome from './pages/user/Home'
import CreatorHome from './pages/creator/home'

function App() {
  const [isSelected, setSelected] = useState(false)

  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/login' component={Login} />

        <PrivateRoute exact={true} path='/home'>
          <UserHome></UserHome>
        </PrivateRoute>

        <PrivateRoute exact={true} path='/creator-home'>
          <CreatorHome></CreatorHome>
        </PrivateRoute>

        <Route path='*' component={Error} />
      </Switch>
    </>
  )
}

export default App
