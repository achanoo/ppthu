/** @format */

import React from "react";
import { makeStyles } from "@mui/styles";
import ReactFacebookLogin from "react-facebook-login";
import styles from "../assets/cus.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useAuthContext } from "../context/AuthContext";

export default function FacebookLogin(props) {
  const { loginByPovider } = useAuthContext();
  const onResponse = (resp) => {
    try {
      console.log(resp);

      // console.log(resp.email)
      const formData = {
        email: resp?.email,
        token: resp?.userId,
        provider: "Facebook",
        name: resp?.name,
        image: resp?.picture.data.url,
      };
      //console.log(formData)
      loginByPovider(formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ReactFacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID} // we created this, remember?
      autoLoad={false}
      fields="name,email,picture"
      callback={onResponse}
      cssClass={`${styles.mkBtn} ${styles.mkBtnBg}`}
      textButton="Continue with Facebook"
      icon={<FacebookIcon />}
    />
  );
}
