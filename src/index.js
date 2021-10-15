import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import CssBaseline from '@mui/material/CssBaseline'
import { styled, createTheme, ThemeProvider } from '@material-ui/core/styles'
import reportWebVitals from './reportWebVitals'

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

// console.log(theme)

ReactDOM.render(
  <ThemeProvider theme={theme1}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
