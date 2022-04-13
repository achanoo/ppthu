/** @format */

import React, { useState, useRef } from "react";
import {
  Typography,
  Box,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  ButtonGroup,
  Button,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import JoditEditor from "jodit-react";
import Link from "@mui/material/Link";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import "../../assets/style.css";
import Avatar from "@mui/material/Avatar";
import { FiEdit3 } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import { CButton } from "../../layout/CCButton";
import { coverphoto } from "../../assets/data";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import SelectOption from "../../layout/SelectOption";
import { useHistory } from "react-router";
import moment from "moment";
import { useAuthContext } from "../../context/AuthContext";
import SocialBox from "../../components/socialBox";
import axios from "axios";
import { BaseUrl } from "../../helpers/Constant";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    [theme.breakpoints.only("xs")]: {
      display: "block",
    },
  },
  container: {
    width: "90vw",
    maxWidth: "700px",
    textAlign: "center",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  boxer: {
    display: "flex",
    padding: "20px 25px",
    justifyContent: "flex-start",
    justifyItems: "center",
    alignItems: "baseline",
    "& .MuiAvatar-root": {
      display: "flex",
      alignSelf: "center",
      marginRight: theme.spacing(2),
    },
    "& h4": {
      display: "flex",
      alignSelf: "center",
      marginRight: theme.spacing(1),
      fontFamily: "Open Sans, sans-serif",
      fontSize: "1.3rem",
    },
    "& svg": {
      color: "rgb(229,227,221)",
      fontSize: "1.3rem",
      alignSelf: "center",
    },
  },
  cusFormInput: {
    textAlign: "start",
    padding: " 10px 0px",

    "& label": {
      color: "#333333",
      padding: "18px 0px",
      marginBottom: "8px",
    },
    "& .inputField": {
      margin: "0.5rem 0px",
      background: "rgb(245, 244, 242)",
    },
  },
  datePickupInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: theme.spacing(2),
    "& span": {
      margin: "0px 8px",
    },
    "& .MuiOutlinedInput-root #day,.MuiOutlinedInput-root #month": {
      width: "24px",
    },
    "& .MuiOutlinedInput-root #year": {
      width: "42px",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },

    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
      "& ~$mdsize": {
        margin: "0px 8px",
        display: "none",
      },
      "& .MuiOutlinedInput-root #day,.MuiOutlinedInput-root #month": {
        width: "100%",
      },
      "& .MuiOutlinedInput-root #year": {
        width: "100%",
      },
    },
  },
  xssize: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      alignSelf: "self-start",
    },
  },
  mdsize: {
    display: "inline",
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  subtitle: {
    fontSize: "0.725rem",
    color: "#c9c8c4",
  },
  buttonGroup: {
    float: "right",
  },
  selectOption: {
    margin: "0px 8px!important",
  },
  cusFormControl: {
    "& .MuiFormControl-root ": {
      margin: "0px 0px 0px 0px !important",
    },
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  cusOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coverphoto: {
    marginTop: "16px",
    height: "250px",
    width: "100%",
    backgroundImage: `url(${coverphoto})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  hrdiv: {
    margin: "20px 0px !important",
  },
  general: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "start",
    },
    gap: "15px",
  },
}));

const dob_validation = {
  day: 2,
  month: 2,
  year: 4,
};

// input formula=> (valu.length + 1)*8

const AccountSetting = ({ user }) => {
  const history = useHistory();
  const classes = useStyles();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [validation, setValidation] = useState({});
  const [state, setState] = useState({});
  const [dob, setDob] = useState({});
  const { getRegions, token } = useAuthContext();
  const [regions, setRegion] = useState([]);
  const socialArray = [
    "facebook",
    "instagram",
    "youtube",
    "twitter",
    "twitch",
    "discord",
    "tiktok",
    "others",
  ];

  const places = ["yangon", "mandalay", "sagaing"];

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const updateInfo = () => {
    let dob = "";
    if (state.day !== "" && state.month !== "" && state.year !== "") {
      dob = moment()
        .add(state.day, "days")
        .month(state.month - 1)
        .year(state.year)
        .format("YYYY-MM-DD HH:mm:ss");
    }

    let formData = new FormData();
    formData.append("email", state.email);
    formData.append("phone_1", state.phone_1);
    formData.append("socials", JSON.stringify(state.socials));
    formData.append("gender", state.gender);
    formData.append("address", state.address);
    formData.append("region_id", state.region_id);
    formData.append("name", state.name);

    axios({
      method: "post",
      url: `${BaseUrl}/user/account/update`,
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const handleChange = (data) => {
    setState((prev) => ({
      ...prev,
      region_id: data,
    }));
  };

  const dobHandleChange = (e) => {
    const { value, name } = e.target;
    let message = "";
    const regExp = RegExp(/^[0-9]+$/);
    const status = !value || regExp.test(value);
    if (status) {
      const length = value.length;
      console.log(length);
      if (length > dob_validation[name]) {
        message = `only  ${dob_validation[name]} for ${name} accepted!`;
        setValidation((prev) => ({
          message,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          [name]: value,
        }));
        setValidation({});
      }
    } else {
      message = `only Number are accepted!`;
      setValidation((prev) => ({
        message,
      }));
    }
  };
  const submitLinks = (collection) => {
    let { socials } = state;
    socials.push(collection);
    setState((prev) => ({
      ...prev,
      socials,
    }));
  };

  React.useEffect(() => {
    getRegions()
      .then((res) => {
        console.log(res.data);
        setRegion(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  React.useEffect(() => {
    setState((prev) => ({
      name: user?.user?.name,
      email: user?.user?.email,
      gender: user?.gender,
      day: user?.dob === null ? "" : moment(user?.dob).get("date"),
      month: user?.dob === null ? "" : moment(user?.dob).get("month"),
      year: user?.dob === null ? "" : moment(user?.dob).get("year"),
      list: user?.socials,
      region_id: user?.region?.id,
      address: user?.address,
      phone_1: user?.user?.phone_no,
      socials: user?.socials,
    }));
  }, [user]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h4" gutterBottom component="div">
          Account Setting
        </Typography>

        {/* dob and gender  */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>{/* <Button>Add</Button> */}</Box>

          {/* email start */}
          <Box className={classes.cusFormControl}>
            <Box className={classes.cusOptions}>
              <h5 className="input-label"> Email </h5>
              {/* <Button>Add</Button> */}
            </Box>

            <TextField
              id="standard-basic"
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
              variant="standard"
              onChange={handleInput}
              value={state?.email}
              name="email"
              placeholder="example@gmail.com"
            />
          </Box>

          {/* phone start */}
          <Box className={classes.cusFormControl}>
            <Box className={classes.cusOptions}>
              <h5 className="input-label"> Phone </h5>
              {/* <Button>Add</Button> */}
            </Box>

            <OutlinedInput
              fullWidth
              id="loginPh"
              value={state.phone_1}
              name="phone_1"
              onChange={handleInput}
              startAdornment={
                <InputAdornment position="start">
                  +95
                  <KeyboardArrowRightIcon /> 9
                </InputAdornment>
              }
              aria-describedby="component-error-text"
              inputProps={{ type: "number", "aria-label": "Without label" }}
              placeholder="000000000"
            />
          </Box>
          <Box className={classes.general}>
            <Box className={classes.cusFormControl}>
              <Box className={classes.cusOptions}>
                <h5 className="input-label"> Gender </h5>
              </Box>
              <Box className={classes.datePickupInput}>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group">
                  <Button
                    style={{
                      backgroundColor: `${
                        state.gender === "male" ? "#333" : ""
                      }`,
                    }}>
                    <MaleIcon />
                  </Button>
                  <Button
                    style={{
                      backgroundColor: `${
                        state.gender === "female" ? "#333" : ""
                      }`,
                    }}>
                    <FemaleIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            <Box className={classes.cusFormControl}>
              <Box className={classes.cusOptions}>
                <h5 className="input-label"> Birthday </h5>
                {validation && (
                  <span className="invalid">{validation?.message}</span>
                )}
              </Box>
              <Box className={classes.datePickupInput}>
                <span className={classes.xssize}>Day</span>
                <TextField
                  id="day"
                  type="text"
                  // name={aemail}
                  name="day"
                  value={state.day}
                  className={classes.inputField}
                  placeholder="XX"
                  onChange={dobHandleChange}

                  // onChange={(e) => setEmail(e.target.value)}
                />
                <span className={classes.mdsize}>Day</span>
                <span className={classes.xssize}>Month</span>
                <TextField
                  variant="outlined"
                  type="text"
                  id="month"
                  name="month"
                  value={state.month}
                  onChange={dobHandleChange}
                  placeholder="XX"
                />
                <span className={classes.mdsize}>Month</span>
                <span className={classes.xssize}>Year</span>
                <TextField
                  variant="outlined"
                  type="text"
                  name="year"
                  value={state.year}
                  onChange={dobHandleChange}
                  id="year"
                  placeholder="XXXX"
                />
                <span className={classes.mdsize}>Year</span>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider className={classes.hrdiv} />
        {/* link start */}

        <SocialBox submitLinks={submitLinks} />

        {/* region start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className="input-label"> Regions </h5>
            {/* <Button>Add</Button> */}
          </Box>
          {regions ? (
            <SelectOption
              data={regions}
              handleChange={handleChange}
              selected={1}
            />
          ) : (
            <div>Data is unavaliable at the moment!</div>
          )}
        </Box>
        <Divider className={classes.hrdiv} />
        {/* region start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className="input-label"> Address </h5>
            {/* <Button>Add</Button> */}
          </Box>
          <TextField
            id="filled-multiline-flexible"
            placeholder="example street or quater,example township, example city"
            inputProps={{ "aria-label": "Without label" }}
            multiline
            fullWidth
            value={state.address}
            name="address"
            maxRows={4}
            onChange={handleInput}
            variant="standard"
          />
        </Box>
        {/* button start */}
        <Box className={classes.buttonGroup} sx={{ mt: 3 }}>
          <CButton bgcolor="#eeeeee" textcolor="#0f0f0f">
            Cancel
          </CButton>
          <CButton onClick={updateInfo}>Save</CButton>
        </Box>
      </div>
    </div>
  );
};

export default AccountSetting;
