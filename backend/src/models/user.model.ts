import { Schema, model } from 'mongoose';
import { IUser } from '../types/user.types';

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher'] },
    profilePicture: { type: String, default: '' },
    coursesEnrolledIn: { type: Schema.Types.ObjectId, ref: 'Course' },
    coursesCreated: { type: Schema.Types.ObjectId, ref: 'Course' },
}, { timestamps: true });

export const User = model<IUser>('User', userSchema, 'users');