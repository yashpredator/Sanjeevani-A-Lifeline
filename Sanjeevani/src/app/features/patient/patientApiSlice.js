import { apiSlice } from "../../api/apiSlice";

export const patientApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (payload) => {
        const qstr = Object.keys(payload).map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`
        );

        return {
          url: `/profile?${qstr}`,
        };
      },
    }),
  }),
});

export const { useGetProfileQuery } = patientApiSlice;
