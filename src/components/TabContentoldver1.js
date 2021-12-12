/** @format */

import * as React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import styles from "./../assets/post.module.css";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { CustomButton } from "./../layout/CutomerButton";
import imgurl from "../assets/images/subscriptions.png";
import { Avatar, Button, Divider, IconButton,TextareaAutosize } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ImageGrid from "./../components/Gridview";
import { postPhoto } from "./../assets/data";
import PostDetailModel from "./PostDetailView";
import { usePostContext } from "../context/PostContext";
import { getFullUrl } from "./../helpers/Constant";
import { Audio } from "./Audio";
import LinkPreview from "./LinkPreview";
import { useAuthContext } from "../context/AuthContext";
import CommentBox from "./CommentBox";
import { BaseUrl } from "./../helpers/Constant"
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { bgcolor } from "@mui/system";
import moment from 'moment'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBox-root": {
      padding: 0,
      paddingTop: theme.spacing(1),
    },
  },
  creatorMenu: {
    padding: "2px",
    border: "1px solid rgb(229, 227, 221)",
    marginBottom: theme.spacing(1),
    color: "rgb(229, 227, 221)",
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
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  creatorMenuTab: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  allposts: {
    backgroundPosition: "center 120px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    minHeight: "500px",
    border: "1px solid rgb(229, 227, 221)",
    borderRadius: "4px",
    textAlign: "center",
    padding: "0px !important",
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "300px",
    },
  },
  postCard: {
    padding: "20px",
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
    padding: '20px !important',
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
    justifyContent: 'start',
    gap: '16px',
    flexGrow:1
  },
  commentDetail: {
    textAlign: 'start',

    '& h4': {
      marginBottom: '10px',
      marginTop:'0px'
    },
    '& p': {
      fontSize: '0.978rem',
    },
    '& .MuiButtonBase-root': {
      padding:'10px 10px'
    }
  },
  commentSection: {
    padding:'10px',
    textAlign: 'start',
    flexGrow:'1',
    '& h4': {
      marginBottom: '10px',
      marginTop:'0px'
    },
    
  },
  reply: {
    marginLeft: '3.75rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  replyInfo: {
    display: 'flex',
     flexGrow:1,
    justifyContent: 'space-between',
    gap: '10px',
  },
  replyDetail: {
    flexGrow:1,
    textAlign: 'start',
    '& h4': {
      marginBottom: '10px',
    },
  },
  count: {
    display: "flex",
    alignSelf: "flex-end",
    fontSize: "1rem",
    color: "#000",
  },
  hideReply: {
    display:'none'
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const BasicTabs = (props) => {
  // const {posts}=props;
  // console.log(posts);
  const { posts, getPosts, LikeHandle, RemoveLike, CommentCreate, ReplyCreate
    , CommentDelete,ReplyDelete,CommentUpdate,ReplyUpdate,CommentLikeHandle,RemoveCommentLikeHandle } = usePostContext();
  const { user: authUser } = useAuthContext();

  // console.log(posts);
  const history = useHistory();
  const classes = useStyles();
  const [firstView, setFirstView] = React.useState(false);
  const [more, setMore] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [showReply, setShowReply] = React.useState(0);
  const [editComment, setEditComment] = React.useState(0);
   const [comment, setComment] = React.useState('');
  const [reply, setReply] = React.useState('');
  const [editReply, setEditReply] = React.useState({
    commentId: '',
    replyId: '',
    reply:'',
  })

  const [limit, setLimit] = React.useState({
    postid:0,
    comment: 2,
    reply:2
  })

    moment.updateLocale('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s ago",
        s  : 'a few seconds',
        ss : '%d sec',
        m:  "a minute",
        mm: "%d min",
        h:  "an hour",
        hh: "%d hr",
        d:  "a day",
        dd: "%d d",
        w:  "a week",
        ww: "%d w",
        M:  "a month",
        MM: "%d m",
        y:  "a year",
        yy: "%d yr"
    }
});


  const loadMoreComment = (postid) => {
 
    setLimit(prev => ({
      ...prev,
      postid:postid,
      comment: prev.comment + 3
    }))
  }

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showMore = (e) => {
    e.preventDefault();
    setMore(!more);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // for link pop up
  const [popanchorEl, setPopAnchorEl] = React.useState(null);

  const handelPopLinkshare = (event) => {
    // console.log('helo');
    setPopAnchorEl(popanchorEl ? null : event.currentTarget);
  };

  const handlePopClose = () => {
    setPopAnchorEl(null);
  };

  const openLinkShare = Boolean(popanchorEl);
  const id = openLinkShare ? "simple-popper" : undefined;

 

  {/* comment section start */ }
  const inputHandle = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  //   setCommentValue(prev => ({
  //     ...prev,
  //     [name]:value
  //  }))
  }
  const handleArea = (e) => {
    const { name, value } = e.target;
    if (name === 'comment') {
      setComment(value)
    }

    if (name === "reply") {
      setReply(value);
    }

     if (name === "editReply") {
       setEditReply(prev => ({
         ...prev,
         reply: value
      }));
    }
    
  }
  
  const submitCommentLine = (id) => {
    // console.log(id);
     
    let formData = new FormData();
    formData.append('content_id', id);
    formData.append('comment', comment);
    CommentCreate(formData);
    setComment('');
  
  }

  const submitReplyline = (comment_id) => {
    console.log(comment_id);
     let formData = new FormData();
    formData.append('comment_id', comment_id);
    formData.append('comment', reply);
    ReplyCreate(formData);
    setLimit(prev => ({
      ...prev,
      comment: prev.comment + 1
    }))
    setReply('');
    setShowReply(0);
    
  }

  const EditComment = (comment_id,comment) => {
    console.log(comment_id, comment);
    setEditComment(comment_id);
    setComment(comment);
  }

  const cancelUpdateComment=()=>{
    setEditComment('');
  }

  const updateComment = (postid,comment_id) => {
    let formData = new FormData();
    formData.append('content_id', postid);
    formData.append('comment', comment);
    formData.append('_method', 'PUT');
    CommentUpdate(formData,comment_id);
    setComment('');
    setEditComment('');
  }

  const editReplyHandle = (comment_id,reply_id,reply) => {
    
    setEditReply(prev => ({
      commentId: comment_id,
      replyId: reply_id,
      reply:reply
    }))
  }

  const cancelUpdateReply = () => {
    setReply('');
    setEditReply({
      commentId: '',
      replyId:''
    })
    
  }
  const updateReply = (comment_id,reply_id) => {
    let formData = new FormData();
    formData.append('comment_id', comment_id);
    formData.append('comment', editReply.reply);
    formData.append('_method', 'PUT');
    ReplyUpdate(formData,reply_id);
    setEditReply({
      commentId: '',
      replyId: '',
      reply:''
    })
  }

  
  {/*  reply process */ }
  

  const gotoDetail = (postid) => history.push(`/post-detail/${postid}`);

  React.useEffect(() => {
    getPosts();
    // setLimit({
    //   postid: 0,
    //   comment: 2,
    //   reply: 2
    // });
  }, []);

  if (posts.length < 0) {
    return <h2>Loading</h2>;
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="basic tabs example">
          <Tab label="All posts" {...a11yProps(0)} />
          <Tab label="Pantpoe only posts" {...a11yProps(1)} />
          <Tab
            className={classes.creatorMenu}
            onClick={handleClick}
            label="Show all creators "
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>



      <TabPanel posts={posts} value={value} index={0} className={classes.root}>
        {firstView && (
          <div
            className={`${classes.allposts}`}
            style={{ backgroundImage: `url(${imgurl})` }}>
            <p>
              <strong> Support</strong> or <strong> Follow</strong> creators to
              see posts in your feed
            </p>
            <CustomButton>Find your creator</CustomButton>
          </div>
        )}
       
          {posts.map((post, index) => {
            const { link, audio, video, image, title, content, like_counts, id: postid, likes, comments,created_at } = post;
          
            const { profile_image, user } = post.creator.user_info;
            const { name, id: userId } = user;
            
            // console.log(getFullUrl(audio));
            let newimgs = [];
            
            
            const islike=likes.some(function (el) {
                       
                          return el.user_info.user.id == authUser.id;
            })

            const deleteLike = (postid) => {
              const comment= likes.filter(like => like.user_info.user.id = authUser.id);

              RemoveLike(comment[0].id);
            }
            
            // console.log(image);

            if (image === null && typeof image==='object') {
              newimgs = [];
            } else {
              const images=JSON.parse(image);

              newimgs=images.map(img=>getFullUrl(img));
            }

            // console.log(likes);

            let newcomments = null;

          

            
           
            
            
            

            return (
              // start post here
              <div key={index} className={`${classes.allposts} `}> 
                {/* account info and to like btn */}
                <div className={classes.postCard}>
                  <Box className={classes.accInfo}>
                    <Avatar
                      className={classes.avatar}
                      alt="Remy Sharp"
                      src={getFullUrl(profile_image)}
                    />
                    <h3>{name}</h3>
                  </Box>

                  {/* post info */}
                  <Box className={classes.postInfo}>
                    
                    {/* image */}
                    {newimgs.length >0 && <Box className={classes.uploadFile}>
                      {/* file upload are include */}
                      
                      <ImageGrid images={newimgs} />
                      {/* file upload are include end */}
                    </Box>}

                    {/*  audio */}
                    {audio && <Box className={classes.uploadFile}>
                      {/* file upload are include */}
                       
                       <Audio audio={getFullUrl(audio)} />
                      {/* file upload are include end */}
                    </Box>}

                    {/*  video */}
                    {video && <Box className={classes.uploadFile}>
                      {/* file upload are include */}
                     <video
                        src={getFullUrl(video)}
                        style={{ width: '100%', height: 'auto' }}
                        controls
                      ></video>
                      {/* file upload are include end */}
                    </Box>}

                     {/*  link */}
                    {link !== undefined || <Box className={classes.uploadFile}>
                      {/* file upload are include */}
                      <LinkPreview link={link}/>
                      {/* file upload are include end */}
                    </Box>}

                    

                    
                     <span>{moment(created_at, ["YYYY", moment.ISO_8601]).format("dddd, MMM Do YYYY, ha")}</span>
                    <h2>{title}</h2>
                    <div className={classes.postDetail}>
                      <div
                        className={classes.shade}
                        style={{
                          opacity: more ? "1" : "0",
                        }}></div>
                      <div
                        className={classes.postContent}
                        style={{
                          overflow: more ? "hidden" : "scroll",
                          height: more ? "80px" : "100%",
                          transition: "ease-in",
                        }}>
                        <p>
                          {content}
                        </p>
                      </div>
                    </div>
                    {/* <span className={classes.readmore} onClick={() => setMore(!more)}> */}
                    <span
                      className={classes.readmore}
                      onClick={() => gotoDetail(postid)}>
                      {more ? "continue reading" : "less reading"}
                    </span>
                    <Button
                      variant="contained"
                      style={{
                        display: "block",
                        backgroundColor: "rgb(245,244,242)",
                        boxShadow: "none",
                        color: "#444",
                        marginTop: "24px",
                      }}>
                      announcement
                    </Button>
                  </Box>
                  <Box className={classes.btnOptions}>
                    <Box clssName={classes.tools}>
                      
                       
                      { islike || <IconButton aria-label="Example" onClick={() => LikeHandle(postid)}> 
                        <FavoriteBorderIcon fontSize="large" /></IconButton>}
                      
                      { islike && <IconButton aria-label="Example" onClick={() => deleteLike(postid)}>
                          <FavoriteOutlinedIcon fontSize="large" />
                          </IconButton>}
                      

                      
                    
                      
                      
                      <IconButton
                        aria-label="Example"
                        onClick={handelPopLinkshare}>
                        <IosShareIcon fontSize="large" />
                      </IconButton>
                      <Popover
                        id={id}
                        open={openLinkShare}
                        anchorEl={popanchorEl}
                        onClose={handlePopClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}>
                        <Box
                          sx={{
                            border: "1px solid rgb(229,227,221)",
                            p: 1,
                            bgcolor: "background.paper",
                            borderRadius: "4px",
                          }}>
                          https://localhost:3000/post-detail/1
                        </Box>
                      </Popover>

                      <IconButton aria-label="Example">
                        <MoreHorizIcon fontSize="large" />
                      </IconButton>
                    </Box>
                    <p>{like_counts} Likes</p>
                  </Box>
                </div>
                <Divider />
                {/* comment section start */}
                <div className={classes.commentSection}>
                  <Box className={classes.commentInfo}>
                    <a href='#' onClick={(e) => { e.preventDefault();loadMoreComment(postid)}}>Load more comments</a>
                    <span>2 of { comments.length}</span>
                  </Box>
                  
                  
                  
                  {comments.map((item, i) => {
                    const { user_info, comment: saying, comment_replies: replies, id: comment_id, comment_like_counts, comment_likes } = item;
                    const { profile_image: cProfile } = user_info;
                    const { name:cname } = user_info.user;
                    const iscommentlike=comment_likes.some(function (el) {
                                   return el.user_info.user.id === authUser.id;
                    })

                    const CommentlikeRemoveHandle = (comment_id) => {
                      const commentlike= comment_likes.filter(like => like.comment_id === comment_id && like.user_info.user.id === authUser.id);

                      RemoveCommentLikeHandle(commentlike[0].id);
                    }
                   
                        
                    return  <Box key={i} className={classes.Comments}>
                  
                              <div className={classes.MainComment}>
                                <div className={classes.content}>
                                  <Avatar
                                    alt={cname}
                                    src={getFullUrl(cProfile)}
                                  />
                          {editComment !== comment_id ? 
                                  <Box className={classes.commentDetail}>
                                          <h4>{ name}</h4>
                                          <p>
                                            {saying}
                                          </p>
                                          
                                            {!iscommentlike ?
                                              <IconButton onClick={() => CommentLikeHandle(comment_id)} >
                                                <StyledBadge badgeContent={comment_like_counts} color="secondary">
                                                  <FavoriteBorderIcon fontSize='small' />
                                                </StyledBadge>
                                              </IconButton>
                                              :
                                              <IconButton onClick={() => CommentlikeRemoveHandle(comment_id)} >
                                                <StyledBadge badgeContent={comment_like_counts} color="secondary">
                                                  <FavoriteOutlinedIcon fontSize='small' />
                                                </StyledBadge>
                                              </IconButton>
                                            }
                                            <IconButton aria-label='Example' onClick={()=>setShowReply(comment_id)}>
                                              <ChatBubbleOutlineIcon fontSize='small' />
                                            </IconButton>
                                            <IconButton aria-label='Example'  onClick={()=>EditComment(comment_id,saying)}>
                                              <EditIcon fontSize='small' />
                                            </IconButton>
                                            <IconButton aria-label='Example'  onClick={()=>CommentDelete(comment_id)}>
                                              <DeleteIcon fontSize='small' />
                                            </IconButton>
                                          
                            </Box>
                            :
                            <Box className={classes.commentDetail} style={{width: `-webkit-fill-available`}}>
                                    <h4>{ cname}</h4>
                                    {/*  comment input handleing start  */}
                                    <div style={{marginRight:'8px'}}>
                                      <TextareaAutosize
                                        // onKeyPress={enterCommentLine}
                                        value={comment}
                                        name="comment"
                                        id="comments-input-edit"
                                              
                                        onChange={handleArea}
                                        variant="outlined"
                                      
                                          placeholder="Add a comment..."
                                        aria-label="minimum height"
                                              minRows={4}
                                        style={{ width: '100%' ,resize:'none'}}
                                      />
                                      <Button style={{float:'right',marginTop:'10px'}}
                                         onClick={()=>updateComment(postid,comment_id)}
                                              type="submit"
                                              variant="outlined"
                                              
                                            className="comments-button"
                                
                                        disabled={comment.length > 0 ? false:true}
                                          >
                                        Save
                                      </Button>
                                      <Button style={{float:'left',marginTop:'10px'}} 
                                         onClick={()=>cancelUpdateComment()}
                                            color="secondary"
                                              type="submit"
                                              variant="outlined"
                                        className="comments-button"
                                        
                                        disabled={comment.length > 0 ? false:true}
                                          >
                                        Cancel
                                      </Button>
                                    </div>
                                    {/* comment input handling end */}
                                  </Box>

                              }
                          
                                  {/* comment Edit start  */}
                                  
                                </div>
                                <div className='commentTime'>1mo</div>
                              </div>
                              {/* replay start */}
                              
                      {replies.map((r,index) => {
                        const { user_info, comment: reply, id: rid } = r;
                        const { profile_image: rProfile } = user_info;
                        const { name:reply_user } = user_info.user;
                                return <div key={index} className={classes.reply}>
                                          <div className={classes.replyInfo}>
                                            <Avatar
                                              alt={reply_user}
                                              src={getFullUrl(rProfile)}
                                            />
                                    {(comment_id === editReply.commentId && rid === editReply.replyId) ?
                                      <Box className={`${classes.replyDetail} `} >
                                            <h4>{authUser.name}</h4>
                                            {/*  reply input handleing start  */}
                                            <div style={{ marginRight: '8px' }}>
                                              <TextareaAutosize
                                                // onKeyPress={enterCommentLine}
                                                value={editReply.reply}
                                                name="editReply"
                                                id="comments-input"
                                                              
                                                onChange={handleArea}
                                                variant="outlined"
                                                      
                                                placeholder="reply here..."
                                                aria-label="minimum height"
                                                minRows={2}
                                                style={{ width: '100%', resize: 'none' }}
                                              />
                                              <Button style={{ float: 'left', marginTop: '10px' }}
                                                 onClick={()=>cancelUpdateReply(comment_id)}
                                                type="submit"
                                                variant="outlined"
                                                className="comments-button"
                                                color="secondary"  
                                                disabled={reply.length > 0 ? false : true}
                                              >
                                                Cancel
                                          </Button>
                                          <Button style={{ float: 'right', marginTop: '10px' }}
                                                 onClick={()=>updateReply(comment_id,rid)}
                                                type="submit"
                                                variant="outlined"
                                                className="comments-button"
                                                        
                                                disabled={reply.length > 0 ? false : true}
                                              >
                                                Save
                                              </Button>
                                            </div>
                                            {/* reply input handling end */}
                                           </Box>
                                          
                                          :
                                          <Box className={classes.replyDetail}>
                                            <h4>{reply_user}</h4>
                                            <p>
                                              {reply}
                                            </p>
                                                  
                                            <IconButton aria-label='Example' onClick={() => editReplyHandle(comment_id, rid, reply)}>
                                              <EditIcon fontSize='small' />
                                            </IconButton>
                                        <IconButton aria-label='Example' onClick={() => { ReplyDelete(rid); props.changeData();}} >
                                              <DeleteIcon fontSize='small' />
                                            </IconButton>
                                            {/* <IconButton aria-label='Example'>
                                                    <FavoriteBorderIcon fontSize='small' />{' '}
                                                    <span className={classes.count}>3</span>
                                                  </IconButton>
                                                  <IconButton aria-label='Example'>
                                                    <ChatBubbleOutlineIcon fontSize='small' />
                                                  </IconButton> */}
                                          </Box>
                                      }
                                          </div>
                                          <div>23s</div>
                                        </div>
                              })}
                              

                              {/* comment add here */}
                              <div className={`${comment_id === showReply ? classes.reply: classes.hideReply}`}>
                                <div className={classes.replyInfo}>
                                  <Avatar
                                    alt='helo world'
                                    src='https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                                  />

                                  <Box className={`${classes.replyDetail} `} >
                                    <h4>{ authUser.name}</h4>
                                    {/*  reply input handleing start  */}
                                      <div style={{marginRight:'8px'}}>
                                        <TextareaAutosize
                                          // onKeyPress={enterCommentLine}
                      
                                          name="reply"
                                          id="comments-input"
                                                
                                          onChange={handleArea}
                                          variant="outlined"
                                        
                                            placeholder="reply here..."
                                          aria-label="minimum height"
                                                minRows={2}
                                          style={{ width: '100%' ,resize:'none'}}
                                        />
                                        <Button style={{float:'right',marginTop:'10px'}}
                                          onClick={()=>submitReplyline(comment_id)}
                                                type="submit"
                                                variant="outlined"
                                          className="comments-button"
                                          
                                          disabled={reply.length > 0 ? false:true}
                                            >
                                          Reply
                                        </Button>
                                      </div>
                                      {/* reply input handling end */}
                                  </Box>
                                </div>
                                <div></div>
                              </div>
                              
                      
                      
                    </Box>
                    
                  })}
                  <Box className={classes.Comments}>
                  
                    <div className={classes.MainComment}>
                      <div className={classes.content}>
                        <Avatar
                          alt={authUser.name}
                          src={getFullUrl(authUser.profile_image)}
                        />

                        <Box className={classes.commentDetail} style={{width: `-webkit-fill-available`}}>
                          <h4>{authUser.name}</h4>
                          {/*  comment input handleing start  */}
                          <div style={{ marginRight: '3px' }}>
                            <TextareaAutosize
                              // onKeyPress={enterCommentLine}
          
                              name="comment"
                              id="comments-input"
                                    
                              onChange={handleArea}
                              variant="outlined"
                            
                                placeholder="Add a comment..."
                              aria-label="minimum height"
                                    minRows={3}
                              style={{ width: '100%' ,resize:'none'}}
                            />
                            <Button style={{float:'right',marginTop:'10px'}}
                               onClick={()=>submitCommentLine(postid)}
                                    type="submit"
                                    variant="outlined"
                              className="comments-button"
                              
                               disabled={comment.length > 0 ? false:true}
                                >
                              Post
                            </Button>
                          </div>
                          {/* comment input handling end */}
                          {/* <IconButton aria-label='Example' >
                            <FavoriteBorderIcon fontSize='small' />
                          </IconButton>
                          <IconButton aria-label='Example'>
                            <ChatBubbleOutlineIcon fontSize='small' />
                          </IconButton> */}
                        </Box>
                      </div>
                      <div className='commentTime'>1mo</div>
                    </div>
                    
                  </Box>

                </div>
              </div>

              // start end here
            );
          })}
        
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
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
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
  );
};

export default BasicTabs;
