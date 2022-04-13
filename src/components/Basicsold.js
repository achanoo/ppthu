/** @format */

import React, { useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import JoditEditor from "jodit-react";
import Link from "@mui/material/Link";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import "../assets/style.css";
import Avatar from "@mui/material/Avatar";
import { CButton } from "../layout/CCButton";
import Editor from "./Editor";
import defaultCover from "./../assets/images/download.png";
import { useAuthContext } from "../context/AuthContext";

const Basic = ({ user, changeTab }) => {
  const cover = useRef(null);
  const profile = useRef(null);
  const editor = useRef(null);
  const { upgradetoCreator, user: authUser } = useAuthContext();
  const [content, setContent] = useState("");
  const [state, setState] = useState({
    name: "",
    desc: "",
    profile: "",
    cover: "",
    profile_url: "",
    plans: [],
    new_profile_image: "",
    new_cover: "",
  });

  const showimage = (image) => {
    return URL.createObjectURL(image);
    // return window.URL.createObjectURL(image);
  };

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const inputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "new_cover" || name === "new_profile_image") {
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

  const getValue = (data) => {
    setContent(data);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", state.name);
    formData.append("role_id", 3);
    formData.append(
      "cover_photo",
      state.new_cover === "" ? state.cover : state.new_cover
    );
    formData.append(
      "profile_image",
      state.new_profile_image === ""
        ? state.profile_image
        : state.new_profile_image
    );
    formData.append(
      "categories",
      JSON.stringify(localStorage.getItem("selectedCategory"))
    );

    formData.append("bio", content);
    formData.append("profile_url", state.profile_url);
    formData.append(
      "content_status",
      Number(localStorage.getItem("sexual_content")) === 2 ? 1 : ""
    );
    try {
      upgradetoCreator(formData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      name: user?.user_info?.user?.name || user?.user?.name || "",
      desc: user?.description || "",
      profile: user?.user_info?.profile_image || user?.profile_image,
      cover: user?.user_info?.cover_photo || user?.cover_photo,
      profile_url: user?.user_info?.profile_url || "",
      plans: user?.subscription_plans || [],
      region_id: user?.user_info?.region?.id || user?.user?.region_id,
    }));
    setContent(user?.user_info?.bio || "nonw");
  }, [user]);

  return (
    <Grid sx={{ width: "100%" }} container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        justifyContent="center"
        alignItems="center">
        <Typography gutterBottom variant="h4" textAlign="center">
          Basics
        </Typography>
        <Typography gutterBottom textAlign="center">
          Set your creator details
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={8}
        direction="column"
        spacing={2}>
        <Grid item>
          <Card style={{ borderRadius: "0" }}>
            {/* <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                        /> */}
            <CardContent>
              <Grid container direction="row" spacing={3}>
                <Grid item container>
                  <Grid item xs={4} sm={4} md={4}>
                    <p className="input-label"> Name of Patreon page </p>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8}>
                    <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Required"
                      name="name"
                      onChange={inputChange}
                      value={state.name}
                      placeholder="pseudonym, band name, personal name, whatever"
                      color="info"
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4} sm={4} md={4} alignSelf="center">
                    <p className="input-label"> What are you creating? </p>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8}>
                    <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      name="desc"
                      onChange={inputChange}
                      label="Required"
                      value={state.desc}
                      placeholder="music videos, water color paintings, This American Life"
                      color="info"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            {/* <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                        </CardActions> */}
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ borderRadius: "0" }}>
            {/* <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                        /> */}
            <CardContent>
              <Grid container direction="row" spacing={3}>
                <Grid item container>
                  <Grid item xs={4} sm={4} md={4} alignSelf="center">
                    <p className="input-label"> Profile photo </p>
                    <p className="input-required subtitle">Required</p>
                    <span className="subtitle">
                      We recommend a 256px by 256px image.
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    alignSelf="center"
                    className="container">
                    <Avatar
                      src={
                        (state.new_profile_image &&
                          showimage(state.new_profile_image)) ||
                        state.profile_image
                      }
                      alt="Avatar"
                      className="image circle-img"
                    />

                    {/* <input type="file" name="file" id="profile1" className="profile" />
                                        <label htmlhtmlFor="profile1" className="show-profile"></label> */}
                    <div className="overlay">
                      <div className="upload">
                        <input
                          type="file"
                          name="new_profile_image"
                          onChange={inputChange}
                          ref={profile}
                          id="profile"
                          className="profile"
                          accept="image/*"
                        />
                        <label
                          htmlFor="profile"
                          className="show-profile"></label>
                        <div>Edit</div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4} sm={4} md={4} alignSelf="center">
                    <p className="input-label"> Cover photo </p>
                    <p className="input-required subtitle">Required</p>
                    <span className="subtitle">
                      We recommend an image at least 1600px wide and 400px tall.
                    </span>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8} alignSelf="center">
                    <input
                      type="file"
                      name="new_cover"
                      onChange={inputChange}
                      ref={cover}
                      id="cover-photo"
                      accept="image/*"
                      className="cover-photo"
                    />
                    <div className="show-cover-photo">
                      <img
                        src={
                          (state.new_cover && showimage(state.new_cover)) ||
                          defaultCover
                        }
                        alt="div"
                        onClick={() => cover.current.click()}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4} sm={4} md={4} alignSelf="center">
                    <p className="input-label"> Patreon page URL </p>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8}>
                    <p style={{ marginTop: "20px", display: "inline-block" }}>
                      pantpoe.com/
                    </p>
                    <TextField
                      style={{ display: "inline-block" }}
                      id="outlined-required"
                      name="profile_url"
                      onChange={inputChange}
                      placeholder="creator account"
                      color="info"
                      value={state.profile_url}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            {/* <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                        </CardActions> */}
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ borderRadius: "0" }}>
            {/* <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                        /> */}
            <CardContent>
              <Grid container direction="row" spacing={3}>
                <Grid item container>
                  <Grid alignSelf="center">
                    <p className="input-label"> About your Patreon page </p>
                    <p className="input-required subtitle">Required</p>
                    <span className="subtitle">
                      This is the first thing potential patrons will see when
                      they land on your page, so make sure you paint a
                      compelling picture of how they can join you on this
                      journey.
                    </span>
                  </Grid>
                </Grid>

                <Grid item alignSelf="center" style={{ width: "100%" }}>
                  <Editor getValue={getValue} contents={content} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item>
        <CButton fullWidth onClick={handleSubmit}>
          Save Changes
        </CButton>
        <Card style={{ borderRadius: "0", marginTop: "12px" }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              CHECKLIST
            </Typography>
            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                {state.name ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <RadioButtonUnchecked style={{ color: "red" }} />
                )}
              </Grid>
              <Grid item xs={10} sm={10} md={11} lg={11}>
                <span style={{ color: state.name ? "green" : "red" }}>
                  Set your page name
                </span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                {state.desc ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <RadioButtonUnchecked style={{ color: "red" }} />
                )}
              </Grid>
              <Grid item xs={10} sm={10} md={11} lg={11}>
                <span style={{ color: state.desc ? "green" : "red" }}>
                  Create your headline
                </span>
                <div className="input-required subtitle">
                  Required.{" "}
                  <Link href="#" className="blue-link">
                    Add Now
                  </Link>{" "}
                </div>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                {state.profile ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <RadioButtonUnchecked style={{ color: "red" }} />
                )}
              </Grid>
              <Grid item xs={10} sm={10} md={11} lg={11}>
                <span style={{ color: state.profile ? "green" : "red" }}>
                  Upload profile picture
                </span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                {state.cover ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <RadioButtonUnchecked style={{ color: "red" }} />
                )}
              </Grid>
              <Grid item xs={10} sm={10} md={11} lg={11}>
                <span style={{ color: state.cover ? "green" : "red" }}>
                  Upload cover image
                </span>
                <div className="input-required subtitle">
                  Required.{" "}
                  <Link href="#" className="blue-link">
                    Add Now
                  </Link>{" "}
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                {state.plans.length > 0 ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <RadioButtonUnchecked style={{ color: "red" }} />
                )}
              </Grid>
              <Grid item xs={10} sm={10} md={11} lg={11}>
                <span
                  style={{
                    color: state.plans.length > 0 ? "green" : "red",
                  }}>
                  Create about Tiers
                </span>
                <div className="input-required subtitle">
                  Required.{" "}
                  <Link
                    href="#"
                    onClick={() => changeTab(1)}
                    className="blue-link">
                    Add Now
                  </Link>{" "}
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                {state.region_id ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <RadioButtonUnchecked style={{ color: "red" }} />
                )}
              </Grid>
              <Grid item xs={10} sm={10} md={11} lg={11}>
                <span style={{ color: state.region_id ? "green" : "red" }}>
                  Finish account details
                </span>
                <div className="input-required subtitle">
                  Required.{" "}
                  <Link
                    href="#"
                    onClick={() => changeTab(2)}
                    className="blue-link">
                    Add Now
                  </Link>{" "}
                </div>
              </Grid>
            </Grid>
            <Typography gutterBottom variant="h6" component="div">
              <p className="input-label">LEARN MORE</p>
            </Typography>
            <ul>
              <li>
                <Link href="#" className="gray-link">
                  Membership 101: Best Practices
                </Link>
              </li>
              <li>
                <Link href="#" className="gray-link">
                  How to choose your business model
                </Link>
              </li>
              <li>
                <Link href="#" className="gray-link">
                  How to talk about Patreon to your audience
                </Link>
              </li>
              <li>
                <Link href="#" className="gray-link">
                  Knowing your worth as a creator
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Basic;
