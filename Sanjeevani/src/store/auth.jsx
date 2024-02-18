import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const storeToken = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const userAuthentication = async() => {
    try {
      const response = await fetch("http://localhost:3000/profile",{method:"GET",headers:{
        Authorization: `Bearer ${token}`
      }})

      if(response.ok){
        const data = await response.json();
        // console.log("is coming: ", data);
        setUser(data);
      }
    } catch (error) {
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