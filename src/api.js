import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts?' }),
  endpoints: (build) => ({
    getDummy: build.query({
      query: (name) => `userId=${name}`,
    }),
  }),
});

export const { useGetDummyQuery } = dummyApi;
