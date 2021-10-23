import React from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { BiEdit, BiCog, BiSpreadsheet } from 'react-icons/bi'
import HomeIcon from '@mui/icons-material/Home'
import SubjectIcon from '@mui/icons-material/Subject'
import PeopleIcon from '@mui/icons-material/People'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ListAltIcon from '@mui/icons-material/ListAlt'
import ButtonGroup from '@mui/material/ButtonGroup'
const useStyles = makeStyles((theme) => ({
  sideMenu: {
    minHeight: '100vh',
    backgroundColor: 'rgb(245, 244, 242)',
    borderRight: '1px solid rgb(229, 227, 221)',
    position: 'fixed',
    minWidth: '240px',
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },

  accType: {
    color: 'rgb(112, 108, 100)',
    fontFamily: 'aktiv-grotesk, sans-serif',
    margin: 0,
    position: 'relative',
    transition: 'all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
    fontWeight: '700 !important',
  },
  iconBtn: {
    backgroundColor: 'rgb(229, 227, 221)',
    width: '2.25rem',
    height: '2.25rem',
  },
  lastListItem: {
    position: 'fixed',
    bottom: 0,
    borderTop: '1px solid rgb(229, 227, 221)',
    minWidth: '240px',
  },

  rightContent: {
    marginLeft: '240px',
    paddingLeft: '160px',
    paddingRight: '160px',
  },
  info: {
    paddingTop: '30px',
  },
}))
const CreatorHome = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item sm={2} className={classes.sideMenu}>
        <Box textAlign='center' style={{ margin: '24px 24px 0px' }}>
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            sx={{ width: 64, height: 64, margin: '8px auto' }}
          />
          <Box>
            <Typography variant='subtitle1' className={`${classes.wrapIcon} `}>
              aye chan oo <ChevronRightIcon />
            </Typography>
            <Typography variant='subtitle2' className={classes.accType}>
              Creator account
            </Typography>
          </Box>
          <Grid
            mt={1}
            mb={1}
            container
            direction='row'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <IconButton
              onClick={() => {
                console.log('heo')
              }}
              size='small'
              sx={{ ml: 2 }}
            >
              <Avatar className={classes.iconBtn}>
                <BiEdit style={{ color: '#2d271b' }} />
              </Avatar>
            </IconButton>
            <IconButton>
              <Avatar className={classes.iconBtn}>
                <BiCog style={{ color: '#2d271b' }} />
              </Avatar>
            </IconButton>
          </Grid>
        </Box>
        <Divider />

        <List style={{ padding: 0 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText primary='Posts' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Pantpoes' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary='Page' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary='Icome' />
            </ListItemButton>
          </ListItem>
        </List>
        <Button className={classes.lastListItem}>Creator Resources</Button>
      </Grid>
      <Grid item sm={10} className={classes.rightContent}>
        <div className={classes.info}>
          <h1>Hi, aye chan oo!</h1>
        </div>
        <Grid container>
          <Grid item sm={8}>
            <Typography variant='body1'>OVERVIEW</Typography>
            <ButtonGroup variant='text' aria-label='text button group'>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item sm={4}>
            helo world
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreatorHome
