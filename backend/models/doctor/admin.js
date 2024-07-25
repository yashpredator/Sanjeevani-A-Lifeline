const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  text: String,
  stars: Number,
  user_id: String,
});

const doctorSchema = new Schema({
  name: { type: String, required: false, default: "" },
  username: { type: String, required: true, unique: true },
  experience: { type: Number, required: false, default: "" },
  workplace: { type: String, required: false, default: "" },
  doctor: { type: Boolean, required: true, default: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email address");
      }
    },
  },
  password: { type: String, required: true },
  specialization: { type: String, required: false, default: "" },
  reviews: [reviewSchema],
});

doctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
doctorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const RDoctor = new mongoose.model("doctor", doctorSchema);

module.exports = RDoctor;