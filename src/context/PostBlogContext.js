/** @format */

import React, { createContext } from "react";
import axios from "axios";
import { BaseUrl } from "../helpers/Constant";
import { useAuthContext } from "./AuthContext";
import Pusher from "pusher-js";
import { ListTwoTone } from "@mui/icons-material";

const PostBlogContext = createContext();
const PostBlogProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [reloading, setReloading] = React.useState(false);
  const { token } = useAuthContext();

  const listen = () => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("cbae929ae26fb6b1d072", {
      cluster: "ap1",
      encrypted: true,
    });

    var channel = pusher.subscribe("comment-channel");
    channel.bind("newComment", function (data) {
      var data = data.comment;
      refresh();
    });
  };

  const sendGetRequest = async (data = "all") => {
    try {
      const res = await axios({
        method: "get",
        url: `${BaseUrl}/content`,
        params: {
          type: data,
        },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = res.data;
      if (response.success) {
        setPosts(res.data?.data);
      } else {
        const errors = response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refresh = () => {
    setReloading(!reloading);
  };
  React.useEffect(() => listen(), []);
  React.useEffect(() => sendGetRequest(), [reloading]);

  return (
    <PostBlogContext.Provider
      value={{
        posts,
        loading,
        setLoading,
        sendGetRequest,
        reloading,
        setReloading,
      }}>
      {children}
    </PostBlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return React.useContext(PostBlogContext);
};

export { PostBlogProvider };
