/** @format */

import React, { createContext } from "react";
import axios from "axios";
import { BaseUrl } from "../helpers/Constant";
import { useAuthContext } from "./AuthContext";
const PostBlogContext = createContext();

const PostBlogProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [reloading, setReloading] = React.useState(false);
  const { token } = useAuthContext();

  const sendGetRequest = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${BaseUrl}/content`,
        params: {
          type: "all",
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
        const errms = response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refresh = () => {
    setReloading(!reloading);
  };

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
