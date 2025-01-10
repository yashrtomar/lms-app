import { Course } from '../models/course.model.js';
import { Lesson } from '../models/lesson.model.js';
import { deleteVideoFromCloudinary, uploadMedia } from '../utils/cloudinary.js';

export const createLesson = async (request, response) => {
	try {
		const user = request.user;
		const courseId = request.params.courseId;
		const { lessonTitle, lessonDescription, resources } = request.body;
		const videoFile = request.file;

		if (!courseId) {
			return response.status(400).json({
				message: 'Course Id is required in the request!',
				success: false
			});
		}

		if (user.role !== 'instructor') {
			return response.status(403).json({
				message: 'Only instructors can create lessons!',
				success: false
			});
		}

		const course = await Course.findOne({
			userId: user._id,
			_id: courseId
		});

		// Delete the existing profile picture from Cloudinary if it exists
		if (course.video) {
			const publicId = course.video.split('/').pop()?.split('.')[0];
			await deleteVideoFromCloudinary(publicId);
		}

		// Upload the new profile picture if provided
		let videoUrl = user.video; // Default to existing profile picture
		if (videoFile) {
			const cloudResponse = await uploadMedia(videoFile.path);
			videoUrl = cloudResponse.secure_url; // Update with Cloudinary URL
		}

		const newLesson = await Lesson.create({
			userId: user._id,
			courseId,
			lessonTitle,
			lessonDescription,
			video: videoUrl,
			resources
		});

		if (course) {
			course.lessons.push(newLesson._id);
			await course.save();
		}

		return response.status(200).json({
			message: 'New lesson created',
			data: newLesson,
			success: true
		});
	} catch (error) {
		console.error('Error in creating lesson:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const getLessonsByCourse = async (request, response) => {
	try {
		const { courseId } = request.params;

		if (!courseId) {
			return response.status(400).json({
				message: 'Course Id is required in the request!',
				success: false
			});
		}

		// if error, try find({courseId})
		const lessons = await Lesson.find({ courseId });

		return response.status(200).json({
			message: 'Lessons found!',
			data: lessons,
			success: true
		});
	} catch (error) {
		// handle error
		console.log('Error in getting the lessons:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const updateLesson = async (request, response) => {
	try {
		const user = request.user;
		const { courseId, lessonId } = request.params;
		const { lessonTitle, lessonDescription, resources } = request.body;
		const video = request.file;

		if (!courseId || !lessonId) {
			const message = !courseId
				? 'Course Id is required in the request!'
				: 'Lesson Id is required in the request!';

			return response.status(400).json({
				message,
				success: false
			});
		}

		if (user.role !== 'instructor') {
			return response.status(403).json({
				message: 'Only instructors can create lessons!',
				success: false
			});
		}

		const course = await Course.findOne({
			userId: user._id,
			_id: courseId
		});
		if (!course) {
			return response.status(404).json({
				message: 'Course not found!',
				success: false
			});
		}

		const lesson = await Lesson.findOne({
			$and: [{ courseId }, { _id: lessonId }]
		});
		if (!lesson) {
			return response.status(404).json({
				message: 'Lesson not found!',
				success: false
			});
		}

		let videoUrl = lesson.videoUrl;
		if (lesson.videoUrl && video) {
			// extract publicId of the image on cloudinary
			const publicId = lesson.videoUrl.split('/').pop()?.split('.')[0];
			await deleteVideoFromCloudinary(publicId);
			const cloudResponse = await uploadMedia(video?.path);
			videoUrl = cloudResponse.secure_url;
		}
		const updatedData = {
			...(lessonTitle && { lessonTitle }),
			...(lessonDescription && { lessonDescription }),
			...(resources && { resources }),
			...(videoUrl && { videoUrl })
		};

		const updatedLesson = await Lesson.findByIdAndUpdate(
			lessonId,
			updatedData,
			{
				new: true
			}
		);

		// send success message, updated lesson data and a boolean value to work with
		return response.status(200).json({
			message: 'Lesson has been updated',
			data: updatedLesson,
			success: true
		});
	} catch (error) {
		// handle error
		console.log('Error in updating the lesson:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const deleteLesson = async (request, response) => {
	try {
		// Extract user id from request params
		const user = request.user;
		const { courseId, lessonId } = request.params;

		if (!courseId || !lessonId) {
			const message = !courseId
				? 'Course Id is required in the request!'
				: 'Lesson Id is required in the request';

			return response.status(400).json({
				message,
				success: false
			});
		}

		if (user.role !== 'instructor') {
			return response.status(403).json({
				message: 'Only instructors can delete lessons!',
				success: false
			});
		}

		const course = await Course.findOne({
			userId: user._id,
			_id: courseId
		});
		if (!course) {
			return response.status(404).json({
				message: 'Course not found!',
				success: false
			});
		}

		const deleteLesson = await Lesson.findOneAndDelete({
			courseId,
			_id: lessonId
		});
		if (!deleteLesson) {
			return response.status(404).json({
				message: 'Lesson not found!',
				success: false
			});
		}

		course.lessons = course.lessons.filter(
			(lesson) => lesson.toString() !== lessonId
		);
		await course.save();

		// respond with success message and boolean value to work with
		return response.status(200).json({
			message: `Lesson with the ID ${lessonId} has been deleted!`,
			success: true
		});
	} catch (error) {
		// handle error
		console.error('Error in deleting lesson:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};
