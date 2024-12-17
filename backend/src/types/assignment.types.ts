import { Types } from 'mongoose';

export interface IAssignment {
    lessonId: Types.ObjectId;
    questions: Types.ObjectId;
    dueDate: string;
}