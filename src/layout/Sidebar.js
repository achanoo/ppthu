import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import logo from '../assets/images/logo.png'
import badge from '../assets/menu/badge.svg'
import creditCard from '../assets/menu/credit-card.svg'
import onlineLearning from '../assets/menu/online-learning.svg'
import people from '../assets/menu/people.svg'
import user from '../assets/menu/user.svg'
import profit from '../assets/menu/profit.svg'
import gear from '../assets/menu/gear.svg'
import information from '../assets/menu/information.svg'
import { AccountCircleOutlined, PeopleOutline, Settings, HelpOutline, Logout, PriceCheck, Close, Verified, VerifiedOutlined, Payment, Contacts } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { CustomButton } from './CutomerButton'
import SearchInput from './SearchInput'

const useStyles = makeStyles((theme) => ({
  blogSearch: {
    marginTop: theme.spacing(5),
    padding: '0px 10px',
    display: 'flex',
    alignItems: 'center',
  }
}))

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)

  const list = () => (
    <Box role='presentation'>
      <Box className={classes.blogSearch}>
        <Box sx={{ flexGrow: 1, marginRight: '0px' }}>
          <Avatar alt='Remy Sharp' src={logo} sx={{ width: 54, height: 54 }} />
        </Box>
        <Box>
          <Close />
        </Box>
      </Box>
      
      <Box sx={{ flexGrow: 1, margin: '0px 10px' }}>
        <SearchInput />
      </Box>
      {/* <List>
          <ListItem button key="Personal Information">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={user} sx={{ width: 25, height: 25 }}/> 
            </ListItemIcon>
            <ListItemText primary="Personal Information" />
            
            <Avatar alt='Remy Sharp' src={badge} sx={{ width: 20, height: 20 }}  style={{margin: "0px 50px 0px 10px"}}/>           
            <CustomButton fontSize='small'>Verify</CustomButton>
          </ListItem>
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Relationship Manager">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={people} sx={{ width: 25, height: 25 }}/> 
            </ListItemIcon>
            <ListItemText primary="Relationship Manager" />
          </ListItem>
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="My Earnings">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={profit} sx={{ width: 25, height: 25 }}/>
            </ListItemIcon>
            <ListItemText primary="My Earnings" />
          </ListItem>
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Settings">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={gear} sx={{ width: 25, height: 25 }}/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Help & FAQ">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={information} sx={{ width: 25, height: 25 }}/>
            </ListItemIcon>
            <ListItemText primary="Help & FAQ" />
          </ListItem>
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Logout">
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
      </List> */}
      <Divider />
      <List>
          <ListItem button key="Personal Information">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={user} sx={{ width: 25, height: 25 }}/> 
            </ListItemIcon>
            <ListItemText primary="Personal Information" />
            <Avatar alt='Remy Sharp' src={badge} sx={{ width: 20, height: 20 }}  style={{margin: "0px 50px 0px 10px"}}/>   
            
            <CustomButton fontSize='small'>Verify</CustomButton>
          </ListItem>
          
          <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Manage Memberships">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={people} sx={{ width: 25, height: 25 }}/> 
            </ListItemIcon>
            <ListItemText primary="Manage Memberships" />
          </ListItem>
          
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Payment History">
            <ListItemIcon> 
            <Avatar alt='Remy Sharp' src={creditCard} sx={{ width: 25, height: 25 }}/> 
            </ListItemIcon>
            <ListItemText primary="Payment History" />
          </ListItem>
          
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Become a creator">
            <ListItemIcon>
            <Avatar alt='Remy Sharp' src={onlineLearning} sx={{ width: 25, height: 25 }}/> 
            </ListItemIcon>
            <ListItemText primary="Become a creator" />
          </ListItem>
          
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Settings">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={gear} sx={{ width: 25, height: 25 }}/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Help & FAQ">
            <ListItemIcon>
              <Avatar alt='Remy Sharp' src={information} sx={{ width: 25, height: 25 }}/>
            </ListItemIcon>
            <ListItemText primary="Help & FAQ" />
          </ListItem>
          
        <Divider style={{margin: "0px 18px"}} />
          <ListItem button key="Logout">
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
      </List>
    </Box>
  )

  return (
    <React.Fragment>
      <Button style={{ marginLeft: 'auto' }} onClick={() => setToggle(!toggle)}>
        <MenuIcon />
      </Button>
      <Drawer
        style={{width : '400px'}}
        anchor='left'
        open={toggle}
        onClose={() => {
          setToggle(!toggle)
        }}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  )
}
