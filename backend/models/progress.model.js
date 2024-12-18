import {Schema, model} from 'mongoose';

const progressSchema = new Schema(
  {
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    courseId: {type: Schema.Types.ObjectId, ref: 'Course', required: true},
    lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson', required: true}],
    assignmentScore: {type: Number, required: true, default: null},
  },
  {timestamps: true},
);

export const Progress = model('Progress', progressSchema, 'progress');
