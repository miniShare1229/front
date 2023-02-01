import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (payload) => ({
        url: 'register',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    addPost: build.mutation({
      query: ({ postState, data }) => ({
        url: `${postState}Submit`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const asyncSignOut = createAsyncThunk('user/signout', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.get(`/delete`);

    return res.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const asyncSignIn = createAsyncThunk('user/signin', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post(`/login`, data);
    return res.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const { useGetDummyQuery } = dummyApi;
export const { useSignUpMutation, useAddPostMutation } = api;
