import { Types } from 'mongoose';

export interface IProgress {
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
    lessons: {
        lessonId: Types.ObjectId,
        isCompleted: boolean;
    },
    assignmentScore: number;
}