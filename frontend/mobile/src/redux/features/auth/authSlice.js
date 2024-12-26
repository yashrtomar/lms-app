import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
    setTokenAndUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const {login, logout, signUp, setTokenAndUser} = authSlice.actions;
export default authSlice.reducer;
