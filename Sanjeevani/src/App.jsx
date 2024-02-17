import React from 'react';
//  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './App.css';
import Login from './components/login/Login';
import Landing from './components/Landing/Landing';
import Home from './components/home/Home';
import DocProf from './components/docprofile/DocProf';
import PatientNav from './components/Patient/PatientNav';
import PatientDetails from './components/Patient/PatientDetails';
import Booking from './components/Booking/Booking';
import Doctorreg from './components/doctorreg/Doctorreg';
import Disease from './components/Disease/Disease';
import Footer from './components/home/Footer';
import Profile from './components/DocPersonal/Profile';
import NearYou from './components/home/NearYou';


import SignUp from './components/Signup/Signup';
import UserProfile from './components/UserProfile/UserProfile';


const router = createBrowserRouter([
  {
    path: "",
    element: <Landing/>,

    
  },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "home",
      element: <Home />,

     
    },
    {
      path:"PatientDetails",
      element:<PatientDetails/>
    },
    {
      path: "Doctors",
      element:<DocProf/>
    },

  {
    path: "Book-your-doctor",
    element: <Booking/>
  },
  {
    path: "Doc-Reg",
    element: <Doctorreg/>
  },
  {
    path: "Disease",
    element: <Disease/>
  },
  {
    path: "Doctor-Profile",
    element: <Profile/>
  },

  {
    path:"Signup",
    element:<SignUp/>
  },
  {
    path:"UserProfile",
    element: <UserProfile/>
  },
  {
    path:"NearYou",
    element:<NearYou/>
  }
   
]);



function App() {
  return (

  <>
  
  <RouterProvider router={router} />
 

  
  </>
   
   
  );
}

export default App;
