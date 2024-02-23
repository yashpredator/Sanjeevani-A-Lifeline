import { apiSlice } from "../../api/apiSlice";

export const doctorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (put) => ({
        url: "/doctor/profile",
        method: "PUT",
        body: put,
      }),
    }),
  }),
});

export const { useRegisterMutation } = doctorApiSlice;
