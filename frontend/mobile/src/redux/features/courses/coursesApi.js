import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getFromAsyncStorage} from '../../../utils/AsyncStorage';

const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.101:8000/api/course',
    prepareHeaders: async (headers, {endpoint}) => {
      const token = await getFromAsyncStorage('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getPublishedCourses: builder.query({
      query: () => ({
        url: 'published-courses',
        method: 'get',
      }),
    }),
  }),
});

export const {useGetPublishedCoursesQuery} = coursesApi;
export default coursesApi;
