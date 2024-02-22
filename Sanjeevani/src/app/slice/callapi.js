// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchAppointments= createAsyncThunk('fetchAppointmnts', async()=>{
//     const response= await fetch('//url')
//     return response.json();
// })

// export const fetchPatientData= createAsyncThunk('fetchPatientData', async()=>{
//     const response= await fetch('//url')
//     return response.json();
// })





// const PatientSlice = createSlice({
//     name: 'patient',
//     initialState: {
//       data: null,
//       status: 'idle',
//       error: null,
//     },
//     extraReducers: (builder) =>{
//         builder.addCase(fetchPatientData.pending,(state,action)=>{
//             state.status='loading'
//         });
//         builder.addCase(fetchPatientData.fulfilled,(state,action)=>{
//             state.status='success';
//             state.data=action.payload;
//         });
//         builder.addCase(fetchPatientData.rejected,(state,action)=>{
//             state.status='failed';
//             state.error='action.error.message';
//         });

    
//     },
//   });
    

// const AppointmentSlice= createSlice({
//     name:
//      initialState=[{}],
//     reducer:{

//     },
//     extraReducers: (builder) =>{
//         builder.addCase(fetchAppointments.pending,(state,action)=>{
//             // for pending url
//         });
//         builder.addCase(fetchAppointments.fulfilled, (state,action)=>{
//             //for fulfilled ul
 
//         })

//         builder.addCase(fetchAppointments.rejected,(state,action)=>{
//             //for error
//         })

//     }
// })
// export PatientSlice.reducer;

// export   AppointmentSlice.reducer;