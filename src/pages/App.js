import React, { useState } from 'react'
import './App.css'

import imgtwo from './../assets/inmgtwo.png'
import Control from './components/Controls'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Grid'
import { Typography } from '@material-ui/core'
import Controls from './components/Controls'
import SearchInput from './layout/SearchInput'
import { CustomButton } from './layout/CutomerButton'
import CustomCard from './layout/CustomCard'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  blogtitle: {
    fontWeight: 700,
  },
  blogSearch: {
    marginTop: theme.spacing(5),
    padding: '0px 30px',
    display: 'flex',
    alignItems: 'center',
  },
  blogcontent: {
    width: '90%',
    padding: '30px 20px',
    textAlign: 'center',
    fontSize: '1.2em',
    lineHeight: '2.5rem',
  },
  blogsubtitle: {
    color: '#28a5ff',
    fontSize: '2.2rem',
  },
  CategoryColor: {
    color: (props) => (props.isSelected ? '#000' : '#28a5ff'),
    fontWeight: '500',
    fontSize: '1.8rem',
  },
  imgContainer: {
    marginTop: theme.spacing(10),
    backgroundImage: `linear-gradient( rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${imgtwo})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  profileBlog: {
    backgroundImage: `linear-gradient( rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${imgtwo})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: '-16px -2px 55px 2px rgba(0,0,0,0.45)',
  },
}))

const categorylist = [
  'Podcasters',
  'Video Creators',
  'Musicians',
  'Visual Artists',
  'Communities',
  'Witers & Journalists',
  'Gaming Creators',
  'Nonprofits',
  'Tutorials and Education',
  'Creators-of-all-kinds',
]

function App() {
  const classes = useStyles()
  const [isSelected, setSelected] = useState(false)
  return (
    <div className='App'>
      <Control.Nav></Control.Nav>
      <Control.Banner></Control.Banner>

      <Grid container justifyContent='center'>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
          <Container className={classes.blogContainer} align='center'>
            <Typography variant='h4' className={classes.blogtitle}>
              Search 200,000+ creator on PantPoe
            </Typography>
            <Box className={classes.blogSearch}>
              <Box sx={{ flexGrow: 1, marginRight: '20px' }}>
                <SearchInput />
              </Box>
              <Box>
                <CustomButton fontSize='small'>Search</CustomButton>
              </Box>
            </Box>
          </Container>
          <Container className={classes.blogContainer} align='center'>
            <Typography variant='h4' className={classes.blogtitle}>
              What's PantPoe?
            </Typography>
            <Typography variant='body2' className={classes.blogcontent}>
              On PantPoe ,you cna let your fans become active participants in
              the work they love by offering them a monthly membership. You give
              them access to exculsive content, community, and insight inot your
              creative process.In exchange,you get the freedom to do your best
              work, and the stability you need to build an independen creative
              career.
            </Typography>
          </Container>
          {/* Develop a recurring start */}

          <Container className={classes.blogContainer} align='center'>
            <Grid container spacing={3}>
              <Grid item sm={6} order={1}>
                <Typography
                  variant='h5'
                  align='left'
                  className={classes.blogsubtitle}
                >
                  Develop a recurring income stream
                </Typography>
                <Typography
                  variant='body1'
                  align='left'
                  style={{ padding: '20px' }}
                >
                  Stop rolling the dice of ad revenue and per-stream payouts.Get
                  recurring income through monthly payments from your pantpoe.
                </Typography>
              </Grid>
              <Grid item sm={6} order={2}>
                <CustomCard />
              </Grid>
            </Grid>
          </Container>

          <Container className={classes.blogContainer} align='center'>
            <Box container spacing={3}>
              <Box item sm={6} order={2}>
                <Typography
                  variant='h5'
                  align='left'
                  className={classes.blogsubtitle}
                >
                  Take back creative control
                </Typography>
                <Typography
                  variant='body1'
                  align='left'
                  style={{ padding: '20px' }}
                >
                  Stop rolling the dice of ad revenue and per-stream payouts.Get
                  recurring income through monthly payments from your pantpoe
                </Typography>
              </Box>
              <Box item sm={6} order={1}>
                <CustomCard />
              </Box>
            </Box>
          </Container>

          <Container className={classes.blogContainer} align='center'>
            <Box container spacing={3}>
              <Box item sm={6} order={1}>
                <Typography
                  variant='h5'
                  align='left'
                  className={classes.blogsubtitle}
                >
                  Build a direct, meaningful connection with you audience
                </Typography>
                <Typography
                  variant='body1'
                  align='left'
                  style={{ padding: '20px' }}
                >
                  Stop rolling the dice of ad revenue and per-stream payouts.Get
                  recurring income through monthly payments from your pantpoe.
                </Typography>
              </Box>
              <Box item sm={6} order={2}>
                <CustomCard />
              </Box>
            </Box>
          </Container>
          <Container className={classes.blogContainer} align='center'>
            <Typography variant='h4' className={classes.blogtitle}>
              Who uses Pantpoe?
            </Typography>
            <Typography variant='body2' className={classes.blogcontent}>
              On Pantpoe, you can let your fans become active participants in
              the work they love by offering them a monthly membership.You give
            </Typography>
          </Container>

          {/* //Links with photo */}

          <Grid container spacing={12}>
            <Grid item sm={6}>
              <Box
                sx={{ height: '450px' }}
                className={classes.imgContainer}
              ></Box>
            </Grid>
            <Grid item sm={6}>
              <List>
                {categorylist.map((c, index) => {
                  return (
                    <ListItem key={c}>
                      <Typography
                        variant='h5'
                        className={classes.CategoryColor}
                      >
                        {c}
                      </Typography>
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
          </Grid>

          <Container className={classes.blogContainer} align='center'>
            <Typography variant='h4' className={classes.blogtitle}>
              It’s easier than you think .
            </Typography>
            <Typography variant='body2' className={classes.blogcontent}>
              There are many ways to delight you fans and every creator can find
              their own
            </Typography>

            <Box sx={{ height: '450px' }} className={classes.profileBlog}></Box>
          </Container>

          <Container className={classes.blogContainer}>
            <Typography variant='h4' className={classes.blogtitle}>
              Search 200,000+ creator on PantPoe
            </Typography>
          </Container>
        </Grid>
        <Grid item sm={2}></Grid>
      </Grid>
    </div>
  )
}

export default App
