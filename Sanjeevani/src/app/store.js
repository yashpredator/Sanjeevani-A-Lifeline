import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import patientReducer from "./features/patient/patientSlice";

export const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    patient: patientReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: true,
});

export default store;
