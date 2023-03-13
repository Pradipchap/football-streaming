// import React from 'react'
// import { Close, Menu } from "@mui/icons-material";
// import { Link } from 'react-router-dom';

// export default function Navbar(props) {
//   return (
//     <nav
//     className={`list-none flex w-full bg-blau max-tablet:justify-between max-tablet:flex-col`}
//   >
//     <div className="flex justify-between">
//       <Link
//         className={`px-5 text-xl font-bold py-2     text-white hover:text-red-800 `}
//       to='/'
//       >
//         Nepsport
//       </Link>
//       <li
//         className="hamburger px-5 text-xl font-semibold py-3 text-white tablet:hidden "
//         onClick={props.menuclose}
//       >
//         {props.menu === "closed" ? (
//           <Menu fontSize="large" />
//         ) : (
//           <Close fontSize="large" />
//         )}
//       </li>
//     </div>
//     <Link
//       className={`px-5 text-xl font-bold py-2     text-white hover:text-red-800 max-tablet:${
//         props.menu === "closed" && "hidden"
//       } `}
//       to='/'
//     >
//       Home
//     </Link>
//     <Link
//       className={`px-5 text-xl font-bold py-2     text-white hover:text-red-800 max-tablet:${
//         props.menu === "closed" && "hidden"
//       } `}
//        to='/ucl'
//     >
//       UCL
//     </Link>
//     <li
//       className={`px-5 text-xl font-bold py-2     text-white hover:text-red-800 max-tablet:${
//         props.menu === "closed" && "hidden"
//       } `}
//     >
//       Laliga
//     </li>
//     <li
//       className={`px-5 text-xl font-bold py-2     text-white hover:text-red-800 max-tablet:${
//         props.menu === "closed" && "hidden"
//       } `}
//     >
//       PL
//     </li>
//     <li
//       className={` ligue px-5 text-xl font-semibold py-2 text-white hover:text-red-800 max-tablet:${
//         props.menu === "closed" && "hidden"
//       } `}
//     >
//       {" "}
//       Ligue 1
//     </li >
//     <Link className={` ligue px-5 text-xl font-semibold py-2 text-white hover:text-red-800 max-tablet:${
//         props.menu === "closed" && "hidden"
//       } `} to="/login">Login</Link>
//   </nav>
//   )
// }
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import Modalcomponent from "./modalcomponent";
import { Login } from "@mui/icons-material";

function ResponsiveAppBar(props) {
  const [open, setopen] = useState(false);

  const handlelogin = (get) => {
    setopen(get);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loginbtnSt, setloginbtnSt] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pages = [
    { league: "Live matches", path: "/ucl" },
    { league: "Laliga", path: "" },
    { league: "Modal", path: "/modal" },
    { league: "login", path: "/login" },
    { league: "admin", path: "/admin" },
  ];
  //signout function
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("user is siged out successfully");
        // setloginBtnStatus(false);
        localStorage.setItem("loginStatus", false);
        props.getloginbtnstatus(false);
      })
      .catch((error) => {
        // An error happened.
        // console.log("user signout unsuccesfull");
      });
  };
  const settings = [
    {
      name: "Profile",
      // fn: () => {
      //   setopen(true);

      //   handleCloseUserMenu();
      // },
    },
    {
      name: "Account",
      // fn: () => {
      //   setopen(true);

      //   handleCloseUserMenu();
      // },
    },
    {
      name: "Dashboard",
      // fn: () => {
      //   setopen(true);

      //   handleCloseUserMenu();
      // },
    },
    {
      name: props.lgs === true ? "logout" : "login",
      fn:
        props.lgs === true
          ? signout
          : () => {
              setopen(true);
              handleCloseUserMenu();
            },
    },
  ];
  //function for login button status

  //signout func

  return (
    <AppBar position="static" style={{ backgroundColor: "#004d98" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">Logo</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.league} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.path}>{page.league}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">Logo</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.league}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={page.path}>{page.league}</Link>
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.lgs && (
              <p className="mr-2 text-xl">{auth.currentUser.email}</p>
            )}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {props.lgs === true ? (
                  <Avatar
                    className="a"
                    alt="Remy Sharp"
                    sx={{ bgcolor: "#a50044" }}
                    // src={`https://ui-avatars.com/api/?size=150&background=a50044&color=FFFF&rounded=true&name=${auth.currentUser.email}`}
                  >
                    {auth.currentUser.email[0]}
                  </Avatar>
                ) : (
                  <p className="bg-grana text-white py-2 px-5 rounded-3xl text-sm font-bold ">
                    Login
                  </p>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={setting.fn}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Modalcomponent
        op={open}
        handlelogin={handlelogin}
        getloginbtnstatus={props.getloginbtnstatus}
        lgs={props.lgs}
      />
    </AppBar>
  );
}
export default ResponsiveAppBar;
