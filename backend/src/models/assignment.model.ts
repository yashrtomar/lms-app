import { Schema, model } from 'mongoose';
import { IAssignment } from '../types/assignment.types';

const assignmentSchema = new Schema<IAssignment>({
    lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
    questions: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    dueDate: { type: String }
}, { timestamps: true });

export const Assignment = model<IAssignment>('Assignment', assignmentSchema, 'assignments');