/** @format */

import React from "react";
import reducer from "./../reducers/postReducers";

import axios from "axios";
import { useHistory } from "react-router";
import { BaseUrl } from "../helpers/Constant";
import { useAuthContext } from "./AuthContext";

const PostContext = React.createContext();

const initialStates = {
  isImageSelected: false,
  isVideoSelected: false,
  isAudioSelected: false,
  isPollSelected: false,
  imageData: [], //preveiw
  video: "", //preview
  audio: "", //preview
  formImageData: [],
  formVideo: "",
  formAudio: "",
  loading: false,
  posts: [],
  post: {},
};
let cancelToken;
const PostProvider = ({ children }) => {
  const history = useHistory();
  const { isAuthenticated, token } = useAuthContext();
  const [cancelTokenSource, setCancelTokenSource] = React.useState();
  const [state, dispatch] = React.useReducer(reducer, initialStates);
  const handleInputImage = (data) => {
    console.log(data);
    let fileObj = [];
    let fileArray = [];
    let finalArr = [];

    fileObj.push(data);
    for (let i = 0; i < fileObj[0].length; i++) {
      finalArr.push(fileObj[0][i]);
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    // console.log(fileArray)
    // fileArray = fileArray.map((data) => {
    //   return { source: data.blob }
    // })

    dispatch({ type: "IMAGE_SELECTED", payload: fileArray, images: data });
  };

  const handleEditInputImage = (data) => {
    // console.log(data);
    dispatch({ type: "Edit_Post", payload: data });
  };

  const handleInputVideo = (video) => {
    var fileUrl = window.URL.createObjectURL(video[0]);
    dispatch({ type: "VIDEO_SELECTED", payload: fileUrl, video: video });
  };

  const handleInputAudio = (audio) => {
    var fileUrl = window.URL.createObjectURL(audio[0]);
    dispatch({ type: "AUDIO_SELECTED", payload: fileUrl, audio: audio });
  };

  const RemoveData = () => {
    dispatch({ type: "Edit_Post", payload: initialStates });
  };

  const removeImage = () => dispatch({ type: "Image_REMOVE" });
  const removeVideo = () => dispatch({ type: "Video_REMOVE" });
  const removeAudio = () => dispatch({ type: "Audio_REMOVE" });
  // const RemovePoll = () => dispatch({ type: 'Image_REMOVE' })

  //post creating
  const postCreated = (data) => {
    //  console.log(state.formImageData);
    // let formdata=new FormData();
    /*  formdata.append('category_id',1);
    formdata.append('title','helow');
    formdata.append('subscription_plan',JSON.stringify([1,2])) */ if (
      state.formAudio != ""
    ) {
      data.append("audio", state.formAudio[0]);
    }

    if (state.formVideo != "") {
      data.append("video", state.formVideo[0]);
    }

    if (state.formImageData.length > 0) {
      for (const file of state.formImageData) {
        data.append("image[]", file);
      }
    }
    //console.log(data.values());

    // data.append('image',state.formImageData)

    // dispatch({type:'SET_LOADING'});

    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/content`,
        data: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        console.log(data.data);
        if (data.data.success) {
          history.push("/home");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const postUpdated = (data, id) => {
    // console.log(id);
    if (state.formAudio != "") {
      data.append("audio", state.formAudio[0]);
    }

    if (state.formVideo != "") {
      data.append("video", state.formVideo[0]);
    }

    if (state.formImageData.length > 0) {
      for (const file of state.formImageData) {
        data.append("image[]", file);
      }
    }

    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/content/${id}`,
        data: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        console.log(data.data);
        if (data.data.success) {
          history.push("/home");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const LikeHandle = (id) => {
    console.log("like");
    console.log(id);
    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/like/`,
        data: { content_id: id },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const CommentLikeHandle = (id) => {
    let formData = new FormData();
    formData.append("comment_id", id);
    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/comment-like/`,
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const RemoveLike = (id) => {
    try {
      const response = axios({
        method: "DELETE",
        url: `${BaseUrl}/like/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const RemoveCommentLikeHandle = (id) => {
    try {
      const response = axios({
        method: "DELETE",
        url: `${BaseUrl}/comment-like/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (err) {
      console.log(err);
    }
  };

  //giving comment

  const CommentCreate = (formData) => {
    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/comment/`,
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        getPosts();
      });
    } catch (response) {
      console.log(response);
    }
  };

  const CommentUpdate = (formData, id) => {
    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/comment/${id}`,
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (response) {
      console.log(response);
    }
  };

  const CommentDelete = (id) => {
    try {
      const response = axios({
        method: "DELETE",
        url: `${BaseUrl}/comment/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (response) {
      console.log(response);
    }
  };

  const ReplyCreate = (formData) => {
    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/comment-reply/`,
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (response) {
      console.log(response);
    }
  };

  const ReplyUpdate = (formData, id) => {
    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/comment-reply/${id}`,
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (response) {
      console.log(response);
    }
  };

  const ReplyDelete = (id) => {
    try {
      const response = axios({
        method: "DELETE",
        url: `${BaseUrl}/comment-reply/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (response) {
      console.log(response);
    }
  };

  //getting all post

  const getPosts = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${BaseUrl}/content`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "LOAD_DATA", payload: response.data.data });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const pollAction = async (pollid) => {
    let newData = new FormData();
    newData.append("poll_option_id", pollid);
    try {
      const response = axios({
        method: "post",
        url: `${BaseUrl}/poll/`,
        data: newData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      response.then((data) => {
        //  getPosts();
      });
    } catch (response) {
      console.log(response);
    }
  };

  const getPostByid = async (id) => {
    dispatch("SET_LOADING");
    try {
      const response = await axios({
        method: "get",
        url: `${BaseUrl}/content/${id}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "LOAD_DATA_BY_ID", payload: response.data.data });
        dispatch("SET_LOADING");
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  //   React.useEffect(() => {
  //getPosts();
  //  }, [])

  return (
    <PostContext.Provider
      value={{
        ...state,
        handleInputImage,
        handleInputVideo,
        handleInputAudio,
        removeImage,
        removeVideo,
        removeAudio,
        postCreated,
        postUpdated,
        LikeHandle,
        CommentLikeHandle,
        RemoveLike,
        getPosts,
        getPostByid,
        CommentCreate,
        ReplyCreate,
        CommentDelete,
        CommentUpdate,
        ReplyDelete,
        ReplyUpdate,
        RemoveCommentLikeHandle,
        handleEditInputImage,
        RemoveData,
        pollAction,
      }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return React.useContext(PostContext);
};

export { PostProvider };
