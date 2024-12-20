import { Course } from '../models/course.model.js';
import { uploadMedia } from '../utils/cloudinary.js';

export const createCourse = async (request, response) => {
	try {
		const { courseCategory, courseTitle, courseDescription } = request.body;
		const user = request.user;

		if (!courseTitle || !courseDescription || !courseCategory) {
			const message = !courseTitle
				? 'Course title is required'
				: !courseDescription
				? 'Course description is required'
				: 'Course Category is Required';

			return response.status(400).json({
				message,
				success: false
			});
		}

		if (user.role !== 'instructor') {
			return response.status(403).json({
				message: 'Only instructors can create courses!',
				success: false
			});
		}

		const course = await Course.create({
			userId: user._id,
			courseTitle,
			courseDescription,
			courseCategory
		});

		return response.status(200).json({
			message: 'The Course has been created!',
			data: course,
			success: true
		});
	} catch (error) {
		console.log('Error in creating the course:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const getCoursesOfInstructor = async (request, response) => {
	try {
		const userId = request.params.id;

		const courses = await Course.findOne({ userId });
		if (!courses) {
			response.status(404).json({
				message: 'No courses found!',
				success: false
			});
		}

		return response.status(200).json({
			message: 'Courses found',
			data: courses,
			success: true
		});
	} catch (error) {
		console.log('Error in getting the courses:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const getAllCourses = (request, response) => {
	try {
		const allCourses = Course.find().sort({ createdAt: -1 });

		if (!allCourses) {
			response.status(404).json({
				message: 'No courses found!',
				success: false
			});
		}

		return response.status(200).json({
			message: 'Courses found',
			data: allCourses,
			success: true
		});
	} catch (error) {
		console.error('Error in getting courses:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const updateCourse = async (request, response) => {
	try {
		const user = request.user;
		const courseId = request.params.courseId;
		const {
			courseTitle,
			courseDescription,
			courseCategory,
			coursePrice,
			status
		} = request.body;
		const thumbnailFile = request.file;

		if (!courseId) {
			return response.status(400).json({
				message: 'Course Id is requuired in the request!',
				success: false
			});
		}

		if (user.role !== 'instructor') {
			return response.status(403).json({
				message: 'Only instructors can update courses!',
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

		// Delete the existing thumbnail from Cloudinary if it exists
		if (course.thumbnail) {
			const publicId = course.thumbnail.split('/').pop()?.split('.')[0];
			await deleteMediaFromCloudinary(publicId);
		}

		// Upload the new thumbnail if provided
		let thumbnailUrl = course.thumbnail; // Default to existing thumbnail
		if (thumbnailFile) {
			const cloudResponse = await uploadMedia(thumbnailFile.path);
			thumbnailUrl = cloudResponse.secure_url; // Update with Cloudinary URL
		}

		const updatedData = {
			...(courseTitle && { courseTitle }),
			...(courseDescription && { courseDescription }),
			...(courseCategory && { courseCategory }),
			...(coursePrice && { coursePrice }),
			...(status && { status }),
			...(thumbnailUrl && { thumbnail: thumbnailUrl })
		};
		const updatedCourse = await Course.findByIdAndUpdate(
			courseId,
			updatedData,
			{
				new: true
			}
		);

		return response.status(200).json({
			message: 'Your course has been updated',
			data: updatedCourse,
			success: true
		});
	} catch (error) {
		console.error('Error in updating course:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const deleteCourse = async (request, response) => {
	try {
		const user = request.user;
		const courseId = request.params.courseId;

		if (!courseId) {
			return response.status(400).json({
				message: 'Course Id is required in the request!',
				success: false
			});
		}

		if (user.role !== 'instructor') {
			return response.status(403).json({
				message: 'Only instructors can delete courses!',
				success: false
			});
		}

		const deleteCourse = await Course.findOneAndDelete({
			userId: user._id,
			_id: courseId
		});
		if (!deleteCourse) {
			return response.status(404).json({
				message: 'Course not found!',
				success: false
			});
		}

		return response.status(200).json({
			message: 'Your Course has been deleted!',
			success: true
		});
	} catch {
		console.error('Error in deleting course:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};
