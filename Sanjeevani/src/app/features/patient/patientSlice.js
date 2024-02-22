import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "A",
  age: 1,
  // appointments: [],
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatient: (state, action) => {
      console.log(action.payload);
      state = action.payload
      // state = {...state, ...action.payload};
      // state.age++;
    },
    addAppointments: (state, action) => {
      state.appointments = [...state.appointments, action.payload];
    },
  },
});

export const getAppointments = (state) => state.patient.appointments;
export const { setPatient, addAppointments } = patientSlice.actions;
export default patientSlice.reducer;
