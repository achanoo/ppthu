/** @format */

import React from "react";
import axios from "axios";
import api from "./../services/apiAction.service";
import { useHistory } from "react-router";
import { BaseUrl } from "../helpers/Constant";
import reducer from "../reducers/subscriptionReducers";
import { useAuthContext } from "./AuthContext";
import { plans } from "./../assets/data";

let cancelToken;

const SubscriptionContext = React.createContext();
const initialStates = {
  subscriptions: [],
  isloading: false,
  categories: [],
};

const SubscriptionProvider = ({ children }) => {
  const { isAuthenticated, token } = useAuthContext();

  const [state, dispatch] = React.useReducer(reducer, initialStates);
  const [level, setLevel] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  // console.log(children)
  // React.useEffect(() => {
  //  // dispatch({ type: 'SET_LOADING' })
  //  // dispatch({ type: 'DATA_LOADED', payload: plans })
  // //  dispatch({ type: 'UNSET_LOADING' })
  //   // getCategories()
  //   // getSubscriptions()
  // }, [])

  const getSubscriptions = async () => {
    dispatch({ type: "SET_LOADING" });

    try {
      // const response = await axios(
      //   {
      //     method: "get",
      //     url: `${BaseUrl}/subscription-plan`,
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      //   { cancelToken: cancelToken.token }
      // );
      const response = await api.get("/subscription-plan");

      //dispatch({ type: 'UNSET_LOADING' })
      if (response.data.data) {
        console.log(response.data.data);
        const payload = response.data.data;
        dispatch({ type: "DATA_LOADED", payload: payload });
        dispatch({ type: "UNSET_LOADING" });
      }
    } catch (error) {
      console.log("there is error!");
    }
  };

  const createSubscriptions = async (data) => {
    //console.log(data);

    //console.log(formData)

    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios({
        method: "post",
        url: `${BaseUrl}/subscription-plan`,
        data: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.data) {
        const payload = response.data.data;
        dispatch({ type: "NEWDATA_LOADED", payload: payload });
        dispatch({ type: "UNSET_LOADING" });
      }

      //   // axios
      //   //   .post(`${BaseUrl}/subscription-plan`, formData, {
      //   //     headers: {
      //   //       Accept: 'application/json',
      //   //       'Content-Type': 'multipart/form-data',
      //   //       Authorization: `Bearer ${token}`,
      //   //     },
      //   //   })
      //   //   .then((res) => res.json())
      //   //   .then((res) => {
      //   //     console.log(res)
      //   //   })
    } catch (error) {
      console.log("there is error!");
    }
  };

  const getCategories = async () => {
    dispatch({ type: "SET_LOADING" });

    try {
      const response = await api.get("/category");

      const payload = response.data.categories;
      // console.log(payload)
      dispatch({ type: "DATA_LOADED_CATEGORY", payload: payload });
      dispatch({ type: "UNSET_LOADING" });
    } catch (error) {
      console.log("there is error!");
    }
  };

  const getEarningOverview = async (type = "") => {
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/creator/earnings`,
      params: { status: type },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  };

  const getUserSubscriptions = async () => {
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/user/user-subscriptions`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

  const terminateSubscription = async (id) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "My-Custom-Header": "foobar",
    };
    const res = await axios.delete(
      `${BaseUrl}/subscription/${id}
      `,
      { headers }
    );
    console.log(res.status);
  };

  return (
    <SubscriptionContext.Provider
      value={{
        ...state,
        setLevel,
        setPrice,
        setImage,
        setDescription,
        getSubscriptions,
        createSubscriptions,
        getCategories,
        getUserSubscriptions,
        getEarningOverview,
        terminateSubscription,
      }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
export const useSubscriptionContext = () => {
  return React.useContext(SubscriptionContext);
};

export { SubscriptionProvider };
