const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the patient schema
const patientSchema = new Schema({
    patient: { type: String, required: false },
    date: { type: Date, required: false },
    name: { type: String, required: false },
    age: { type: String, required: false },
    sex: { type: String, required: false },
    status: { type: Boolean, required: false },
    condition: {type: String, required:false}
});

// Define the doctor schema
const appointmentSchema = new Schema({
    doctor: { type: String, required: true, unique:true },
    appointments: [patientSchema]
});

// Create a Doctor model using the schema
const AppointmentD = mongoose.model('appointment', appointmentSchema);

module.exports = AppointmentD;