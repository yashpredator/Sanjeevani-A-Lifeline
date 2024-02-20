import { configureStore } from '@reduxjs/toolkit'


export const store= configureStore({
    reducer:{
        patient: Patientreducer
    }
})

export default store

