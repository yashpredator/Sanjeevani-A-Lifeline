import React from 'react';
//  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/home/Home';
import DocProf from './components/docprofile/DocProf';
import PatientNav from './components/Patient/PatientNav';
import PatientDetails from './components/Patient/PatientDetails';
import Booking from './components/Booking/Booking';




function App() {
  return (

  <>
  
    <Booking/>
  </>
   
   
  );
}

export default App;
