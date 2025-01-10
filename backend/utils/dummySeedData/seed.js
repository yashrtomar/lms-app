import mongoose from 'mongoose';
import { User } from '../../models/user.model.js';
import { Course } from '../../models/course.model.js';
import { Lesson } from '../../models/lesson.model.js';
import { Assignment } from '../../models/assignment.model.js';
import { Progress } from '../../models/progress.model.js';
import { users } from './usersData.js';
import { janeSmithProgress } from './usersData.js';
import { courses } from './coursesData.js';
import { lessons } from './lessonsData.js';
import { assignments } from './assignmentsData.js';

export const connectDb = async () => {
	// initialize to a variable and validate the mongodb connection URI
	const mongoUri = process.env.MONGO_URI || '';
	if (!mongoUri) {
		throw new Error(
			'MongoDb connection URI is not defined in the environment variables'
		);
	}
	try {
		// connect to mongodb using connect()
		await mongoose.connect(mongoUri);
		// await mongoose.connect(
		// 	'mongodb+srv://yash:12345@cluster0.xkcye.mongodb.net/lms-app?retryWrites=true&w=majority&appName=Cluster0'
		// );
		console.log('MongoDb connected successfully !');
	} catch (error) {
		// handle error
		console.error('Could not connect to MongoDb:\n', error);
	}

	async function insertSeedData() {
		try {
			await User.insertMany(users);
			console.log('Seed data of the users inserted successfully');
			await Course.insertMany(courses);
			console.log('Seed data of the courses inserted successfully');
			await Lesson.insertMany(lessons);
			console.log('Seed data of the lessons inserted successfully');
			await Assignment.insertMany(assignments);
			console.log('Seed data of the assignments inserted successfully');
			await Progress.insertMany(janeSmithProgress);
			console.log('Seed data of the progress inserted successfully');
			console.log('All of the Seed data inserted successfully');
		} catch (err) {
			console.error('Error inserting seed data:', err);
		} finally {
			mongoose.connection.close(); // Close the connection after inserting data
		}
	}
	insertSeedData();
};
connectDb();
