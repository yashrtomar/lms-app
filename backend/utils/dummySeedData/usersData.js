import { Types } from 'mongoose';

export const users = [
	{
		_id: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		name: 'John Doe',
		username: 'john_doe',
		email: 'john.doe@example.com',
		password: '12345',
		profilePicture: 'https://i.pravatar.cc/150?img=3',
		role: 'instructor',
		coursesCreated: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3')
		]
	},
	{
		_id: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a2'),
		name: 'Jane Smith',
		username: 'jane_smith',
		email: 'jane.smith@example.com',
		password: '12345',
		profilePicture: 'https://i.pravatar.cc/150?img=32',
		role: 'student',
		coursesEnrolledIn: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8')
		]
	}
];

export const janeSmithProgress = [
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f4'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a2'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		completedLessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c1'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c2')
		]
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f5'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a2'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		completedLessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c3'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c4')
		]
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f6'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a2'),
		courseId: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		completedLessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c5'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c6')
		]
	}
];
