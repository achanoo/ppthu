/** @format */

import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import reducer from "../reducers/authReducers";

import { BaseUrl } from "./../helpers/Constant";

const AuthContext = React.createContext();

const initialStates = {
  isAuthenticated: false,
  token: JSON.parse(localStorage.getItem("token")) || "",
  loading: false,
  erors: false,
  user: JSON.parse(localStorage.getItem("user")) || {},
  subscriptions: [],
  regions: [],
  searchCreator: null,
};

const adminToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2MzQ1NDQzMTAsIm5iZiI6MTYzNDU0NDMxMCwianRpIjoicmdpMjFiYXF6eVJZZHlQdCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.BDK4k4MmNb6fy_S3AabTughzzkvldQrAudt60XH88sA";

const AuthProvider = ({ children }) => {
  let cancelToken;
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialStates);

  const checkLogin = () => {
    dispatch({ type: "IS_AUTHENTICATED" });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const loginbyAccount = async (formdata) => {
    //console.log(formdata)
    try {
      const response = await axios({
        method: "post",
        url: `${BaseUrl}/auth/login`,
        data: formdata,
      });
      const data = response.data.data;
      if (data.status === "Active") {
        localStorage.setItem("token", JSON.stringify(data.access_token));
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        history.push("/home");
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log("there is no error!");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT_ACTION" });
    history.push("/");
    // window.location.reload()
  };

  const loginByPovider = async (data) => {
    if (typeof cancelToken != typeof underfined) {
      cancelToken.cancel("cancel the previous req");
    }
    cancelToken = axios.CancelToken.source();
    const formData = data;

    try {
      const response = await axios(
        {
          method: "post",
          url: `${BaseUrl}/auth/google`,
          data: formData,
        },
        { cancelToken: cancelToken.token }
      );
      const data = response.data.data;
      //console.log(data)
      if (data.status === "Active") {
        localStorage.setItem("token", JSON.stringify(data.access_token));
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        history.push("/home");
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log("there is  error!");
    }
  };

  //for register by account

  const registerByaccount = async (formdata) => {
    // console.log(formdata);
    try {
      const response = await axios({
        method: "post",
        url: `${BaseUrl}/auth/register`,
        data: formdata,
      });
      const data = response.data.data;
      if (data.status === "Active") {
        localStorage.setItem("token", JSON.stringify(data.access_token));
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        history.push("/home");
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log("there is no error!");
    }
  };

  const registerByPhone = async (formdata) => {
    try {
      const response = await axios({
        method: "post",
        url: `${BaseUrl}/auth/phone/register`,
        data: formdata,
      });
      const data = response.data.data;
      if (data.status === "Active") {
        localStorage.setItem("token", JSON.stringify(data.access_token));
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        history.push("/home");
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log("there is no error!");
    }
  };

  const loginbyPhone = async (formdata) => {
    try {
      const response = await axios({
        method: "post",
        url: `${BaseUrl}/auth/phone/login`,
        data: formdata,
      });
      const data = response.data.data;
      if (data.status === "Active") {
        localStorage.setItem("token", JSON.stringify(data.access_token));
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        history.push("/home");
      }
    } catch (error) {
      //dispatch({ type: GET_PRODUCTS_ERROR })
      console.log("there is no error!");
    }
  };

  const defaultLogged = () => {
    const data = {
      id: 1,
      name: "Admin",
      role: "admin",
      status: "Active",
      access_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2MzIxNTEyNjIsIm5iZiI6MTYzMjE1MTI2MiwianRpIjoieVlPSUd5bHhHOE15YlJDaCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.XI7ZZqTuWDmL0bNqh7rw1Z27qWovjVgxmS-2uW_qVm4",
      token_type: "Bearer",
    };
    localStorage.setItem("token", JSON.stringify(data.access_token));
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    history.push("/home");
  };

  const getRegions = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${BaseUrl}/region`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "REGION_LOAD", payload: response.data.data });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const updatetoCreator = async (data) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios({
        method: "post",
        url: `${BaseUrl}/user/update`,
        data: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${state.token}`,
        },
      });
      if (response.data.status) {
        let data = getUserData();
        console.log("it is working");
        data.then((data) => {
          console.log(data.data.user_info);
          let user_var = localStorage.getItem("user");
          if (user_var) {
            let userobj = JSON.parse(user_var);

            userobj.name = data.data.user_info.user.name;
            userobj.role = data.data.user_info.user.role.name;
            userobj.profile_image = data.data.user_info.profile_image;
            userobj.profile_url = data.data.user_info.profile_url;

            localStorage.setItem("user", JSON.stringify(userobj));
            localStorage.removeItem("sexual_content");
            localStorage.removeItem("selectedCategory");
            dispatch({
              type: "UPDATE_USER",
              payload: data.data,
            });
          }
        });

        dispatch({ type: "UNSET_LOADING" });
      }

      // const payload = response.data.data
      // dispatch({ type: 'NEWDATA_LOADED', payload: payload })
      // dispatch({ type: 'UNSET_LOADING' })
    } catch (error) {
      console.log("there is error!");
    }
  };

  const updateUserProfile = (data) => {
    axios({
      method: "post",
      url: `${BaseUrl}/user/update`,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${state.token}`,
      },
    })
      .then((res) => {
        let user_var = localStorage.getItem("user");
        if (user_var) {
          let userobj = JSON.parse(user_var);

          userobj.name = res.data.data.user.name;
          userobj.role = res.data.data.user.role.name;
          userobj.profile_image = res.data.data.profile_image;
          userobj.profile_url = res.data.data.profile_url;

          localStorage.setItem("user", JSON.stringify(userobj));
          dispatch({
            type: "UPDATE_USER",
            payload: res.data.data,
          });
          // getUserData();
        }
      })
      .catch((error) => console.log(error.message));
  };

  const searchByprofileUrl = (data) => {
    dispatch({ type: "SET_SEARCH_RESULT", payload: data });
  };

  const getUserData = async () => {
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/user`,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${state.token}`,
      },
    });
    return response.data;
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginbyAccount,
        loginByPovider,
        logout,
        registerByaccount,
        registerByPhone,
        loginbyPhone,
        defaultLogged,
        getRegions,
        updatetoCreator,
        getUserData,
        searchByprofileUrl,
        updateUserProfile,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
