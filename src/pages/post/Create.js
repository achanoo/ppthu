import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Loading from './../../components/Loading'
import MultipleSelectCheckmarks from './../../components/CheckboxSelect'
import SelectSubscriptions from './../../components/Subscript'
import { Grid, Box, Typography, TextField, Divider } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { FaTimes } from 'react-icons/fa'

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
import { useSubscriptionContext } from './../../context/SubscriptionContext'
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
  previewDiv: {
    position: 'relative',
  },
  removeicon: {
    position: 'absolute',
    top: '4px',
    display: 'flex',
    right: 4,
    color: '#333',
    fontSize: '1.4rem',
    alignSelf: 'flex-end',
    border: '1px solid #eee',
    padding: 0,
    borderRadius: '50px',
    backgroundColor: 'orange',
    '&:hover': {
      transform: 'scale(1.5)',
      transition: 'ease-in',
      color: 'red',
    },
  },
}))
const PostCreate = () => {
  const { isloading, categories } = useSubscriptionContext()
  const history = useHistory()

  // for checkbox
  // console.log(categories)
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
    removeImage,
    removeVideo,
    removeAudio,
    isPollSelected,
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

  const gotoHome = () => {
    history.push('/home')
  }

  // if (isloading) {
  //   return <Loading />
  // }

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={1}></Grid>
        <Grid item xs={12} sm={12} md={10}>
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
                  {/* {isPollSelected && } */}

                  {isImageSelected && (
                    <div className={classes.previewDiv}>
                      <Gridview images={imageData} />

                      <button
                        className={classes.removeicon}
                        onClick={() => {
                          removeImage()
                        }}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  )}

                  {isVideoSelected && (
                    <div className={classes.previewDiv}>
                      <video
                        src={video}
                        style={{ width: '100%', height: 'auto' }}
                        controls
                      ></video>

                      <button
                        className={classes.removeicon}
                        onClick={() => {
                          removeVideo()
                        }}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  )}

                  {isAudioSelected && (
                    <div className={classes.previewDiv}>
                      <Audio audio={audio} />

                      <button
                        className={classes.removeicon}
                        onClick={() => {
                          removeAudio()
                        }}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  )}
                </Box>
                {/* preview start here */}
                <OptionTabs />
              </Box>
              {/*P post creating end */}
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <CButton fullWidth onClick={gotoHome}>
                Publish Now
              </CButton>
              <Box className={`${classes.optionDiv} FaintBox`}>
                {/* choose categrory */}
                <h4 variant='h6' className={classes.SubTitle}>
                  Categories
                </h4>

                <MultipleSelectCheckmarks categories={categories} />

                <Divider className={classes.divider} />
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
                      checked={true}
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
                <SelectSubscriptions />
                <Divider className={classes.divider} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={1}></Grid>
      </Grid>
    </>
  )
}

export default PostCreate
