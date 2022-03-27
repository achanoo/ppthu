/** @format */

import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import postStyle from "./../style/Postdetail.module.css";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import Badge from "@mui/material/Badge";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Avatar, Button, Divider, IconButton,Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ImageGrid from "./../components/Gridview";
import { usePostContext } from "../context/PostContext";
import { useAuthContext } from "../context/AuthContext";
import { getFullUrl, BaseUrl } from "../helpers/Constant";
import { Audio } from "./Audio";
import LinkPreview from "./LinkPreview";
import moment from "moment";
import { SiOpenaccess } from "react-icons/si";
import { MdOutlinePublic } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import axios from "axios";
import Comment from './Comment';
import CommentBox from './CommentBox';

import PollOption from "./PollOption";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBox-root": {
      padding: 0,
      paddingTop: theme.spacing(1),
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
    padding: "10px 20px",
  },
  accInfo: {
    display: "flex",
    padding: "0px",
    justifyContent: "start",
    alignItems: "center",
    "& .MuiAvatar-root": {
      width: "50px",
      height: "50px",
    },
    "& h3": {
      fontWeight: "800",
      marginLeft: "16px",
      fontSize: "1.2rem",
      marginBottom: "2px",
      marginTop: "0px",
    },

    "& span": {
      display: "flex",
      padding: "0px",
      justifyContent: "start",
      marginLeft: "16px",
      fontSize: "1rem",
      marginBottom: "0px",
    },
  },
  postInfo: {
    textAlign: "start",
    marginTop: "20px",
  },
  uploadFile: {
    margin: "8px 0px",
    padding: 0,
  },
  btnOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#706c64",
    "& .MuiSvgIcon-root": {
      fontSize: "1.5rem",
    },

    "& p": {
      display: "flex",
      alignSelf: "center",
    },
  },
  postDetail: {
    position: "relative",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  shade: {
    position: "absolute",
    bottom: 0,
    height: "5rem",
    width: "100%",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)",
  },
  // postContent: {
  //   height: "20px",
  //   overflow: "scroll",
  // },
  // comment start

  commentInfo: {
    display: "flex",
    marginBottom: theme.spacing(2),
    justifyContent: "space-between",
    "& a": {
      color: "#333",
    },
  },
  MainComment: {
    display: "flex",
    justifyContent: "space-between",
    gap: "3px",
    marginBottom: "1.3rem",
  },
  content: {
    display: "flex",
    justifyContent: "start",
    gap: "16px",
    flexGrow: 1,
  },
  commentDetail: {
    textAlign: "start",

    "& h4": {
      marginBottom: "10px",
      marginTop: "0px",
    },
    "& p": {
      fontSize: "0.978rem",
    },
  },
  commentSection: {
    padding: "20px",
    textAlign: "start",
    flexGrow: "1",
    "& h4": {
      marginBottom: "10px",
      marginTop: "0px",
    },
  },
  reply: {
    marginLeft: "3.75rem",
    display: "flex",
    justifyContent: "space-between",
  },
  replyInfo: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    gap: "10px",
  },
  replyDetail: {
    flexGrow: 1,
    textAlign: "start",
    "& h4": {
      marginBottom: "10px",
    },
  },
  count: {
    display: "flex",
    alignSelf: "flex-end",
    fontSize: "1rem",
    color: "#000",
  },
  hideReply: {
    display: "none",
  },
  slider: {
    width: "60%",
  },
  readmore: {
    overflow: "hidden",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Post = ({ id, post, postPage ,...props}) => {
  const classes = useStyles();
  const {likeHandle,reloading} = props;
  const [more, setMore] = React.useState(true);
  const [likes, setLikes] = React.useState([]);
  const [liked, setLiked] = React.useState(false);
  const { user, token } = useAuthContext();

  const [limit, setLimit] = React.useState({
    comment: 2,
    reply: 2,
  });
  const finalLimit = React.useMemo(() => {
    return limit.comment;
  }, [limit.comment]);

  const [editReply, setEditReply] = React.useState({
    commentId: "",
    replyId: "",
    reply: "",
  });

  const loadmorecomment = (e) => {
    e.preventDefault();
    setLimit((prev) => ({
      ...prev,
      comment: prev.comment + 5,
    }));
  };

  const postLiked = async () => {
   
    if(liked){
       const likeObj = likes.filter((like)=>like.user_info.user.id === user?.id );
      likeHandle({id:likeObj[0]?.id,status:liked});
    }else{
      likeHandle({id:id,status:liked});
    }

    reloading();
    
  }; 

   React.useEffect(() => setLikes(post?.likes), [id,post]);

  React.useEffect(
    () =>
       setLiked(
        likes.findIndex((like) => like.user_info.user.id === user?.id) !== -1
      )
      ,
    [likes]
  ); 

   

  return (
    <div className={classes.allposts}>
      <div className={classes.postCard}>
        <Box className={classes.accInfo}>
          <Avatar
            className={classes.avatar}
            src={post?.creator.user_info.profile_image}
            alt="avatar"
          />
          <Box>
            <span classes={postStyle.creatorName}>
              {post?.creator.user_info.user.name}
            </span>
            <span>
              {moment(post?.created_at).fromNow(true)} .
              {post?.type === 3 && <SiOpenaccess />}
              {post?.type === 2 && <HiUserGroup />}
              {post?.type === 1 && <MdOutlinePublic />}
            </span>
          </Box>
        </Box>

        {/* post info */}
        <Box className={classes.postInfo}>
          {/* image */}

          {/*  audio */}
          {post?.audio && (
            <Box className={classes.uploadFile}>
              {/* file upload are include */}

              <Audio audio={getFullUrl(post?.audio)} />
              {/* file upload are include end */}
            </Box>
          )}

          {/*  video */}
          {post?.video && (
            <Box className={classes.uploadFile}>
              {/* file upload are include */}
              <video
                src={getFullUrl(post?.video)}
                style={{ width: "100%", height: "auto" }}
                controls></video>
              {/* file upload are include end */}
            </Box>
          )}

          {/*  link */}
          

          <span>
            {moment(post?.created_at, ["YYYY", moment.ISO_8601]).format(
              "dddd, MMM Do YYYY, ha"
            )}
          </span>
          <h2>{post?.title}</h2>

          {post?.content && (
            <React.Fragment>
              <div className={classes.postDetail}>
                <div
                  className={classes.shade}
                  style={{
                    opacity: post?.content.length > 250 ? "1" : "0",
                    display: more ? "block" : "none",
                  }}></div>
                <div
                  className={classes.postContent}
                  style={{
                    overflow: more ? "hidden" : "visible",
                    height: more ? "80px" : "100%",
                    transition: "ease-in",
                  }}>
                  <Typography component="div" vairant="title1" >{post?.content}</Typography>
                </div>
              </div>

              {post?.content.length > 250 && (
                <span
                  className={classes.readmore}
                  onClick={() => setMore(!more)}>
                  {" "}
                  {more ? "continue reading" : "less reading"}
                </span>
              )}
            </React.Fragment>
          )}

          {/*  poll */}
          {post?.poll_options.length >= 1 && <PollOption post={post} />}
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

        {/*option bts*/}
        <Box className={classes.btnOptions}>
          <Box className={classes.tools}>
            {liked ? (
              <IconButton aria-label="Example"  onClick={postLiked}>
                <FavoriteOutlinedIcon fontSize="large" sx={{ color: "red" }} />
              </IconButton>
            ) : (
              <IconButton aria-label="Example" onClick={postLiked}>
                <FavoriteBorderIcon fontSize="large" />
              </IconButton>
            )}

            <IconButton
              aria-label="Example"
              onClick={() => console.log("i am share")}>
              <IosShareIcon fontSize="large" />
            </IconButton>

            <IconButton
              aria-label="Example"
              onClick={() => console.log("i am edit")}>
              <EditIcon fontSize="large" />
            </IconButton>

            <IconButton aria-label="Example">
              <MoreHorizIcon fontSize="large" />
            </IconButton>
          </Box>
          <p>{"heo"} Likes</p>
        </Box>
      </div>
      <Divider />
      {/* comment section start */}
      <div className={classes.commentSection}>
        <Box className={classes.commentInfo}>
          <a href="#" onClick={loadmorecomment}>
            Load more comments
          </a>
          <span>
            {post?.comments.length === 0
              ? 0
              : post?.comments.length < limit.comment
              ? post?.comments.length
              : limit.comment}{" "}
            of {post?.comments.length}
          </span>
        </Box>
        
          {post?.comments.map(item => {
            const {id,comment} = item;
            return <Comment key={id} id={id} comment={comment} item={item}/>
          })}
          <CommentBox />
        

      </div>
    </div>
  );
};

export default Post;
