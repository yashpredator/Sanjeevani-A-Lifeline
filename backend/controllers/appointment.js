const Appointment = require("../models/connection/appointment.js");
const Doctor = require("../models/doctor/admin.js");
const Patient = require("../models/patient/user.js");

const bookAppointment = async (req, res) => {
  const { username, appointment_date, age, sex, medical_condition } = req.body;
  const patient_id = req.user._id; // Assuming you have user authentication and user ID is stored in req.user
  const doctor_id = req.params.id;

  try {
    const doctor = await Doctor.findById(doctor_id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const patient = await Patient.findById(patient_id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const newAppointment = new Appointment({
      patient_id,
      doctor_id,
      appointment_date,
      age,
      sex,
      medical_condition,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully", newAppointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAppointments = async (req, res) => {
  const doctor_id = req.user._id; // Assuming you have user authentication and user ID is stored in req.user

  try {
    const appointments = await Appointment.find({ doctor_id }).populate("patient_id", "name email phone");

    if (!appointments.length) {
      return res.status(404).json({ message: "No appointments found" });
    }

    res.status(200).json({ message: "Appointments retrieved successfully", appointments });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { bookAppointment, getAppointments };
