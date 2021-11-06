import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthProvider } from './context/AuthContext'

const theme1 = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  background: {
    default: '#fff',
  },
  typography: {
    fontFamily: 'Roboto,sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  // overrides: {
  //   MuiTypography: {
  //     h4: {
  //       fontWeight: 600,
  //     },
  //   },
  // },
})

ReactDOM.render(
  <Router>
    <AuthProvider>
      <ThemeProvider theme={theme1}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
)
