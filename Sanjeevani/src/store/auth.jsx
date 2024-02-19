import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
export const AuthContext = createContext();
import Login from "../components/login/Login";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  // const [checked, setChecked] = useState(false);
  const storeToken = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const userAuthentication = async() => {
    try {
      let url = "http://localhost:3000/profile"
      localStorage.getItem("doctor") === 'true' ? url = "http://localhost:3000/doctor/profile" : url = "http://localhost:3000/profile";
      // console.log(localStorage.getItem('doctor'))
      // localStorage.getItem('doctor')
      // console.log(checked)
      // checked == true ? url = 
      const response = await fetch(url,{method:"GET", headers:{
        Authorization: `Bearer ${token}`
      }}).catch((error)=>{<Route path='./login' element={Login}/>})

      if(response.ok){
        const data = await response.json();
        console.log("is coming: ", data);
        setUser(data);
      }
      else
      {
        // window.location.href = './login'
        <Route path='./login' element={Login}/>
        console.log('Not');
        
      }
    } catch (error) {
      // window.location.href = './login'
<Route path='./login' element={Login}/>
      console.log(error)
    }
  }

  useEffect(()=>{
    userAuthentication()
  },[]);

  return (
    <AuthContext.Provider value={{storeToken, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};