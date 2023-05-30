import { apiSlice } from "./apiSlice";

const CONTACT_URL = '/api/contact';

const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendContact: builder.mutation({
      query: (data) => ({
        url: CONTACT_URL,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSendContactMutation } = contactApi;
