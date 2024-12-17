import { Schema, model } from 'mongoose';
import { IQuestion } from '../types/question.types';

const questionSchema = new Schema<IQuestion>({
    assignmentId: { type: Schema.Types.ObjectId, ref: 'Assignment', required: true },
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }
}, { timestamps: true });

export const Question = model<IQuestion>('Question', questionSchema, 'questions');