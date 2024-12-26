import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: 'coursesSlice',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const {setCourses} = coursesSlice.actions;
export default coursesSlice.reducer;
