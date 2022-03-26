/** @format */

import React, { useState, useRef } from "react";
import {
  Typography,
  Box,
  OutlinedInput,
  InputAdornment,
  ButtonGroup,
  Button,
} from "@mui/material";
import AlertMessage from "./../components/Alert";
import moment from "moment";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import badge from "../assets/menu/badge.svg";
import "../assets/style.css";
import Avatar from "@mui/material/Avatar";
import { FiEdit3 } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import { CButton } from "../layout/CCButton";
import { coverphoto } from "../assets/data";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import SelectOption from "./../layout/SelectOption";
import { useHistory } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { getFullUrl, RBaseUrl, changeSocials } from "../helpers/Constant";
const useStyles = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  wrapper: {
    minHeight: "100vh",
    display: "grid",
    marginTop: "2vh",
    placeItems: "center",
    [theme.breakpoints.only("xs")]: {
      display: "block",
      padding: "20px",
    },
  },
  container: {
    width: "90vw",
    maxWidth: "700px",
    textAlign: "center",
    marginBottom: "40px",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  firstinfo: {
    border: "1px solid rgb(229,227,221)",
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
    "& Button": {
      display: "flex",
      alignSelf: "center",
    },
    "& svg": {
      color: "rgb(229,227,221)",
      fontSize: "1.3rem",
      alignSelf: "center",
    },
  },
  userinfo: {
    "& .MuiTextField-root": {
      display: "flex",
      alignSelf: "center",
      border: "0px",
    },
    "& .MuiInputBase-input::before": {
      border: "0px",
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
  hidddendiv: {
    display: "none !important",
  },
}));

// input formula=> (valu.length + 1)*8

const initalData = {
  username: "Bingo",
  oldcover: "",
  oldprofile: "",
  cover: "",
  profile: "",
  regions: "none",
  address: "",
  phone: "",
  gender: "",
  dob: "",
  bio: "",
  socials: [],
  day: "",
  month: "",
  year: "",
  email: "",
  categories: JSON.parse(localStorage.getItem("selectedCategory")) || [],
  role: "",
  urlKeyword: "",
  content_status:
    JSON.parse(localStorage.getItem("sexual_content")) === 1 ? 1 : "" || "",
};

const Basic = () => {
  const {
    getRegions,
    regions,
    user: authUser,
    getUserData,
    updateUserProfile,
    errors,
    failed_status,
    success_status,
  } = useAuthContext();
  const { role, name } = authUser;
  // console.log(role);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState("");

  const [emailorphone, setEmailorphone] = React.useState({
    isEmail: true,
    isPhone: true,
  });

  const history = useHistory();
  const classes = useStyles();
  const editor = useRef(null);
  const cover = useRef(null);
  const profile = useRef(null);
  const [content, setContent] = useState("");

  const [state, setState] = useState(initalData);
  const [social, setSocial] = useState({
    name: "none",
    link: "",
  });
  const socialArray = [
    { id: 1, name: "facebook" },
    { id: 2, name: "instagram" },
    { id: 3, name: "youtube" },
    { id: 4, name: "twitter" },
    { id: 5, name: "twitch" },
    { id: 6, name: "discord" },
    { id: 7, name: "tiktok" },
    { id: 8, name: "others" },
  ];

  const places = ["yangon", "mandalay", "sagaing"];

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const NewgetValue = (value) => {
    console.log(value);
    // setState({ ...state, isError })
  };

  const goToHome = () => {
    history.push("/creator-home");
  };

  const inputChange = (e) => {
    const { name, value, files } = e.target;
    console.log(value);
    if (name === "cover" || name === "profile") {
      setState((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const inputLinkChange = (e) => {
    const { name, value } = e.target;
    if (name === "social") {
      setSocial((prev) => ({
        ...prev,
        name: value,
      }));
    } else {
      setSocial((prev) => ({
        ...prev,
        link: value,
      }));
    }
  };

  const addMore = () => {
    let acc = [];
    let cc = [];
    let { socials } = state;
    acc.push(social.name);
    acc.push(social.link);
    socials.push(acc);

    setState((prev) => ({
      ...prev,
      socials,
    }));
    setSocial({ link: "", name: "none" });
  };

  const genderChange = (gender) => {
    setState((prev) => ({
      ...prev,
      gender: gender,
    }));
  };

  const showimage = (image) => {
    return URL.createObjectURL(image);
    // return window.URL.createObjectURL(image);
  };

  const removeLink = (i) => {
    const { socials } = state;
    let newSocials = socials.filter((data, index) => index !== i);
    setState((prev) => ({
      ...prev,
      socials: newSocials,
    }));
  };

  const hanldingSubmit = () => {
    let dob = moment()
      .add(state.day, "days")
      .month(state.month - 1)
      .year(state.year)
      .format("YYYY-MM-DD HH:mm:ss");
    let formData = new FormData();
    formData.append("name", state.username);
    formData.append("email", state.email);
    formData.append("phone_2", state.phone);
    formData.append("role_id", "");
    formData.append(
      "cover_photo",
      state.cover === "" ? state.oldcover : state.cover
    );
    formData.append(
      "profile_image",
      state.profile === "" ? state.oldprofile : state.profile
    );
    formData.append("categories", JSON.stringify(state.categories));
    formData.append("socials", JSON.stringify(state.socials));
    formData.append("gender", state.gender);
    formData.append("dob", dob);
    formData.append("address", state.address);
    formData.append(
      "region_id",
      (state.regions !== "none" &&
        regions.find((x) => x.name === state.regions).id) ||
        ""
    );
    formData.append("bio", state.bio);
    formData.append("profile_url", state.urlKeyword);
    formData.append("content_status", state.content_status);

    updateUserProfile(formData);
  };

  useEffect(() => {
    console.log("now i am changin cause context change!");
    setState((prev) => ({
      ...prev,
      role: authUser.role,
    }));
  }, [authUser.role]);

  useEffect(() => {
    let getData = true;
    if (getData) {
      getRegions();
      let data = getUserData();
      let { email, phone, role } = state;
      let userphone = "";
      let useremail = "";
      let name = "";

      data.then((r) => {
        let userdata = null;
        userdata = r.data;
        setState((prev) => ({
          ...prev,
          username: userdata.user.name,
          oldcover: userdata.cover_photo === null ? "" : userdata.cover_photo,
          oldprofile:
            userdata.profile_image === null ? "" : userdata.profile_image,
          regions: userdata.region === null ? "none" : userdata.region.name,
          address: userdata.address === null ? "" : userdata.address,
          phone: userdata.user.phone_no === null ? "" : userdata.user.phone_no,
          gender: userdata.gender === null ? "" : userdata.gender,
          dob: userdata.dob === null ? "none" : userdata.dob,
          bio: userdata.bio === null ? "none" : userdata.bio,
          socials: changeSocials(userdata.socials),
          day: userdata.dob === null ? "" : moment(userdata.dob).get("date"),
          month: userdata.dob === null ? "" : moment(userdata.dob).get("month"),
          year: userdata.dob === null ? "" : moment(userdata.dob).get("year"),
          email: userdata.user.email === null ? "" : userdata.user.email,
          urlKeyword: userdata.profile_url === null ? "" : userdata.profile_url,
        }));
      });
    }

    return (getData = false);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h4" gutterBottom component="div">
          Personal Information
        </Typography>
        {failed_status && (
          <AlertMessage
            alert={true}
            type="error"
            msg={"Something went wrong! Change Infromation and then Try again!"}
          />
        )}

        {success_status && (
          <AlertMessage alert={true} type="success" msg={"Success!"} />
        )}

        <Box className={`${classes.firstinfo}`}>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Box className={`${classes.boxer} ${classes.userinfo} `}>
              <Avatar
                sx={{ width: 40, height: 40 }}
                src={
                  state.profile.length !== 0
                    ? showimage(state.profile)
                    : getFullUrl(state.oldprofile)
                }
              />

              <input
                type="file"
                ref={profile}
                onChange={inputChange}
                name="profile"
                accept="image/*"
                className={classes.hidddendiv}
              />
              <Typography variant="h5">{state.username}</Typography>

              <IconButton onClick={() => profile.current.click()}>
                <FiEdit3 />
              </IconButton>
            </Box>
            <Box flexGrow={"-web"} className={`${classes.boxer}`}>
              <Avatar src={badge} sx={{ width: 30, height: 30 }} />
              <CButton>Verify</CButton>
            </Box>
          </Box>
        </Box>

        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className="input-label"> Full Name </h5>
          </Box>

          <Box>
            <TextField
              id="outlined-basic"
              value={state.username}
              name="username"
              onChange={inputChange}
              variant="outlined"
              fullWidth
              InputProps={{
                "aria-label": "Without label",
              }}
            />
          </Box>
        </Box>

        {/* cover start */}
        {/*         <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className='input-label'> Cover photo </h5>
            <Button>Add</Button>
          </Box>
          <Box className={classes.coverphoto}></Box>
        </Box>

        <Divider className={classes.hrdiv} /> */}
        {/* bio start */}
        <Box style={{ display: "none" }} className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className="input-label"> Bio </h5>
            {/* <Button>Add</Button> */}
          </Box>

          <TextField
            id="filled-multiline-flexible"
            value={state.bio}
            inputProps={{ "aria-label": "Without label" }}
            multiline
            fullWidth
            placeholder="what is your bio?"
            maxRows={4}
            name="bio"
            onChange={inputChange}
            variant="standard"
          />
        </Box>
        {/* dob and gender  */}
        <Box className={classes.cusFormControl}>
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
                    onClick={() => genderChange("male")}
                    style={{
                      backgroundColor: `${
                        state.gender === "male" ? "#333" : ""
                      }`,
                    }}>
                    <MaleIcon />
                  </Button>
                  <Button
                    onClick={() => genderChange("female")}
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
              </Box>
              <Box className={classes.datePickupInput}>
                <span className={classes.xssize}>Day</span>
                <TextField
                  id="day"
                  type="text"
                  // name={aemail}
                  value={state.day}
                  name="day"
                  className={classes.inputField}
                  placeholder="XX"
                  onChange={inputChange}
                />
                <span className={classes.mdsize}>Day</span>
                <span className={classes.xssize}>Month</span>
                <TextField
                  variant="outlined"
                  type="text"
                  id="month"
                  name="month"
                  value={state.month}
                  placeholder="XX"
                  onChange={inputChange}
                />
                <span className={classes.mdsize}>Month</span>
                <span className={classes.xssize}>Year</span>
                <TextField
                  variant="outlined"
                  type="text"
                  name="year"
                  value={state.year}
                  id="year"
                  placeholder="XXXX"
                  onChange={inputChange}
                />
                <span className={classes.mdsize}>Year</span>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* email start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className="input-label"> Email </h5>
            {/* <Button>Add</Button> */}
          </Box>

          <TextField
            id="outlined-email-basic"
            inputProps={{ "aria-label": "Without label" }}
            fullWidth
            name="email"
            value={state.email}
            readOnly={emailorphone.isEmail}
            variant="outlined"
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
            name="phone"
            value={state.phone}
            onChange={inputChange}
            startAdornment={
              <InputAdornment position="start">
                +95
                <KeyboardArrowRightIcon /> 9
              </InputAdornment>
            }
            aria-describedby="component-error-text"
            inputProps={{ type: "text", "aria-label": "Without label" }}
            placeholder="000000000"
          />
        </Box>

        {/* region start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className="input-label">
              {" "}
              Regions{" "}
              {errors && errors.region_id && (
                <span className="error-msg">is required</span>
              )}
            </h5>
            {/* <Button>Add</Button> */}
          </Box>
          <SelectOption
            fullWidth={false}
            data={regions}
            onChange={state.regions}
            name="regions"
            inputChange={inputChange}
          />
        </Box>

        {/* region start */}
        <Box className={classes.cusFormControl}>
          <Box className={classes.cusOptions}>
            <h5 className="input-label"> Address </h5>
            {/* <Button>Add</Button> */}
          </Box>
          <TextField
            value={state.address}
            id="filled-multiline-flexible"
            label="example street or quater,example township, example city"
            inputProps={{ "aria-label": "Without label" }}
            multiline
            fullWidth
            maxRows={4}
            name="address"
            onChange={inputChange}
            variant="standard"
          />
        </Box>
        {/* button start */}
        <Box className={classes.buttonGroup} sx={{ mt: 3 }}>
          <CButton border="false" bgcolor="#eeeeee" textcolor="#0f0f0f">
            Cancel
          </CButton>
          <CButton onClick={hanldingSubmit}>Save</CButton>
        </Box>
      </div>
    </div>
  );
};

export default Basic;
