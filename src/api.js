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
  // json server위한 baseUrl 임시 설정
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (payload) => ({
        url: '/register',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Post'],
    }),
    signIn: build.mutation({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Post'],
    }),
    testPost: build.mutation({
      query: (payload) => ({
        url: '/test',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetDummyQuery } = dummyApi;
export const { useSignUpMutation, useSignInMutation, useTestPostMutation } = signUpApi;
