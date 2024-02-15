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
import Login from "../login/Login";

const pages = ["Doctors Login", "Our Services", "About Us"];
const settings = ["Profile", "Dashboard", "Logout"];

function Landing() {
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
  // const handleProfileClick = () => {
  //   window.location.href = '/PatientDetails';
  // };

  return (
    <>
      <div className="flex flex-col">
        <AppBar
          position="static"
          sx={{
            background: "linear-gradient(to right, #b3e0f0, #004080)", // Replace with your color values
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <div>
                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }} /> */}
                <img
                  className="size-12 ml-7 mt-1 hover:cursor-pointer"
                  src="./logosan.png"
                  alt="No image"
                  onClick={() => {
                    window.location.href = "/Home";
                  }}
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
                    className="w-1/4 ml-0 mt-1 hover:cursor-pointer"
                    src="./Sanjeevani.png"
                    alt="No image"
                    onClick={() => {
                      window.location.href = "/Home";
                    }}
                  />
                </Typography>
              </div>

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
                    <MenuItem
                      key={page}
                      onClick={() => {
                        handleCloseNavMenu();
                      }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

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
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "space-evenly",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      // Redirect based on the setting
                      switch (page) {
                        case "Doctors Login":
                          window.location.href = "/Doc-Reg";
                          break;
                        case "About Us":
                          window.location.href = "";
                          break;
                        case "Our Services":
                          window.location.href = "";
                          break;
                        default:
                          // Handle default case, if necessary
                          handleCloseNavMenu();
                          break;
                      }
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        // Close the user menu
                        handleCloseUserMenu();
                        // Redirect based on the setting
                        switch (setting) {
                          case "Profile":
                            window.location.href = "/PatientDetails";
                            break;
                          case "Dashboard":
                            window.location.href = "/Login";
                            break;
                          case "Logout":
                            // Perform logout operation, e.g., clearing session or local storage
                            // Then redirect to the login page
                            // For demonstration, let's assume direct redirection
                            window.location.href = "/Login";
                            break;
                          default:
                            // Handle default case, if necessary
                            handleCloseUserMenu();
                            break;
                        }
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <div className="w-full flex-grow relative">
          <img
            className="w-full h-full object-cover ml-7 mt-[-30px] mb-[-10]"
            src="./signupbg.png"
            alt="Background"
            style={{ maxWidth: "100%" }}
          />
          <div className="flex flex-row ">
            <button
              className="absolute bg-gradient-to-r from-blue-900 to-blue-400 top-3/4 left-40 ml-5 transform -translate-x-1/2 -translate-y-1/2  bg-blue-500 text-white py-2 px-5 rounded-full"
              onClick={() => {
                window.location.href = "/Login";
              }}
            >
              Login
            </button>

            <button
              className="absolute bg-gradient-to-r from-green-900 to-green-400 top-3/4 left-60 transform ml-20 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-full"
              onClick={() => {
                window.location.href = "./Signup";
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
