const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define patient schema
const patientSchema = new Schema({
  patientId: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    min: 1,
    max: 5
  },
  texts: String
});

// Define doctor schema
const doctorSchema = new Schema({
  doctorId: {
    type: String,
    unique: true,
    required: true
  },
  patients: [patientSchema] // Array of patient objects
});

// Create Doctor model
const Review = mongoose.model('review', doctorSchema);

module.exports = Review;