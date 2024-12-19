import {Schema, model} from 'mongoose';

const userSchema = new Schema(
  {
    name: {type: String, required: true},
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {type: String, required: true},
    role: {
      type: String,
      enum: ['student', 'instructor'],
      required: true,
      default: 'student',
    },
    profilePicture: {type: String, default: ''},
    coursesEnrolledIn: {type: Schema.Types.ObjectId, ref: 'Course'},
    coursesCreated: {type: Schema.Types.ObjectId, ref: 'Course'},
  },
  {timestamps: true},
);

export const User = model('User', userSchema, 'users');
