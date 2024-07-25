const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const patientSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  doctor: { type: Boolean, required: true, default: false },
  name: { type: String, required: false, default:"" },
  age: { type: Number, required: false,default:0 },
  address: { type: String, required: false,default:"" },
  phone: { type: String, required: false,default:"",unique:false},
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email address");
      }
    },
  }
});

patientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
patientSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const RPatient = new mongoose.model("patient", patientSchema);

module.exports = RPatient;