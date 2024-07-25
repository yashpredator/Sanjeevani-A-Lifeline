const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the patient schema
const doctorSchema = new Schema({
    doctor: { type: String, required: false },
    date: { type: Date, required: false },
    name: { type: String, required: false },
    age: { type: String, required: false },
    sex: { type: String, required: false },
    status: { type: Boolean, required: false }
});

// Define the doctor schema
const appointPatient = new Schema({
    patient: { type: String, required: true, unique:true },
    appointments: [doctorSchema]
});

// Create a Doctor model using the schema
const AppointmentP = mongoose.model('appointmentP', appointPatient);

module.exports = AppointmentP;