import {Schema, model} from 'mongoose';

const questionSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Assignment',
      required: true,
    },
    question: {type: String, required: true},
    options: [{type: String, required: true}],
    correctAnswer: {type: String, required: true},
  },
  {timestamps: true},
);

export const Question = model('Question', questionSchema, 'questions');
