import {Schema, model} from 'mongoose';

const courseSchema = new Schema(
  {
    instructorId: {
      type: Schema.Types.ObjectId,
      ref: 'Instructor',
      required: true,
    },
    courseTitle: {type: String, required: true},
    courseDescription: {type: String, required: true},
    courseCategory: {
      type: Schema.Types.ObjectId,
      ref: 'CourseCategory',
      required: true,
    },
    thumbnailUrl: {type: String, default: ''},
    lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
    studentEnrolled: [{type: Schema.Types.ObjectId, ref: 'User'}],
    assignment: {type: Schema.Types.ObjectId, ref: 'User'},
    coursePrice: {type: Number, required: true},
    status: {
      type: String,
      enum: ['draft', 'published'],
      required: true,
      default: 'draft',
    },
  },
  {timestamps: true},
);

export const Course = model('Course', courseSchema, 'courses');
