import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [medicalCondition, setMedicalCondition] = useState("");
  const navigate = useNavigate();
  const { doctorId } = useParams(); // Get doctorId from route parameters

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post(`http://localhost:8800/appointment/${doctorId}`, {
        username,
        appointment_date: selectedDate,
        age,
        sex,   
        medical_condition: medicalCondition,
      });

      if (response.status === 201) {
        alert("Appointment booked successfully!");
        navigate("/appointments");
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("There was an error booking the appointment!", error);
      alert("There was an error booking the appointment. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-blue-900 ">
        <div className="flex flex-row">
          <div className=" mt-2 ml-3 size-14 hover:cursor-pointer">
            <img
              src="./Images/whitelogo.png"
              alt="No logo"
              onClick={() => {
                navigate("/Home");
              }}
            />
          </div>
          <div className=" ml-3 mt-5 size-40 hover:cursor-pointer">
            <img
              src="./Images/whitesanjeevani.png"
              onClick={() => {
                navigate("/Home");
              }}
            />
          </div>
        </div>
        <div className="text-white text-5xl p-2 font-serif">
          Radhika Vishwanatham
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className=" ml-4 flex flex-col w-7/12">
          <div className=" p-10 font-serif font-medium max-w-xl">
            <div className="flex flex-col">
              <div className=" bg-purple-200 w-full mb-10">
                <TextField
                  className="w-full "
                  label="User Name"
                  color="secondary"
                  placeholder="Enter the User Name"
                  focused
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex sm:flex-row flex-col mb-7">
                <div className="bg-purple-200 w-1/4 mr-3">
                  <TextField
                    className=" w-full "
                    label="Age"
                    color="secondary"
                    placeholder="Age"
                    focused
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="bg-purple-200 w-1/4 sm:mt-0 mt-3">
                  <TextField
                    className="w-full "
                    label="Sex"
                    color="secondary"
                    placeholder="Sex"
                    focused
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3 bg-purple-200 w-full">
                <TextField
                  className="w-full"
                  id="filled-textarea"
                  label=""
                  placeholder="Any important medical condition"
                  multiline
                  variant="filled"
                  value={medicalCondition}
                  onChange={(e) => setMedicalCondition(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="ml-7 flex flex-row">
            <div className="p-3">
              <Button
                className=" rounded-3xl"
                variant="contained"
                href="#contained-buttons"
                onClick={handleBooking}
              >
                Book Now
              </Button>
            </div>
            <div>
              <div className="p-3 ml-2">
                <DatePicker
                  className="rounded-xl hover:cursor-pointer bg-blue-200 px-2 py-2"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  isClearable
                  placeholderText="Pick a date"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" -mt-40 size-80">
          <img src="./Images/doctoronprofile.png" />
        </div>
      </div>
    </>
  );
};

export default Booking;
