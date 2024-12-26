import AsyncStorage from '@react-native-async-storage/async-storage';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.100:8000/api/course',
    prepareHeaders: async headers => {
      try {
        // Get the token from AsyncStorage
        const token = await AsyncStorage.getItem('token');
        // If the token exists, add it to the Authorization header
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      } catch (error) {
        console.error('Error getting token from AsyncStorage:', error);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getCourses: builder.query({
      query: () => ({
        url: 'published-courses',
        method: 'get',
      }),
    }),
  }),
});

export const {useGetCoursesQuery} = coursesApi;
