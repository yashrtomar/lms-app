import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.100:8000/api/user'}),
  endpoints: build => ({
    signUp: build.mutation({
      query: ({name, email, password, role}) => ({
        url: 'sign-up',
        method: 'post',
        body: {name, email, password, role},
        headers: {'Content-Type': 'application/json'},
      }),
    }),
    login: build.mutation({
      query: ({email, password}) => ({
        url: 'login',
        method: 'post',
        body: {email, password},
        headers: {'Content-Type': 'application/json'},
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
