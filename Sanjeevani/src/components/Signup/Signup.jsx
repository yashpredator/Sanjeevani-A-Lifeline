import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";
import { Route } from "react-router-dom";
import { useAuth } from "../../store/auth";
import ReactSwitch from "react-switch";
import { useState } from "react";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const {storeToken} = useAuth();
  const [checked, setChecked] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    if (password === confirmPassword) {
      // Proceed with signup logic here
      try {
        let url = "http://localhost:3000/signup"
        checked == true ? url = "http://localhost:3000/doctor/signup" : url = "http://localhost:3000/signup"
        
        axios
          .post(url, {
            // Your JSON parameters here
            username: data.get("UserName"),
            email: data.get("email"),
            password: password,
          })
          .then((response) => {
            //Logic of successful signup should be shown here/ or reroute to home page as soon as signup is completed
            const token = response.data;
            console.log(token);
            localStorage.setItem('doctor',checked);
            checked == true ? window.location.href = './Doctor-Profile' : window.location.href = './home'
            storeToken(token.token);
            // window.location.href = "/home";
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      alert("Passwords do not match. Please check again.");
    }
  };
 
  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}

          <div className="mb-3">
          <div className="mb-3 -mt-[8%]"></div>
            <img className="size-16" src="./Images/logo.png" />
          </div>
          
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={24} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="UserName"
                  required
                  fullWidth
                  id="UserName"
                  label="UserName"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="Confirm password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive updates and marketing promotions via email from Sanjeevani"
                />
                
              </Grid>
             
             
            </Grid>
            <span className="app mt-4 flex flex-row" style={{ textAlign: "center" }}>
              <ReactSwitch className="ml-[30%] mt-[0%]" checked={checked} onChange={handleChange} />
              <span className="ml-[3%] text-lg text-blue-800 font-normal">For Doctor</span>
            </span>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
