import {Schema, model} from 'mongoose';

const questionSchema = new Schema(
  {
    question: {type: String, required: true},
    options: [{type: String, required: true}],
    correctOption: {type: String, required: true},
  },
  {timestamps: true},
);

const assignmentSchema = new Schema(
  {
    coursId: {type: Schema.Types.ObjectId, ref: 'Lesson', required: true},
    questions: [questionSchema],
    submitted: {type: Boolean, default: false, required: true},
    score: {type: Number},
  },
  {timestamps: true},
);

export const Assignment = model('Assignment', assignmentSchema, 'assignments');
