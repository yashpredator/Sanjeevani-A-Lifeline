const express = require("express");
// const router = express.Router();
const user=require("../../controllers/patient/user.js");
// import express from 'express';

const router = express.Router();
const { 
    loginPatient,
    signup,
    logoutPatient,
    getUserProfile,
    updateUserProfile,
    addPatientToDoctor
 } =require( '../../controllers/patient/user.js');
// import { protect } from '../middleware/authMiddleare.js';
// const {protect}=require("../../middleware/auth.js")
const {safety} = require("../../middleware/auth.js");
const { getProfile } = require("../../controllers/doctor/admin.js");

router.post('/signup',signup);
router.post('/login',loginPatient);
// router.post('/register',registerUser);
router.post('/logout', logoutPatient);
router.post('/book',addPatientToDoctor);
router.post('/review',safety,user.reviewProfile);

router.get('/book',user.getAppointmentP); //It is defined
router.get('/review',getProfile); //It is defined 
// router.get('/doc)

router.route('/profile')
    .get(safety,getUserProfile)
    .put(safety,updateUserProfile);

module.exports=router;