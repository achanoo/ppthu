/** @format */

import React, { useState, useRef } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Box,
  Divider,
  Collapse,
  Button,
} from "@mui/material";
import moment from "moment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CButton } from "./../layout/CCButton";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { BaseUrl, getFullUrl } from "../helpers/Constant";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    display: "grid",

    placeItems: "center",
    [theme.breakpoints.only("xs")]: {
      display: "block",
      padding: "10px",
    },
  },
  container: {
    width: "90vw",
    maxWidth: "100%",
    textAlign: "center",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  creatorName: {
    textDecoration: "underlined",
  },
  cardGroup: {
    textAlign: "left",
  },

  aligncenter: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  remind: {
    fontSize: "0.925rem",
    paddingLeft: "10px",
  },
  warning: {
    textAlign: "center",
    fontSize: "0.825rem",
    color: "#333",
  },
  card: {
    // backgroundColor: "#333",
    padding: "20px",
    "&>h4": {
      padding: "0px 20px",
    },

    "&>:nth-child(1)": {
      borderTop: "0",
    },
  },
  detailbox: {
    display: "flex",
    flexDirection: "row",
    placeContent: "space-between",
    alignItems: "center",
    margin: "20px",
    borderTop: "1px solid rgb(229,227,220)",
    "& h4": {
      marginBottom: "0px",
    },
    "& .MuiDivider-root": {
      borderColor: "#333",
      height: "1.4rem",
      display: "flex",

      alignSelf: "center",
    },
  },
  tierDesc: {
    width: "100%",
    height: "auto",
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
  },
  tiercontent: {
    fontSize: "0.9em",
  },
}));

// input formula=> (valu.length + 1)*8

// const tiercard = (props) => (
//   <Paper sx={{ m: 1 }} elevation={4}>
//     <Box component="svg" sx={{ width: 100, height: 100 }}>
//       <h3>helow rold {props.name}</h3>
//     </Box>
//   </Paper>
// );

const CheckOutModel = () => {
  const classes = useStyles();
  // const editor = useRef(null);
  const history = useHistory();
  const { username } = useParams();
  const { searchCreator, token, searchByprofileUrl } = useAuthContext();
  // const [content, setContent] = useState("");
  const [collapse, setCollapse] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  // console.log(moment().add(1, "month"));
  const [data, setData] = React.useState({
    plan: {
      price: 0,
    },
  });
  const [finalData, setFinalData] = React.useState({
    bankAcc: "",
    bankName: "",
    fee: "",
    takenMonth: 1,
    from: moment().format("YYYY-MM-DD"),
    to: moment().add(1, "month").format("YYYY-MM-DD"),
    creator_id: "",
  });
  const [error, setError] = useState("");

  const planid = query.get("rid");
  console.log(searchCreator);
  // const socialArray = [
  //   "facebook",
  //   "instagram",
  //   "youtube",
  //   "twitter",
  //   "twitch",
  //   "discord",
  //   "tiktok",
  //   "others",
  // ];

  // const places = ["yangon", "mandalay", "sagaing"];

  // const config = {
  //   readonly: false, // all options from https://xdsoft.net/jodit/doc/
  // };

  // const NewgetValue = (value) => {
  //   console.log(value);
  //   // setState({ ...state, isError })
  // };

  const handleCollapse = () => {
    // console.log("helo");
    setCollapse(!collapse);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    let { price, to } = finalData;

    if (name === "takenMonth") {
      // price = price * value;
      if (value <= 0) {
        value = 1;
      }
      price = data.plan.price * value;
      to = moment().add(value, "month").format("YYYY-MM-DD");
    }
    setFinalData((prev) => ({
      ...prev,
      price,
      to,
      [name]: value,
    }));
  };

  const submitHandling = () => {
    let formData = new FormData();
    formData.append("creator_id", finalData.creator_id);
    formData.append("subscription_plan_id", finalData.plan);
    formData.append("subscription_fee", finalData.price);
    formData.append("fdate", finalData.from);
    formData.append("tdate", finalData.to);
    axios
      .post(`${BaseUrl}/subscription`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        //console.log(res);
        if (res.data.success) {
          history.push("/home");
        }
      })
      .catch((err) => console.log(err.message));
  };

  React.useEffect(() => {
    const controller = new AbortController();
    if (searchCreator == null) {
      axios
        .get(
          `${BaseUrl}/user/search`,
          {
            params: {
              s: username,
              status: 1,
            },
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res.data.data.length);
          if (res.data.data.length > 0) {
            //setState({ ...res.data.data[0], subscribe: "" });
            searchByprofileUrl({ ...res.data.data[0], subscribe: "" });
            //setIsSetData(false);
          } else {
            throw new Error("No user is found!");
          }
        })
        .catch((err) => setError(err.message));
    } else {
      const planObj = searchCreator.subscription_plans.find(
        (i) => i.id === planid
      );
      setData((prev) => ({
        ...prev,
        plan: planObj,
      }));

      setFinalData((prev) => ({
        ...prev,
        creator_id: searchCreator.id,
      }));
    }
    return () => {
      console.log("revoking");
      controller.abort();
    };
  }, [searchCreator]);

  React.useEffect(() => {
    setFinalData((prev) => ({
      ...prev,
      price: data.plan.price,
      fee: data.plan.price,
      plan: data.plan.id,
    }));
  }, [data.plan]);
  console.log();
  if (searchCreator == null) {
    return <h5>Loading...</h5>;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h5" gutterBottom component="div" paddingBottom={4}>
          <span>Complete your monthly payment to </span>
          <Link
            to={`/creator-profile/${username}`}
            className={classes.creatorName}>
            {`${username}`}
          </Link>
        </Typography>

        <Grid container className={classes.cardGroup} gap={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className={`FaintBox ${classes.card}`}>
            <Grid container columnGap={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                display="flex"
                alignSelf="center">
                <h4>Choose what you pay</h4>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                display="flex"
                justifyContent="space-evenly"
                aligntitem="center">
                <FormControl variant="outlined" className={classes.aligncenter}>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    readOnly
                    value={finalData.price}
                    onChange={handleChange}
                    name="price"
                    startAdornment={
                      <InputAdornment position="start">Ks</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "amount",
                      style: {
                        fontSize: "1.3rem",
                        width: (16 + 4) * 8 + "px",
                      },
                    }}
                  />
                  <FormHelperText id="outlined-weight-helper-text">
                    {/*  amount */}
                  </FormHelperText>
                </FormControl>
                <span
                  style={{
                    width: `-webkit-fill-available`,
                    color: finalData.price < data.plan.price ? "red" : "",
                  }}
                  className={`${classes.remind} ${classes.aligncenter}`}>
                  The minimum price for this tier is {data.plan.price} Ks
                </span>
              </Grid>
            </Grid>

            <Grid container columnGap={3} mt={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                display="flex"
                alignSelf="start"
                justifySelf={"flex-start"}>
                <h4>Payment details</h4>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                display="flex"
                flexDirection="column"
                rowGap={4}>
                <TextField
                  label="Credit Account"
                  id="outlined-start-adornment-acc"
                  fullWidth
                  name="bankAcc"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Bank Acc Name"
                  id="outlined-start-adornment-accname"
                  fullWidth
                  name="bankName"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <CButton
                  disabled={finalData.price < data.plan.price}
                  onClick={submitHandling}>
                  Pay With Card
                </CButton>
              </Grid>
            </Grid>
            <p className={classes.warning}>
              PantPoethu does not issue refunds on behalf of creator.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            className={`FaintBox ${classes.card}`}>
            <h4>SUMMARY</h4>
            <Box className={classes.detailbox}>
              <Box style={{ width: "80%" }}>
                <h4>{data.plan.level}</h4>
                <Box display="inline-flex">
                  <Button onClick={handleCollapse}>
                    Show tier Description
                  </Button>
                  <Divider
                    orientation="vertical"
                    className={classes.divider}
                    variant="middle"
                  />
                  {/* <Button
                    className="d-none"
                    onClick={() =>
                      history.push(`/creator-profile/$
                      {username}`)
                    }>
                    Edit
                  </Button> */}
                </Box>
                <Box className={classes.tierDesc}>
                  <Collapse orientation="vertical" in={collapse}>
                    <img src={getFullUrl(data.plan.image)} alt="name" />
                    <Typography
                      className={classes.tiercontent}
                      dangerouslySetInnerHTML={{
                        __html: `${data.plan.description}`,
                      }}></Typography>
                  </Collapse>
                </Box>
              </Box>

              <h4>{data.plan.price}Ks</h4>
            </Box>
            <Box className={classes.detailbox}>
              <div>
                <h4>Subscibe Monthly</h4>
              </div>

              <TextField
                type="number"
                size="small"
                name="takenMonth"
                value={finalData.takenMonth}
                onChange={handleChange}
                pattern="\d+"
                InputProps={{
                  "aria-label": "Without label",
                  style: {
                    fontSize: "1.3rem",
                    width: (4 + 4) * 8 + "px",
                    alignSelf: "end",
                    justifyContent: "center",
                    marginTop: "20px",
                  },
                }}
              />
            </Box>
            <Box className={classes.detailbox}>
              <div>
                <h4>Your Subscribe ExprieDate</h4>
              </div>
              <h4>{moment(finalData.to).format("MMMM Do YYYY, h A")}</h4>
            </Box>
            <Box className={classes.detailbox}>
              <div>
                <h4>Today Charged</h4>
              </div>
              <h4> {finalData.price} Ks</h4>
            </Box>
            <Box className={classes.detailbox}>
              <div>
                <h4>Currency</h4>
              </div>
              <h4>Kyats</h4>
            </Box>
            <Divider></Divider>
            <Box padding={"10px 10px"}>
              <Typography
                variant="subtitle1"
                component="div"
                textAlign="center">
                *Depending on your location your bank might charge an additional
                foreign transaction fee for your membership to this Creator.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CheckOutModel;
