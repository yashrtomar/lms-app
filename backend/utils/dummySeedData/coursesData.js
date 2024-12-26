import { Types } from 'mongoose';

export const courses = [
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a4'),
		courseTitle: 'Introduction to JavaScript',
		courseCategory: 'Programming',
		courseDescription: 'Learn the basics of JavaScript programming.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			'63f1b1e8e8a1a1a1a1a1b101',
			'63f1b1e8e8a1a1a1a1a1b102',
			'63f1b1e8e8a1a1a1a1a1b103',
			'63f1b1e8e8a1a1a1a1a1b104',
			'63f1b1e8e8a1a1a1a1a1b105'
		],
		studentsEnrolled: [new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a2')],
		assignment: '63f1a2e8e8a1a1a1a1a1a1e3',
		userId: '63f1a1e8e8a1a1a1a1a1a1a1',
		coursePrice: 49.99,
		status: 'published'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a5'),
		courseTitle: 'Advanced JavaScript',
		courseCategory: 'Programming',
		courseDescription: 'Deep dive into advanced JavaScript concepts.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			'63f1a2e8e8a1a1a1a1a1a1a6',
			'63f1a2e8e8a1a1a1a1a1a1a7',
			'63f1a2e8e8a1a1a1a1a1a1a8',
			'63f1a2e8e8a1a1a1a1a1a1a9',
			'63f1a2e8e8a1a1a1a1a1a1aa'
		],
		studentsEnrolled: [],
		assignment: '63f1a2e8e8a1a1a1a1a1a1e4',
		userId: '63f1a1e8e8a1a1a1a1a1a1a1',
		coursePrice: 59.99,
		status: 'published'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a6'),
		courseTitle: 'Graphic Design Basics',
		courseCategory: 'Design',
		courseDescription: 'Learn the fundamentals of graphic design.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ab'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ac'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ad'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ae'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1af')
		],
		studentsEnrolled: [new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a2')],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e5'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 39.99,
		status: 'draft'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a7'),
		courseTitle: 'Mastering CSS',
		courseCategory: 'Programming',
		courseDescription: 'Become proficient in CSS for web design.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc0'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc1'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc2'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc3'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a11bc4')
		],
		studentsEnrolled: [],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e6'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 44.99,
		status: 'published'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a8'),
		courseTitle: 'UI/UX Design Principles',
		courseCategory: 'Design',
		courseDescription:
			'Learn the principles of user interface and user experience design.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b5'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b6'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b7'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b8'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b9')
		],
		studentsEnrolled: [new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a2')],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e7'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 54.99,
		status: 'draft'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1a9'),
		courseTitle: 'React for Beginners',
		courseCategory: 'Programming',
		courseDescription: 'Learn React from scratch.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ba'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bb'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bc'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bd'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1be')
		],
		studentsEnrolled: [],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e8'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 69.99,
		status: 'published'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b0'),
		courseTitle: 'Node.js Essentials',
		courseCategory: 'Programming',
		courseDescription: 'Get started with Node.js for backend development.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1bf'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c0'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c1'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c2'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c3')
		],
		studentsEnrolled: [],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1e9'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 64.99,
		status: 'published'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b1'),
		courseTitle: 'Digital Marketing Basics',
		courseCategory: 'Marketing',
		courseDescription: 'An introduction to digital marketing strategies.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c4'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c5'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c6'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c7'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c8')
		],
		studentsEnrolled: [],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f0'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 39.99,
		status: 'published'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b2'),
		courseTitle: 'Python for Data Science',
		courseCategory: 'Data Science',
		courseDescription: 'Learn Python for data analysis and visualization.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1c9'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ca'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cb'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cc'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cd')
		],
		studentsEnrolled: [],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f1'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 74.99,
		status: 'draft'
	},
	{
		_id: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1b3'),
		courseTitle: 'Machine Learning Basics',
		courseCategory: 'Data Science',
		courseDescription: 'Understand the fundamentals of machine learning.',
		thumbnail: 'https://dummyimage.com/1280x16:9',
		lessons: [
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1ce'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1cf'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1d0'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1d1'),
			new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1d2')
		],
		studentsEnrolled: [],
		assignment: new Types.ObjectId('63f1a2e8e8a1a1a1a1a1a1f2'),
		userId: new Types.ObjectId('63f1a1e8e8a1a1a1a1a1a1a1'),
		coursePrice: 89.99,
		status: 'published'
	}
];
