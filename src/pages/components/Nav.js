import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import logo from '../../assets/logo.png'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

import { CustomButton } from '../layout/CutomerButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuButton from '../layout/MenuItem'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import PcNavbar from '../layout/PcNavbar'
import Sidebar from '../layout/Sidebar'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: '100%',
  color: '#000',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: 'autoc',
      },
    },
  },
}))

const CreatePantpoe = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  paddingX: '50px',
  paddingY: '20px',

  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

export default function SearchAppBar() {
  const theme = useTheme()
  const ismatch = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: 0 }}>
      <AppBar position='static' style={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <Avatar alt='Remy Sharp' src={logo} sx={{ width: 54, height: 54 }} />

          {ismatch || <Grid flexGrow='1'></Grid>}

          {ismatch && <PcNavbar />}

          <Search style={{ display: ismatch ? '' : 'none' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Find a creator'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button style={{ color: '#000' }}>Log In</Button>
          <CustomButton size='small' style={{ color: '#fff' }}>
            Create a Pant Poe
          </CustomButton>
          {ismatch || <Sidebar />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
