import {createSlice} from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'coursesSlice',
  initialState: {
    publishedCourses: [],
  },
  reducers: {
    getPublishedCourses: (state, action) => {
      state.publishedCourses = action.payload;
    },
  },
});

export const {getPublishedCourses} = coursesSlice.reducer;
export default coursesSlice;
