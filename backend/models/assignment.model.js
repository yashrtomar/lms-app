import {Schema, model} from 'mongoose';

const assignmentSchema = new Schema(
  {
    lessonId: {type: Schema.Types.ObjectId, ref: 'Lesson', required: true},
    questions: {type: Schema.Types.ObjectId, ref: 'Question', required: true},
    dueDate: {type: String},
  },
  {timestamps: true},
);

export const Assignment = model('Assignment', assignmentSchema, 'assignments');
