import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import PatientDetails from './components/Patient/PatientDetails.jsx'
import Login from './components/login/Login.jsx'
import Signup from './components/Landing/Landing.jsx'
import { AuthProvider } from './store/auth.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
     <App/>         
  </React.StrictMode>
  </AuthProvider>,
)
