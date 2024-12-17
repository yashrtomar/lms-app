import { Schema, model } from 'mongoose';
import { ICourse } from '../types/course.type';

const courseSchema = new Schema<ICourse>({
    instructorId: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
    courseTitle: { type: String, required: true },
    courseDescription: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
    studentEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    assignment: { type: Schema.Types.ObjectId, ref: 'User' },
    published: { type: Boolean, required: true, default: false }
}, { timestamps: true });

export const Course = model<ICourse>('Course', courseSchema, 'courses');