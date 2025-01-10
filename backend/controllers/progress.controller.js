import { Progress } from '../models/progress.model.js';
import { Course } from '../models/course.model.js';
import { Lesson } from '../models/lesson.model.js';

export const createProgress = async (request, response) => {
	try {
		const user = request.user;
		const { courseId } = request.params;
		const { completedLessons } = request.body;

		if (!courseId || !completedLessons || completedLessons.length === 0) {
			return response.status(400).json({
				message: 'Course Id and completed lessons are required!',
				success: false
			});
		}

		// Check if the course exists
		const course = await Course.findById(courseId);
		if (!course) {
			return response.status(404).json({
				message: 'Course not found!',
				success: false
			});
		}

		// Check if the lessons exist
		const lessons = await Lesson.find({ _id: { $in: completedLessons } });
		if (lessons.length !== completedLessons.length) {
			return response.status(404).json({
				message: 'One or more lessons not found!',
				success: false
			});
		}

		// Create progress record
		const newProgress = new Progress({
			userId: user._id,
			courseId,
			completedLessons
		});

		await newProgress.save();

		return response.status(201).json({
			message: 'Progress has been created!',
			data: newProgress,
			success: true
		});
	} catch (error) {
		console.error('Error in creating progress:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const updateProgress = async (request, response) => {
	try {
		const user = request.user;
		const { courseId, lessonId } = request.params;

		if (!courseId || !lessonId) {
			return response.status(400).json({
				message: 'Course Id and Lesson Id are required!',
				success: false
			});
		}

		// Check if the course exists
		const course = await Course.findById(courseId);
		if (!course) {
			return response.status(404).json({
				message: 'Course not found!',
				success: false
			});
		}

		// Check if the lesson exists
		const lesson = await Lesson.findById(lessonId);
		if (!lesson) {
			return response.status(404).json({
				message: 'Lesson not found!',
				success: false
			});
		}

		// Find the progress record
		let progress = await Progress.findOne({ userId: user._id, courseId });

		// If progress doesn't exist, create it
		if (!progress) {
			progress = new Progress({
				userId: user._id,
				courseId,
				completedLessons: [lessonId]
			});
			await progress.save();
		} else {
			// Update the progress by adding the new lesson if not already added
			if (!progress.completedLessons.includes(lessonId)) {
				progress.completedLessons.push(lessonId);
				await progress.save();
			}
		}

		return response.status(200).json({
			message: 'Progress has been updated!',
			data: progress,
			success: true
		});
	} catch (error) {
		console.error('Error in updating progress:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const getProgress = async (request, response) => {
	try {
		const user = request.user;
		const { courseId } = request.params;

		if (!courseId) {
			return response.status(400).json({
				message: 'Course Id is required!',
				success: false
			});
		}

		// Find the progress record for the user and course
		const progress = await Progress.findOne({ userId: user._id, courseId })
			.populate('completedLessons')
			.populate('courseId')
			.exec();

		if (!progress) {
			return response.status(404).json({
				message: 'Progress not found!',
				success: false
			});
		}

		return response.status(200).json({
			message: 'Progress retrieved successfully!',
			data: progress,
			success: true
		});
	} catch (error) {
		console.error('Error in getting progress:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};
