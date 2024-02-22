import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
//   credentials: 'include',
  credentials: "same-origin",
  prepareHeaders: (headers,) => {
    // const token = localStorage.getItem("access");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ3MjRiODJlODU4OWU1NmRiN2Y0MTciLCJpYXQiOjE3MDg2MDYzNDQsImV4cCI6MTcxMTE5ODM0NH0.Sy9x880YOXoMO0zFYEunmOt-W5FR2dy5BoADyQYvGqg";
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
    }
    console.log(token);
    return headers;
  },
});


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({}),
});