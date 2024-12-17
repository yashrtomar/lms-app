import { Schema, model } from 'mongoose';
import { ILesson } from '../types/lesson.types';

const lessonSchema = new Schema<ILesson>({
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    lessonTitle: { type: String, required: true },
    lessondescription: { type: String, required: true },
    videoUrl: { type: String, required: true },
    resources: [{ type: String }]
}, { timestamps: true });

export const Lesson = model<ILesson>('Lesson', lessonSchema, 'lessons');