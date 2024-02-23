import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
//   credentials: 'include',
  credentials: "same-origin",
  prepareHeaders: (headers,) => {
    // const token = localStorage.getItem("access");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ4ZGY5MDE0MDEwYjYzYzM5NWQ0ODAiLCJpYXQiOjE3MDg3MTE4MjQsImV4cCI6MTcxMTMwMzgyNH0.081UmclNHQvDOtNAE2EhV6npp_V7aWKasAiTcF4_w68";
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