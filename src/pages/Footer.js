
import React from 'react'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles'
import { Avatar, Grid, Typography } from '@mui/material';
import logo from '../assets/images/logo.png'
import twitter from '../assets/social/twitter.svg'
import facebook from '../assets/social/facebook.svg'
import instagram from '../assets/social/instagram.svg'
import youtube from '../assets/social/youtube.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
  // [theme.breakpoints.down('xl')]: {
  //   footer: {
  //     marginTop: theme.spacing(5),
  //     background: 'black',
  //     color: 'white',
  //     padding: '10px 0px',
  //     alignItems: 'center',
  //   }
  // },
  // [theme.breakpoints.down('lg')]: {
  //   footer: {
  //     marginTop: theme.spacing(5),
  //     background: 'black',
  //     color: 'white',
  //     padding: '10px 0px',
  //     alignItems: 'center',
  //   }
  // },
  [theme.breakpoints.up('md')]: {
    footer: {
      marginTop: theme.spacing(5),
      background: 'black',
      color: 'white',
      padding: '30px 100px',
      alignItems: 'center',
    }
  },
  [theme.breakpoints.down('md')]: {
    footer: {
      marginTop: theme.spacing(5),
      background: 'black',
      color: 'white',
      padding: '20px 50px',
      alignItems: 'center',
    },
    center: {
      textAlign: 'center',
    }
  },
  footerBorder: {
    border: '1px solid white',
    borderRadius: '2px',
    margin: '6px 0px',
    padding: '3px',
    height: '32px'
  },
  subTitle: {
    fontSize: '13px'
  },
  social: {
    width: '25px',
    height: '25px',
    padding: '6px'
  }
}))
const PC = () => {
  const classes = useStyles()
  return (
    <Box>
      <Grid container  xs={12}  sm={12} md={12}>
        <Grid item xs={12} sm={12} md={4} lg={4} justifyContent='center' alignItems='center'>
          <Avatar alt='Remy Sharp' src={logo} sx={{width: 70, height: 70}} className={classes.center}/> 
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} justifyContent='center' alignItems='center'>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} justifyContent='center' alignItems='center'>
        <Typography variant='h5' className={classes.center}>
          We succeed when you succeed
        </Typography>
        </Grid>
      </Grid>
      
      <Grid container  xs={12}  sm={12} md={12}>
        <Grid item xs={12} sm={12} md={5} lg={4} justifyContent='center' alignItems='center'  className={classes.footerBorder}>
          <Typography>
            Language: English (United States)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={2} justifyContent='center' alignItems='center'>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} justifyContent='center' alignItems='center'>
          <Grid container item  xs={12}  sm={12} md={12}>
            <Grid item sm={1} md={1} lg={1} justifyContent='center' alignItems='center'>
            </Grid>
            <Grid item sm={3} md={3} lg={3} justifyContent='center' alignItems='center'>
              <Typography>
                Resource
              </Typography>
            </Grid>
            <Grid item sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
              <Typography>
                Company
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container  xs={12}  sm={12} md={12}>
        <Grid item xs={12} sm={12} md={4} lg={4} justifyContent='center' alignItems='center'  className={classes.footerBorder}>
          <Typography>
            Myanmar (Burma)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} justifyContent='center' alignItems='center'>
        </Grid>
        
      
      <Grid container sx={{ display: { md: 'none', lg: 'none', xl: 'none'}}}  xs={12}  sm={12} md={12}>
        <Grid item  sm={1} md={1} lg={1} justifyContent='center' alignItems='center'>
        </Grid>
        <Grid item sm={3} md={3} lg={3} justifyContent='center' alignItems='center'>
          <Typography>
            Resource
          </Typography>
        </Grid>
        <Grid item sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
          <Typography>
            Company
          </Typography>
        </Grid>
      </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} justifyContent='center' alignItems='center'>
          <Grid container  xs={12}  sm={12} md={12}>
            <Grid item xs={1} sm={1} md={1} lg={1} justifyContent='center' alignItems='center'>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} justifyContent='center' alignItems='center'>
              <Typography className={classes.subTitle}>
                Blog
              </Typography>
              <Typography className={classes.subTitle}>
                Help & FAQ
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
              <Typography className={classes.subTitle}>
                About
              </Typography>
              <Typography className={classes.subTitle}>
                Privacy
              </Typography>
              <Typography className={classes.subTitle}>
                Term & Condition
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container  xs={12}  sm={12} md={12}>
        <Grid item xs={4} sm={4} md={4} lg={4} display='inline-flex'>
          <Avatar alt='Remy Sharp' src={twitter} className={classes.social}/> 
          <Avatar alt='Remy Sharp' src={facebook} className={classes.social}/> 
          <Avatar alt='Remy Sharp' src={instagram} className={classes.social}/> 
          <Avatar alt='Remy Sharp' src={youtube} className={classes.social}/> 
        </Grid>
      </Grid>
    </Box>
  )
}
const Mobile = () => {
  
  const classes = useStyles()
  return (
    <Box>    
      <Grid container  xs={12}  sm={12} md={12}>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent='center' alignItems='center'>
          <Typography className={classes.center}>
            <Avatar alt='Remy Sharp' src={logo} sx={{width: 70, height: 70}}/> 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent='center' alignItems='center'>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent='center' alignItems='center'>
        <Typography variant='h5' className={classes.center}>
          We succeed when you succeed
        </Typography>
        </Grid>
      </Grid>

      <Grid container  xs={12}  sm={12} md={12} sx={{margin: "4px 0px"}}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.center}>
        <Typography variant='h5' display='inline-flex'>
          <Avatar alt='Remy Sharp' src={twitter} className={classes.social}/> 
          <Avatar alt='Remy Sharp' src={facebook} className={classes.social}/> 
          <Avatar alt='Remy Sharp' src={instagram} className={classes.social}/> 
          <Avatar alt='Remy Sharp' src={youtube} className={classes.social}/> 
        </Typography>
        </Grid>
      </Grid>
      
      <Grid container  xs={12}  sm={12} md={12}>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent='center' alignItems='center'  className={classes.footerBorder}>
          <Typography>
            Language: English (United States)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent='center' alignItems='center'>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent='center' alignItems='center'  className={classes.footerBorder}>
          <Typography>
          Myanmar (Burma)
          </Typography>
        </Grid>
      </Grid>
      
      <Grid container  xs={12}  sm={12} md={12} sx={{margin: '14px 0px'}}>
          <Grid item xs={6} sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
            <Typography>
              Resource
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
            <Typography>
              Company
            </Typography>
          </Grid>
        </Grid>

        <Grid container item  xs={12}  sm={12} md={12}>
          <Grid item xs={6} sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
            <Typography className={classes.subTitle}>
              Blog
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
            <Typography className={classes.subTitle}>
              About
            </Typography>
          </Grid>
        </Grid>
        <Grid container item  xs={12}  sm={12} md={12}>
          <Grid item xs={6} sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
            <Typography className={classes.subTitle}>
              Help & FAQ
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} justifyContent='center' alignItems='center'>
            <Typography className={classes.subTitle}>
              Privacy
            </Typography>
            <Typography className={classes.subTitle}>
              Term & Condition
            </Typography>
          </Grid>
        </Grid>
  </Box>
  )
}
const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  const ismatch = useMediaQuery(theme.breakpoints.up('md'))
  return (
    // <span>{`(min-width:600px) matches: ${matches}`}</span>

    <Box spacing={2} className={classes.footer}>
      {ismatch ? (
            <PC />
          ) : (
            <Mobile />
          )}
    </Box>
    );
}
export default Footer
