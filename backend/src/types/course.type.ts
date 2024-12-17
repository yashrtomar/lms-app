import { Types } from 'mongoose';

export interface ICourse {
    courseTitle: string;
    courseDescription: string;
    instructorId: Types.ObjectId;
    studentEnrolled?: Types.ObjectId;
    thumbnailUrl: string;
    lessons: Types.ObjectId;
    assignment: Types.ObjectId;
    published: boolean;
}