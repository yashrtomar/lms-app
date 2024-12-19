import {Schema, model} from 'mongoose';

const courseCategorySchema = new Schema({
  courseCategory: {
    type: String,
    required: true,
    unique: true,
  },
});

export const CourseCategory = model(
  'CourseCategory',
  courseCategorySchema,
  'courseCategories',
);
