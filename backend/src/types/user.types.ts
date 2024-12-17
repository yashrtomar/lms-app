import { Types } from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: 'student' | 'teacher';
    profilePicture?: string;
    coursesEnrolledIn?: Types.ObjectId;
    coursesCreated?: Types.ObjectId;
}