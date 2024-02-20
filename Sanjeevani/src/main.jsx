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

import {Provider} from 'react-redux'
import { store } from './app/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
       <App/>
    </Provider>
    
  </React.StrictMode>,
=======
     <App/>         
  </React.StrictMode>
  </AuthProvider>,
>>>>>>> 1ad6df3da6713ace98ac5dc82d9f46f8b5528c2d
)
