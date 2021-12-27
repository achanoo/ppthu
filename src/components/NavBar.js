/** @format */

import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/images/logo.png";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { CustomButton } from "../layout/CutomerButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuButton from "../layout/MenuItem";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import PcNavbar from "../layout/PcNavbar";
import Sidebar from "../layout/Sidebar";
import { useAuthContext } from "../context/AuthContext";

//profile menu
import ProfileMenu from "./../layout/profileMenu";
import IconBar from "./../components/IconBar";
import SearchInput from "../layout/SearchInput";
import { CButton } from "../layout/CCButton";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  color: "#000",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "34ch",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "autoc",
      },
    },
  },
}));

const CreatePantpoe = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  paddingX: "50px",
  paddingY: "20px",

  marginLeft: 0,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  "& a": {
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.725rem",
    },
  },
}));

export default function SearchAppBar() {
  const theme = useTheme();
  const ismatch = useMediaQuery(theme.breakpoints.up("md"));

  const { isAuthenticated, logout } = useAuthContext();
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: 0 }}>
      <AppBar position="static" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <>
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={{ width: 54, height: 54 }}
            />
            {ismatch || (
              <>
                <Grid flexGrow="1"></Grid>
              </>
            )}
            {isAuthenticated && ismatch && (
              <>
                <Grid flexGrow="1"></Grid>
                <Grid>
                  <IconBar />
                </Grid>
                <Grid flexGrow="1"></Grid>
              </>
            )}
            {isAuthenticated || (ismatch && <PcNavbar />)}
            {isAuthenticated && ismatch && <SearchInput />}

            {isAuthenticated && ismatch && <ProfileMenu />}

            {isAuthenticated || (
              <>
                <Button style={{ color: "#000" }} onClick={goToLogin}>
                  Log In
                </Button>

                <CButton
                  size="small"
                  style={{ color: "#fff" }}
                  onClick={goToRegister}>
                  <span
                    style={{
                      fontSize: "0.852rem",
                      display: "flex",
                      alignSelf: "center",
                    }}>
                    Create a Pantpoe
                  </span>
                </CButton>
              </>
            )}
            {isAuthenticated && (ismatch || <Sidebar logout={logout} />)}
          </>
        </Toolbar>
      </AppBar>
      {isAuthenticated &&
        (ismatch || (
          <AppBar
            position="fixed"
            sx={{ top: "auto", bottom: 0, backgroundColor: "#fff" }}>
            <Toolbar
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "3px",
              }}>
              <IconBar />
            </Toolbar>
          </AppBar>
        ))}
    </Box>
  );
}
