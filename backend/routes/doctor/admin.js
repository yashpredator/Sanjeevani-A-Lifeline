const express = require("express");
// const router = express.Router();
const user=require("../../controllers/doctor/admin.js");
// import express from 'express';


const router = express.Router();
const { 
    loginDoctor,
    signup,
    logoutDoctor,
    getDoctorProfile,
    updateDoctorProfile,
    getOneDoc
 } =require( '../../controllers/doctor/admin.js');

// import { protect } from '../middleware/authMiddleare.js';
const {protect,safety}=require("../../middleware/authDoc.js")

router.post('/doctor/signup',signup);
router.post('/doctor/login', loginDoctor);
// router.post('/register',registerUser);
router.post('/doctor/logout', logoutDoctor);

// router.get('/doctor', user.getDoctors) //It is defined
// router.get('/book',user.getAppointmentD); //It is defined

// router.route('/doctor/profile')
//     .get(safety,getDoctorProfile)
//     .put(safety,updateDoctorProfile);

// router.route('/doctor/getonedoc').get(user.getOneDoc)

// router.route('/doctor/')
module.exports=router;