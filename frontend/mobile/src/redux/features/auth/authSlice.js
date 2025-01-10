import {createSlice} from '@reduxjs/toolkit';
import {
  removeFromAsyncStorage,
  saveToAsyncStorage,
} from '../../../utils/AsyncStorage';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    token: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    signUp: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      saveToAsyncStorage('token', state.token);
      saveToAsyncStorage('user', state.user);
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      saveToAsyncStorage('token', state.token);
      saveToAsyncStorage('user', state.user);
    },
    logout: state => {
      state.token = null;
      state.user = null;
      removeFromAsyncStorage('token');
      removeFromAsyncStorage('user');
    },
  },
});

export const {signUp, login, logout} = authSlice.actions;
export default authSlice.reducer;
