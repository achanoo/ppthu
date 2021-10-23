import * as React from 'react'
import PropTypes from 'prop-types'
import { styled, alpha } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { CustomButton } from './../layout/CutomerButton'
import imgurl from './../../assets/subscriptions.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiBox-root': {
      padding: 0,
      paddingTop: theme.spacing(1),
    },
  },
  creatorMenu: {
    padding: '2px',
    border: '1px solid rgb(229, 227, 221)',
    marginBottom: theme.spacing(1),
    color: 'rgb(229, 227, 221)',
    backgroundImage: `linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc)`,
    backgroundPosition: `
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 9em`,
    backgroundSize: `
    5px 5px,
    5px 5px,
    1px 1.5em`,
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  creatorMenuTab: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  allposts: {
    backgroundImage: `url(${imgurl})`,
    backgroundPosition: 'center 120px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    minHeight: '500px',
    border: '1px solid rgb(229, 227, 221)',
    borderRadius: '4px',
    textAlign: 'center',
    padding: '0px !important',
    [theme.breakpoints.down('sm')]: {
      minHeight: '300px',
    },
  },
}))

export default function BasicTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          aria-label='basic tabs example'
        >
          <Tab label='All posts' {...a11yProps(0)} />
          <Tab label='Pantpoe only posts' {...a11yProps(1)} />
          <Tab
            className={classes.creatorMenu}
            onClick={handleClick}
            label='Show all creators '
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={classes.root}>
        <div className={`${classes.allposts}`}>
          <p>
            <strong> Support</strong> or <strong> Follow</strong> creators to
            see posts in your feed
          </p>
          <CustomButton>Find your creator</CustomButton>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.root}>
        <div className={`${classes.allposts}`}>
          <p>
            <strong> Support</strong> or <strong> Follow</strong> creators to
            see posts in your feed
          </p>
          <CustomButton>Find your creator</CustomButton>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.creatorMenuTab}>
        Item Three
      </TabPanel>

      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Duplicate
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          More
        </MenuItem>
      </StyledMenu>
    </Box>
  )
}
