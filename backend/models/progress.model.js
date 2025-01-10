import { Schema, model } from 'mongoose';

const progressSchema = new Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		courseId: {
			type: Schema.Types.ObjectId,
			ref: 'Course',
			required: true
		},
		completedLessons: [
			{ type: Schema.Types.ObjectId, ref: 'Lesson', required: true }
		]
	},
	{ timestamps: true }
);

export const Progress = model('Progress', progressSchema, 'progress');
