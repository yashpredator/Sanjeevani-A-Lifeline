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
import { Popover } from "@mui/material";

const settings = ["Profile", "Dashboard", "Logout"];

function DocNav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const doctor = [
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
        lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Yashraj",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Cardiology",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Tathagat",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Surgeon",
      src: "./Images/YoungMan.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <AppBar
          position="static"
          sx={{
            background: "white", // Replace with your color values
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <div className="flex flex-row">
                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }} /> */}
                <img
                  className="size-2/4 mb-4 ml-1 mt-3"
                  src="./logosan.png"
                  alt="No image"
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: -50,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 500,
                    letterSpacing: ".0rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {/* Sanjeevani */}
                  <img
                    className="w-3/6 h-3/6 translate-x-5 mt-6"
                    src="./Sanjeevani.png"
                    alt="No image"
                  />
                </Typography>
                {/* Insert the new Typography component here */}
                <Typography
                  variant="body1"
                  sx={{
                    ml: 2,
                    display: { xs: "flex", md: "none" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".0rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Hello Sourav
                </Typography>
              </div>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".0rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Sanjeevani
              </Typography>
              <Box sx={{ flexGrow: 0 }}>
                <div className="flex flex-row">
                  <div className="text-black mr-5">
                    <img
                      src="./Images/message.png"
                      alt="No notification logo"
                      onClick={handleClick}
                    />
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div className="flex flex-col sm:w-96 sm:h-60 w-28 h-24 rounded-3xl">
                        <div className="w-full h-2/6 bg-blue-900">
                          <div className="sm:mt-8 ml-1 sm:font-bold text-white sm:text-xl font-normal text-xs mt:1 p-3">
                            Requests
                          </div>
                        </div>
                        <div className="flex flex-col mt-16">
                        {doctor.map(({name,lastname,src,time,disease})=>(

                        
                        <div className="sm:-mt-11 mr-1 ml-1 mb-1 mt-0 overflow-auto text-wrap">
                          <div className="flex flex-row h-[65%] rounded-full border-4">
                            <div className="flex flex-col justify-center px-3">
                              
                              <img
                                className="h-[80%] rounded-3xl"
                                src="./Images/YoungMan.png"
                                alt="No PP"
                              />
                            </div>
                            <div className="flex flex-col w-[60%] mt-2">
                              <div>
                                Sourav <b>Prosti</b>
                              </div>
                              <div className="flex flex-row">
                                <div className="mr-2">11 AM</div>
                                <div>Schizophernia</div>
                              </div>
                              <div className="flex flex-row justify-end ">
                                <div className="mr-1">
                                  <button className="bg-blue-900 border-2 border-blue-900 text-white rounded-3xl font-thin px-2 ">
                                    Accept
                                  </button>
                                </div>
                                <div>
                                <button className="border-2 border-black text-black  rounded-3xl font-thin px-2">
                                    Decline
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
))}
</div>
                      </div>
                    </Popover>
                  </div>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="./Doctor.png" />
                    </IconButton>
                  </Tooltip>
                </div>
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}

export default DocNav;
