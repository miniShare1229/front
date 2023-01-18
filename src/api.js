import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 임시 데이터 get
export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts?' }),
  endpoints: (build) => ({
    getDummy: build.query({
      query: (name) => `userId=${name}`,
    }),
  }),
});

// 서버에 post
export const signUpApi = createApi({
  reducerPath: 'signupApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (payload) => ({
        url: '/test',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
// http://localhost:3000

export const { useGetDummyQuery } = dummyApi;
export const { useSignUpMutation } = signUpApi;
