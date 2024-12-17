import { Types } from 'mongoose';

export interface IQuestion {
    assignmentId: Types.ObjectId;
    question: string;
    options: string;
    correctAnswer: string;
}