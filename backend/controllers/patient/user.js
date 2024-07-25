// import asyncHandler from 'express-async-handler';
// import User from '../models/user.js';
// import generateToken from '../utils/generateToken.js';
const asyncHandler = require("express-async-handler");
const User = require("../../models/patient/user.js");
const Doctor = require("../../models/doctor/admin.js");
const generateToken = require("../../utils/generateToken.js");
const AppointmentD = require("../../models/connection/appointments.js");
const AppointmentP = require("../../models/connection/appointments.js");
const Review = require("../../models/connection/reviews.js");
const bcrypt = require("bcrypt");

const authUser = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ mssg: "Not found" });

    const isMatch = await user.matchPassword(password);

    console.log(isMatch);

    if (isMatch) {
      const token = generateToken(res, user._id);
      res.json({
        token,
      });
    } else {
      res.status(400).json({ error: "Password not matched" });
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

const signup = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await User.findOne({ email });
    const user = await User.create({
      username,
      email,
      password,
    });
    const token = generateToken(res, user._id);
    res.status(201).json({
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "logged out" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json(userData);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const updates = req.body;
  const userData = req.user;
  const patientId = userData.username;
  try {
    const updatedPatient = await User.findOneAndUpdate({ _id: patientId }, updates, { new: true });
    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const reviewProfile = asyncHandler(async (req, res) => {
  try {
    const userData = req.user;
    const { doctorId, stars, reviews } = req.body;
    // Create a review object with user id, stars, and review text
    const review = {
      patientId: userData.username,
      stars: stars,
      texts: reviews,
    };

    // Find the doctor by id
    let doctor = await Review.findOne({ doctorId: doctorId });
    let itexist = await Doctor.findOne({ username: doctorId });
    console.log(itexist);

    if (!doctor && itexist) {
      // If doctor doesn't exist, return an error
      doctor = new Review({ doctorId: doctorId, patients: [] });
      // Add the review to the doctor's array of reviews
      doctor.patients.push(review);

      // Save the updated doctor object
      await doctor.save();

      res
        .status(200)
        .json({ success: true, message: "Review added successfully." });
    } else if (doctor && itexist) {
      doctor.patients.forEach((patient, index) => {
        console.log(patient);
        if (patient.patientId === userData.username) {
          doctor.patients.splice(index, 1); // Remove the review from the array
        }
      });
      // Add the review to the doctor's array of reviews
      doctor.patients.push(review);

      // Save the updated doctor object
      await doctor.save();

      res
        .status(200)
        .json({ success: true, message: "Review added successfully." });
    } else {
      res.status(401).send({ msg: "Doctor not registered" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: "Failed to add review.", error });
  }
});

// Controller function to add patient details to a doctor's appointments
const addPatientToDoctor = async (req, res) => {
  try {
    // Create an object with patient details
    const userData = req.user;

    const { doctorName, date, status } = req.body;

    const newPatient = {
      patient: userData.username,
      date: date,
      name: userData.name,
      age: userData.age,
      sex: userData.sex,
      status: false,
      condition: status,
    };

    const newDoctor = {
      doctor: doctorName,
      date: date,
      name: userData.name,
      age: userData.age,
      sex: userData.sex,
      status: false,
      condition: status,
    };

    let doctor = await AppointmentD.findOne({ doctor: doctorName });
    let patient = await AppointmentP.findOne({ patient: userData.username });
    if (!doctor) {
      doctor = new AppointmentD({ doctor: doctorName, appointments: [] });
    }
    if (!patient) {
      patient = new AppointmentP({
        patient: userData.username,
        appointments: [],
      });
    }
    // console.log(userData, doctorName)
    doctor.appointments.push(newPatient);
    patient.appointments.push(newDoctor);
    await doctor.save();

    res.status(200).json({ newPatient, newDoctor });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to add patient details.",
      error,
    });
  }
};

const getAppointmentP = asyncHandler(async (req, res) => {
  const patientId = req.params.patientId; // Assuming you'll pass patientId as a URL parameter

  try {
    const patient = await AppointmentP.findOne({ patient: patientId });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(patient.appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  authUser,
  signup,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  reviewProfile,
  addPatientToDoctor,
  getAppointmentP,
  reviewProfile,
  getAppointmentP
};
