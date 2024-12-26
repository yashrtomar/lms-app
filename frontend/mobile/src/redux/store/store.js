import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import {authApi} from '../features/auth/authApi';
import courseReducer from '../features/courses/coursesSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {coursesApi} from '../features/courses/coursesApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    courses: courseReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, coursesApi.middleware),
});

setupListeners(store.dispatch);
