import {configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import authApi from './features/auth/authApi';
import coursesSlice from './features/courses/coursesSlice';
import coursesApi from './features/courses/coursesApi';

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    coursesReducer: coursesSlice,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, coursesApi.middleware),
});
