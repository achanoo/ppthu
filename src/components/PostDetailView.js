import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import styles from './../assets/post.module.css'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { CustomButton } from './../layout/CutomerButton'
import imgurl from '../assets/images/subscriptions.png'
import { Avatar, Button, Divider, IconButton } from '@mui/material'
import IosShareIcon from '@mui/icons-material/IosShare'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ImageGrid from './../components/Gridview'
import { postPhoto } from './../assets/data'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiBox-root': {
      padding: 0,
      paddingTop: theme.spacing(1),
    },
  },
  allposts: {
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
  postCard: {
    padding: '20px',
  },
  accInfo: {
    display: 'flex',
    justifyContent: 'start',
    '& .MuiAvatar-root': {
      width: '50px',
      height: '50px',
    },
    '& h3': {
      fontWeight: '800',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '16px',
      fontSize: '1.2rem',
    },
  },
  postInfo: {
    textAlign: 'start',
    marginTop: '20px',
  },
  uploadFile: {
    margin: '8px 0px',
    padding: 0,
  },
  btnOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#706c64',
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },

    '& p': {
      display: 'flex',
      alignSelf: 'center',
    },
  },
  postDetail: {
    position: 'relative',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  shade: {
    position: 'absolute',
    bottom: 0,
    height: '5rem',
    width: '100%',
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',
  },
  postContent: {
    height: '80px',
    overflow: 'hidden',
  },
  // comment start
  commentSection: {
    padding: '20px',
  },
  commentInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      color: '#333',
    },
  },
  MainComment: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '3px',
    marginBottom: '1.3rem',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
  },
  commentDetail: {
    textAlign: 'start',

    '& h4': {
      marginBottom: '10px',
    },
    '& p': {
      fontSize: '0.978rem',
    },
  },
  reply: {
    marginLeft: '3.75rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  replyInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  replyDetail: {
    textAlign: 'start',
    '& h4': {
      marginBottom: '10px',
    },
    '& p': {
      fontSize: '0.978rem',
    },
  },
  count: {
    display: 'flex',
    alignSelf: 'flex-end',
    fontSize: '1rem',
    color: '#000',
  },
}))
const PostDetailModel = () => {
  const classes = useStyles()
  const [more, setMore] = React.useState(true)
  const showMore = (e) => {
    e.preventDefault()
    setMore(!more)
  }
  return (
    <Box index={0} className={classes.root}>
      {/*  posts starting from  one post start*/}
      <div className={`${classes.allposts} `}>
        {/* account info and to like btn */}
        <div className={classes.postCard}>
          <Box className={classes.accInfo}>
            <Avatar
              className={classes.avatar}
              alt='Remy Sharp'
              src='https://upload.wikimedia.org/wikipedia/commons/4/43/Globe_Amaranth_Flower_Gomphrena_Globosa_%E5%8D%83%E6%97%A5%E7%B4%85_%E3%82%BB%E3%83%B3%E3%83%8B%E3%83%81%E3%82%B3%E3%82%A6_%28223201679%29.jpeg'
            />
            <h3>Shirtaloon(Travis Deve)</h3>
          </Box>

          {/* post info */}
          <Box className={classes.postInfo}>
            <Box className={classes.uploadFile}>
              {/* file upload are include */}
              <ImageGrid images={postPhoto} />
              {/* file upload are include end */}
            </Box>
            <span>Oct 23,2020 at 5:34 AM</span>
            <h2>Buring Out</h2>
            <div className={classes.postDetail}>
              <div
                className={classes.shade}
                style={{
                  opacity: more ? '1' : '0',
                }}
              ></div>
              <div
                className={classes.postContent}
                style={{
                  overflow: more ? 'hidden' : 'scroll',
                  height: more ? '80px' : '100%',
                  transition: 'ease-in',
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, maiores! Repellendus atque ipsam dolores quidem,
                  voluptates aut unde, fugit, Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Perspiciatis reprehenderit
                  voluptatibus corporis natus harum architecto perferendis odio
                  error eius in! Rem excepturi harum officiis necessitatibus
                  totam vel nobis, quidem dolores. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptate, maiores! Repellendus
                  atque ipsam dolores quidem, voluptates aut unde, fugit, Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis reprehenderit voluptatibus corporis natus harum
                  architecto perferendis odio error eius in! Rem excepturi harum
                  officiis necessitatibus totam vel nobis, quidem dolores. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                  maiores! Repellendus atque ipsam dolores quidem, voluptates
                  aut unde, fugit, Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Perspiciatis reprehenderit voluptatibus
                  corporis natus harum architecto perferendis odio error eius
                  in! Rem excepturi harum officiis necessitatibus totam vel
                  nobis, quidem dolores.
                </p>
              </div>
            </div>
            <span className={classes.readmore} onClick={() => setMore(!more)}>
              {more ? 'continue reading' : 'less reading'}
            </span>
            <Button
              variant='contained'
              style={{
                display: 'block',
                backgroundColor: 'rgb(245,244,242)',
                boxShadow: 'none',
                color: '#444',
                marginTop: '24px',
              }}
            >
              announcement
            </Button>
          </Box>
          <Box className={classes.btnOptions}>
            <Box clssName={classes.tools}>
              <IconButton aria-label='Example'>
                <FavoriteBorderIcon fontSize='large' />
              </IconButton>
              <IconButton aria-label='Example'>
                <IosShareIcon fontSize='large' />
              </IconButton>
              <IconButton aria-label='Example'>
                <MoreHorizIcon fontSize='large' />
              </IconButton>
            </Box>
            <p>106 Likes</p>
          </Box>
        </div>
        <Divider />
        {/* comment section start */}
        <div className={classes.commentSection}>
          <Box className={classes.commentInfo}>
            <a href='#'>Load more comments</a>
            <span>2 of 28</span>
          </Box>
          {/* main comment start */}
          <Box className={classes.Comments}>
            <div className={classes.MainComment}>
              <div className={classes.content}>
                <Avatar
                  alt='helo world'
                  src='https://images.unsplash.com/photo-1600037402813-d7f103d0cd05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80'
                />

                <Box className={classes.commentDetail}>
                  <h4>Tyler Schibig</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus dolorum, natus inventore consectetur dicta amet.
                  </p>
                  <IconButton aria-label='Example'>
                    <FavoriteBorderIcon fontSize='small' />
                  </IconButton>
                  <IconButton aria-label='Example'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                  </IconButton>
                </Box>
              </div>
              <div className='commentTime'>1mo</div>
            </div>
            {/* replay start */}
            <div className={classes.reply}>
              <div className={classes.replyInfo}>
                <Avatar
                  alt='helo world'
                  src='https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                />

                <Box className={classes.replyDetail}>
                  <h4>Tyler Schibig</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus dolorum, natus inventore consectetur dicta amet.
                  </p>
                  <IconButton aria-label='Example'>
                    <FavoriteBorderIcon fontSize='small' />{' '}
                    <span className={classes.count}>3</span>
                  </IconButton>
                  <IconButton aria-label='Example'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                  </IconButton>
                </Box>
              </div>
              <div>23s</div>
            </div>

            <div className={classes.reply}>
              <div className={classes.replyInfo}>
                <Avatar
                  alt='helo world'
                  src='https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                />

                <Box className={classes.replyDetail}>
                  <h4>Tyler Schibig</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus dolorum, natus inventore consectetur dicta amet.
                  </p>
                  <IconButton aria-label='Example'>
                    <FavoriteBorderIcon fontSize='small' />{' '}
                    <span className={classes.count}>3</span>
                  </IconButton>
                  <IconButton aria-label='Example'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                  </IconButton>
                </Box>
              </div>
              <div>23s</div>
            </div>
          </Box>
          <Box className={classes.Comments}>
            <div className={classes.MainComment}>
              <div className={classes.content}>
                <Avatar
                  alt='helo world'
                  src='https://5.imimg.com/data5/AB/RM/HJ/SELLER-96982249/button-rose-500x500.jpg'
                />

                <Box className={classes.commentDetail}>
                  <h4>Tyler Schibig</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus dolorum, natus inventore consectetur dicta amet.
                  </p>
                  <IconButton aria-label='Example'>
                    <FavoriteBorderIcon fontSize='small' />
                  </IconButton>
                  <IconButton aria-label='Example'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                  </IconButton>
                </Box>
              </div>
              <div className='commentTime'>1mo</div>
            </div>
            {/* replay start */}
            {/* <div className={classes.reply}>
                <div className={classes.replyInfo}>
                  <Avatar
                    alt='helo world'
                    src='https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                  />

                  <Box className={classes.replyDetail}>
                    <h4>Tyler Schibig</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus dolorum, natus inventore consectetur dicta amet.
                    </p>
                    <IconButton aria-label='Example'>
                      <FavoriteBorderIcon fontSize='small' />{' '}
                      <span className={classes.count}>3</span>
                    </IconButton>
                    <IconButton aria-label='Example'>
                      <ChatBubbleOutlineIcon fontSize='small' />
                    </IconButton>
                  </Box>
                </div>
                <div>23s</div>
              </div>

              <div className={classes.reply}>
                <div className={classes.replyInfo}>
                  <Avatar
                    alt='helo world'
                    src='https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                  />

                  <Box className={classes.replyDetail}>
                    <h4>Tyler Schibig</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus dolorum, natus inventore consectetur dicta amet.
                    </p>
                    <IconButton aria-label='Example'>
                      <FavoriteBorderIcon fontSize='small' />{' '}
                      <span className={classes.count}>3</span>
                    </IconButton>
                    <IconButton aria-label='Example'>
                      <ChatBubbleOutlineIcon fontSize='small' />
                    </IconButton>
                  </Box>
                </div>
                <div>23s</div>
              </div> */}
          </Box>
        </div>
      </div>
      {/*  posts ending here */}
    </Box>
  )
}

export default PostDetailModel
