import { Schema, model } from 'mongoose';

const lessonSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		courseId: {
			type: Schema.Types.ObjectId,
			ref: 'Course',
			required: true
		},
		lessonTitle: { type: String, required: true },
		lessonDescription: { type: String, required: true },
		video: { type: String, required: true },
		resources: [{ type: String }]
	},
	{ timestamps: true }
);

export const Lesson = model('Lesson', lessonSchema, 'lessons');
