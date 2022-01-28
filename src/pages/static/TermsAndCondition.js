/** @format */

import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid, Accordion } from "@mui/material";
import Accordian from "./../../components/Accordian";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { BaseUrl } from "../../helpers/Constant";
import { CButton } from "../../layout/CCButton";
import talking from "./../../assets/talking.jpeg";
const useStyles = makeStyles((theme) => ({
  sectionOne: {
    background: "rgb(51,149,255)",
    background:
      "linear-gradient(0deg, rgba(51,149,255,1) 0%, rgba(3,224,255,1) 100%)",
    minHeight: "40vh",
    display: "grid",
    gridTemplateColumns: "15% 90%",
    placeItems: "start",
    color: "#fff",
  },
  firstWrapper: {
    gridColumnStart: 2,
    alignSelf: "center",
  },
  imgWrapper: {
    gridColumnStart: 3,
    alignSelf: "center",
  },
  wrapper: {
    paddingTop: "10vh",
    display: "grid",
    placeItems: "center",
    [theme.breakpoints.only("xs")]: {
      display: "block",
      padding: "10px",
    },
    "& h2": {
      textAlign: "center",
    },
  },
  container: {
    width: "90vw",
    maxWidth: "1000px",
    textAlign: "start",
    height: "auto",
    padding: "20px",

    [theme.breakpoints.only("xs")]: {
      padding: "5px",
    },
  },
  subTitle: {
    color: "rgb(227,229,221)",
  },
  subTitleBold: {
    color: "#83857f",
    paddingBottom: "4vh",
  },

  sectionTwo: {},
  tabSection: {},
  titleName: {
    fontWeight: "800",
    textTransform: "uppercase",
  },

  colorBg: {
    color: "#2196f3",
  },
  colorBgBig: {
    color: "#1e85d7",
  },
  imgSection: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  topicTitle: {
    "&:hover": {
      cursor: "pointer",
      color: "#e91e63",
    },
  },
  selectedTopic: {
    color: "#e91e63",
  },
}));
const TermsAndCondition = () => {
  const classes = useStyles();
  const { token } = useAuthContext();
  const [rows, setRows] = React.useState([]);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    const controller = new AbortController();
    const headers = {
      Authorization: `Bearer ${token}`,
      //   "My-Custom-Header": "foobar",
    };
    async function anyFunction() {
      await axios
        .get(`${BaseUrl}/term-condition`, { headers })
        .then((res) => {
          if (res.status === 200) {
            setRows(res.data.term_conditions);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 404) {
              console.log("no data found!");
            }
          }
        });
    }
    anyFunction();

    return () => {
      controller.abort();
    };
  }, []);
  const changeTopic = (index) => {
    setSelected(index);
  };
  return (
    <Box>
      <Box className={classes.sectionOne}>
        <Grid className={classes.firstWrapper}>
          <Typography variant="h6" component={"div"}>
            Terms and Conditions
          </Typography>
          <Typography
            variant="h3"
            component={"div"}
            className={classes.colorBgBig}>
            Help Center
          </Typography>
          <Typography
            variant="subtitle2"
            component={"div"}
            className={classes.subTitle}>
            Welcome to Pantpoethu's terms and conditions
          </Typography>
        </Grid>
      </Box>
      {rows.length > 0 && (
        <Box className={classes.wrapper}>
          <Box className={classes.container}>
            <Grid container className={classes.sectionTwo}>
              <Grid
                item
                display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
                sm={0}
                sm={0}
                md={3}>
                <Typography
                  variant="body1"
                  className={classes.titleName}
                  component={"div"}
                  gutterBottom>
                  Topics
                </Typography>
                {rows.map((item, index) => (
                  <Box>
                    <Typography
                      variant="body1"
                      component={"div"}
                      onClick={() => changeTopic(index)}
                      gutterBottom
                      className={`${classes.topicTitle} ${
                        index === selected ? classes.selectedTopic : ""
                      }`}>
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={0} sm={0} md={1}></Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Box>
                  <Typography variant="h5" component={"div"} gutterBottom>
                    {rows[selected].title}
                  </Typography>
                  <Typography variant="body1" component={"div"} gutterBottom>
                    {rows[selected].content}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TermsAndCondition;
