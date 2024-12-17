import { Types } from 'mongoose';

export interface ILesson {
    courseId: Types.ObjectId;
    lessonTitle: string;
    lessondescription: string;
    videoUrl: string;
    resources: string;
}