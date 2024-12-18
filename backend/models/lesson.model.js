import {Schema, model} from 'mongoose';

const lessonSchema = new Schema(
  {
    instructorId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    courseId: {type: Schema.Types.ObjectId, ref: 'Course', required: true},
    lessonTitle: {type: String, required: true},
    lessondescription: {type: String, required: true},
    videoUrl: {type: String, required: true},
    resources: [{type: String}],
  },
  {timestamps: true},
);

export const Lesson = model('Lesson', lessonSchema, 'lessons');
