import React from 'react'
import { makeStyles } from '@mui/styles'
import { coverphoto, profilephoto } from './../../assets/data.js'
import {
  Box,
  Avatar,
  Typography,
  Grid,
  IconButton,
  Button,
} from '@mui/material'
import { grid } from '@mui/system'
import { CButton } from './../../layout/CCButton'
import { Repeat } from '@mui/icons-material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare, FaYoutubeSquare, FaWifi } from 'react-icons/fa'
import { AiFillTwitterCircle, AiOutlineWifi } from 'react-icons/ai'
import { BiChat } from 'react-icons/bi'
import { RiHeartsLine } from 'react-icons/ri'

import CircleIcon from '@mui/icons-material/Circle'
import { socialIcons } from './../../assets/data.js'
import heart from './../../assets/heart.png'
const useStyles = makeStyles((theme) => ({
  container: {
    // display: 'grid',
    // gridTemplateColumns: '1fr',
    // placeContent: 'center',
    // padding: '0px 10px',
  },
  coverPhoto: {
    background: `url(${coverphoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '50vh',
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  profilePhoto: {
    position: 'absolute',
    bottom: '0px',
    marginBottom: '-28px',
    width: '8rem',
    height: '8rem',
    border: '3px solid #fff',
  },
  accinfo: {
    marginTop: '4vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h3': {
      marginBottom: 0,
    },
  },
  membershipSec: {
    // display: grid,
    // gridTemplateColumns: 'repeat(3, fr)',
    // boxSizing: 'border-box',
    // gridAutoRows: '20vh',
    padding: '0px 20px',
    marginTop: '20px',
  },
  tierCard: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h1': {
      marginBottom: 0,
    },
    '& span': {
      textTransform: 'uppercase',
      fontWeight: '500',
    },
  },
  blogtitle: {
    fontSize: '2rem',
    fontWeight: '400 !important',
    textAlign: 'center',
    marginBottom: '1rem',
  },

  socialInfo: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px 0px',
    },
  },
  followers: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0px 20px 0px 30px',
    '& h4': {
      marginBottom: 0,
      marginTop: '8px',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      display: 'flex',
      alignSelf: 'center',
    },
    '& span': {
      fontSize: '1rem',
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    [theme.breakpoints.only('xs')]: {
      //padding: '0px 25px',
    },
  },
  btnoptions: {
    display: 'flex',
    gap: '10px',
    [theme.breakpoints.only('xs')]: {
      //padding: '0px 25px',
    },
  },
  popularCommunity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '8vh 35vw 5vh',
    [theme.breakpoints.down('sm')]: {
      padding: '8vh 25vw 5vh',
    },
  },
  flyers: {
    padding: '0px 20px',
  },

  spot: {
    position: 'absolute',
    display: 'block',
    margin: 'auto',
    top: '29vh',
    width: '100%',
    height: 45,
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      top: '33vh',
    },
  },
  BtnContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gridAutoRows: '30vh',
    border: '1px solid rgb(229,227,221)',
    padding: 20,

    '&>:nth-child(1)': {
      borderRight: '1px solid rgb(229,227,221)',
      borderBottom: '1px solid rgb(229,227,221)',
    },
    '&>:nth-child(2)': {
      borderBottom: '1px solid rgb(229,227,221)',
    },
    '&>:nth-child(3)': {
      borderRight: '1px solid rgb(229,227,221)',
    },
    '&>:nth-child(4)': {
      //borderTop: '1px solid rgb(229,227,221)',
    },
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      gridAutoRows: '34vh',
    },
  },
  BtnTools: {
    display: 'grid',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: 'rgb(229,227,221)',
    },
    '& .MuiButton-root': {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'transparent',
    },
  },
  toolIcon: {
    // width: 25,
    //height: 25,
    // backgroundColor: 'rgb(225,240,250)',
    //border: '1px solid rgb(225,240,250)',
    //borderRadius: '9999px',
    //padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      fontSize: '5rem',
      color: '#3498db',
    },
    [theme.breakpoints.down('md')]: {
      '& svg': {
        fontSize: '3rem',
        color: '#3498db',
      },
    },

    // '&:hover': {
    //   cursor: 'pointer',

    //   '& svg': {
    //     color: '#333',
    //     fontSize: '3rem',
    //   },
    // },
  },
  iconText: {
    color: '#333',
    fontSize: '1rem',
    textTransform: 'capitalize',
    paddingTop: theme.spacing(1),
    display: 'flex',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.728rem',
      textAlign: 'center',
    },
  },
}))

const Profile = () => {
  const classes = useStyles()
  const [more, setMore] = React.useState(true)
  const showMore = (e) => {
    e.preventDefault()
    setMore(!more)
  }
  return (
    <Grid className={classes.container}>
      <div className={classes.info}>
        <div className={classes.coverPhoto}>
          <Avatar
            className={classes.profilePhoto}
            src={profilephoto}
            alt='profile'
          />
        </div>
        <Box className={classes.accinfo}>
          <h3>Shirtaloon (Travis deverell)</h3>
          <span>is creating web novels</span>
        </Box>
      </div>

      <Grid container>
        <Grid item xs={12} sm={12} md={1}></Grid>
        <Grid item xs={12} sm={12} md={10}>
          <Box className={classes.socialInfo}>
            <Box className={classes.followers}>
              <h4>5,168</h4>
              <span>pantpoethu</span>
            </Box>
            <Box className={classes.btnoptions}>
              <CButton>Share</CButton>
              <CButton>Follow</CButton>
              <CButton>
                <MoreHorizIcon />
              </CButton>
            </Box>
          </Box>
          <Box className={classes.popularCommunity}>
            {socialIcons.map((icon, index) => {
              return (
                <IconButton key={index}>
                  <Avatar src={icon} alt={`icons${index}`} />
                </IconButton>
              )
            })}
          </Box>

          {/* starting  four card */}

          <Box className={classes.flyers}>
            <Typography variant='h4' className={classes.blogtitle}>
              Become a pantpoethu to
            </Typography>
            {/* starting choices here */}
            <Box className={classes.BtnContainer}>
              <Box className={classes.BtnTools}>
                <Button onClick={() => console.log('hello world')}>
                  <span className={`${classes.toolIcon}`}>
                    <span style={{ fontSize: '3rem', color: '#3498db' }}>
                      345
                    </span>
                  </span>
                  <span className={classes.iconText}>
                    Unlock 345 exclusive posts
                  </span>
                </Button>
              </Box>
              <Box className={classes.BtnTools}>
                <span className={`${classes.toolIcon}`}>
                  <RiHeartsLine />
                </span>
                <span className={classes.iconText}>be a part of community</span>
              </Box>
              <Box className={classes.BtnTools}>
                <span className={`${classes.toolIcon}`}>
                  <FaWifi />
                </span>
                <span className={classes.iconText}>be a part of anywhere</span>
              </Box>
              <Box className={classes.BtnTools}>
                <span className={`${classes.toolIcon}`}>
                  <BiChat />
                </span>
                <span className={classes.iconText}>
                  {' '}
                  Connect via private message
                </span>
              </Box>
              <CircleIcon className={classes.spot} />
            </Box>

            {/* starting choices end */}
          </Box>

          {/* membership section */}
          <Box className={classes.membershipSec}>
            <Typography variant='h4' className={classes.blogtitle}>
              Select a membership level
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <div className={`${classes.tierCard} FaintBox`}>
                  <h4>Iron Rank</h4>
                  <h1>$1</h1>
                  <span>per month</span>
                  <CButton>join</CButton>
                  <ul>
                    <li>
                      Access to chapters one week in advance of the free release
                      schedule
                    </li>
                    <li>PDF chapters, including chapter bundles.</li>
                    <li>Iron rank discord role.</li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={`${classes.tierCard} FaintBox`}>
                  <h4>Iron Rank</h4>
                  <h1>$1</h1>
                  <span>per month</span>
                  <CButton>join</CButton>
                  <ul>
                    <li>
                      Access to chapters one week in advance of the free release
                      schedule
                    </li>
                    <li>PDF chapters, including chapter bundles.</li>
                    <li>Iron rank discord role.</li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={`${classes.tierCard} FaintBox`}>
                  <h4>Iron Rank</h4>
                  <h1>$1</h1>
                  <span>per month</span>
                  <CButton>join</CButton>
                  <ul>
                    <li>
                      Access to chapters one week in advance of the free release
                      schedule
                    </li>
                    <li>PDF chapters, including chapter bundles.</li>
                    <li>Iron rank discord role.</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={1}></Grid>
      </Grid>
    </Grid>
  )
}

export default Profile