const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
    required: true,
  },
  appointment_date: {
    type: Date,
    required: true,
  },
  appointment_time: {
    type: String,
    required: true,
  },
  
  created_at: {
    type: Date,
    default: Date.now,
  },
  age:{type:String,required:true},
  sex:{type:String,required:true},
  medical_condition:{type:String,required:true}

});

// Update the updated_at field before saving
appointmentSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;
