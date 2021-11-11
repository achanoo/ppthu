import React, { useState } from 'react'
import { Grid, Box, Typography, TextField, Divider } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'

import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import CloseIcon from '@mui/icons-material/Close'
import { itemData } from './../../assets/data'
import OptionTabs from './CreatePostTab'
import { usePostContext } from './../../context/PostContext'
import { Audio } from '../../components/Audio'
import Gridview from './../../components/Gridview'
import { CButton } from '../../layout/CCButton'
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10vh',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '8px',
    },
  },
  item: {
    padding: '19px 0px !important',
  },
  PostCreateDiv: {
    width: '100%',
  },
  TitleTab: {
    borderBottom: '1px solid rgb(229,227,221)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '0px 14px 8px 14px',
  },

  title: {
    color: 'rgb(36, 30, 18)',
    fontWeight: '700 !important',
    fontSize: '0.875rem !important',
    textTransform: 'uppercase',
  },
  postTitle: {
    margin: '20px 0',
    appearance: 'none',
    background: 'none',
    width: '100%',
    border: 'none',
    resize: 'none',
    fontWeight: 'bold',
    fontSize: ' 1.625rem !important',
  },
  postDiv: {
    border: 'none',
    width: '100%',
    cursor: 'text',
    height: '100px',
    resize: 'none',
    overflow: 'hidden',
    overflowY: 'auto',
    '&:focus': {
      height: '200px',
      resize: 'none',
      overflow: 'hidden',
      overflowY: 'auto',
    },
  },
  optionDiv: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    display: 'grid',
  },
  SubTitle: {
    fontWeight: '800px',
    textTransform: 'uppercase',
    marginBottom: 0,
  },
  divider: {
    border: '1px solid rbg(201,201,200)',
    margin: '16px 0px',
  },
}))
const PostCreate = () => {
  // for checkbox
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  })

  const handleChangecheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  const { gilad, jason, antoine } = state
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2
  // end

  const {
    isImageSelected,
    imageData,
    isVideoSelected,
    video,
    isAudioSelected,
    audio,
  } = usePostContext()

  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  const handlePost = (data) => {
    //console.log(post)
    setPost(post)
  }

  const CancelPostHandling = () => {
    console.log('posting is cancel and reach home!')
  }

  const ChangefileHandler = (e) => {
    console.log(e.target.files)
    // setFiles(e.target.files[0]);
  }

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={2}></Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container spacing={{ xs: 0, sm: 0, md: 2 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              className={` ${classes.item} FaintBox ${classes.PostCreateDiv}`}
            >
              {/* post creating start */}
              <Box className={classes.TitleTab}>
                <Typography
                  variant='subtitle1'
                  component='div'
                  className={classes.title}
                >
                  Create Post
                </Typography>
                <CloseIcon onClick={CancelPostHandling} />
              </Box>
              {/* Post title */}
              <Box style={{ padding: '8px' }}>
                <input
                  type='text'
                  className={classes.postTitle}
                  name='postTitle'
                  value={title}
                  placeholder='Post title(required)'
                  onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                  className={classes.postDiv}
                  placeholder="what's on your mind"
                  onChange={(e) => handlePost(e.target.value)}
                ></textarea>

                {/* preview start here */}
                <Box>
                  {isImageSelected && <Gridview images={imageData} />}

                  {isVideoSelected && (
                    <video
                      src={video}
                      style={{ width: '100%', height: 'auto' }}
                      controls
                    ></video>
                  )}

                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Audio />
                  </Box>
                  {isAudioSelected && <audio src={audio} controls autoPlay />}
                </Box>
                {/* preview start here */}
                <OptionTabs />
              </Box>
              {/* post creating end */}
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <CButton fullWidth>Publish Now</CButton>
              <Box className={`${classes.optionDiv} FaintBox`}>
                {/* who can see first */}
                <h4 variant='h6' className={classes.SubTitle}>
                  Who can see first?
                </h4>
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label='gender'
                    defaultValue='female'
                    name='radio-buttons-group'
                  >
                    <FormControlLabel
                      value='public'
                      control={<Radio />}
                      label='public'
                    />
                    <FormControlLabel
                      value='pantpoethuonly'
                      control={<Radio />}
                      label='pantpoethu only'
                    />
                    <FormControlLabel
                      value='tierChoices'
                      control={<Radio />}
                      label='Select Tier'
                    />
                  </RadioGroup>
                </FormControl>
                <Divider className={classes.divider} />

                {/* Select tier access*/}
                <h4 variant='h6' className={classes.SubTitle}>
                  Select which tiers have access
                </h4>
                <FormControl
                  sx={{ m: 3 }}
                  component='fieldset'
                  variant='standard'
                >
                  {/* <FormLabel component='legend'>
                    Assign responsibility
                  </FormLabel> */}
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gilad}
                          onChange={handleChangecheck}
                          name='gilad'
                        />
                      }
                      label='Gilad Gray'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={jason}
                          onChange={handleChangecheck}
                          name='jason'
                        />
                      }
                      label='Jason Killian'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={antoine}
                          onChange={handleChangecheck}
                          name='antoine'
                        />
                      }
                      label='Antoine Llorca'
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                <Divider className={classes.divider} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={2}></Grid>
      </Grid>
    </>
  )
}

export default PostCreate
