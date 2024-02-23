import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  doctor: false,
  appointments: [],
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatient: (state, action) => {
      const {name, age, doctor} = action.payload;
      state.name = name;
      state.age = age;
      state.doctor = doctor;
    },
    addAppointments: (state, action) => {
      state.appointments = [...state.appointments, action.payload];
    },
  },
});

export const getAppointments = (state) => state.patient.appointments;
export const { setPatient, addAppointments } = patientSlice.actions;
export default patientSlice.reducer;
