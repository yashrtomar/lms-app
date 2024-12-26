import { Schema, model } from 'mongoose';

const courseSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'Instructor',
			required: true
		},
		courseCategory: { type: String, required: true },
		courseTitle: { type: String, required: true },
		courseDescription: { type: String, required: true },
		thumbnail: {
			type: String,
			default: 'https://dummyimage.com/1280x16:9'
		},
		lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
		studentsEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		assignment: { type: Schema.Types.ObjectId, ref: 'Assignment' },
		coursePrice: { type: Number },
		status: {
			type: String,
			enum: ['draft', 'published'],
			required: true,
			default: 'draft'
		}
	},
	{ timestamps: true }
);

export const Course = model('Course', courseSchema, 'courses');
