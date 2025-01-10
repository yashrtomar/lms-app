import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.101:8000/api/user',
  }),
  endpoints: builder => ({
    userSignUp: builder.mutation({
      query: ({name, email, password}) => ({
        url: 'sign-up',
        method: 'post',
        body: {name, email, password},
        headers: {'Content-Type': 'application/json'},
      }),
    }),
    userLogin: builder.mutation({
      query: ({email, password}) => ({
        url: 'login',
        method: 'post',
        body: {email, password},
        headers: {'Content-Type': 'application/json'},
      }),
    }),
    userLogout: builder.query({
      query: () => ({
        url: 'logout',
        method: 'get',
      }),
    }),
  }),
});

export const {useSignUpMutation, useUserLoginMutation, useLogoutQuery} =
  authApi;
export default authApi;
