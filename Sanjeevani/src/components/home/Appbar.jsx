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


const settings = ["Profile", "Dashboard", "Logout"];

function Home() {
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
              <div className='flex flex-row'>
                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }} /> */}
                <img
                  className="size-2/4 mb-4 ml-7 mt-3 hover:cursor-pointer"
                  src="./logosan.png"
                  alt="No image"
                  onClick={()=>{window.location.href = '/Home';}}
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
                    className="w-3/6 h-3/6 translate-x-5 mt-6 hover:cursor-pointer"
                    src="./Sanjeevani.png"
                    alt="No image"
                    onClick={()=>{window.location.href = '/Home';}}
                  />
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
                    <MenuItem key={setting} onClick={()=>{
                      handleCloseUserMenu();
                      // Redirect based on the setting
                      switch (setting) {
                        case "Profile":
                          window.location.href = "/PatientDetails";
                          break;
                        case "Dashboard":
                          window.location.href = "/";
                          break;
                        case "Logout":
                          // Perform logout operation, e.g., clearing session or local storage
                          // Then redirect to the login page
                          // For demonstration, let's assume direct redirection
                          window.location.href = "/";
                          break;
                        default:
                          // Handle default case, if necessary
                          handleCloseUserMenu();
                          break;
                      }
                    }}>
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
  )
}

export default Home
