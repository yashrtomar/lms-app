import express from 'express';
import {
	createCourse,
	getCoursesOfInstructor,
	getAllCourses,
	updateCourse,
	deleteCourse
} from '../controllers/course.controller.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { validateUserRole } from '../middleware/validateUserRole.js';
import upload from '../utils/multer.js';

const router = express.Router();

// Route to create a new course (only for instructors)
router
	.route('/create-course')
	.post(authenticateToken, validateUserRole, createCourse);

// Route to get all courses of the logged-in instructor
router
	.route('/courses-by-instructor/:id')
	.get(authenticateToken, validateUserRole, getCoursesOfInstructor);

// Route to get all courses (public access)
router.route('/all-courses').get(getAllCourses);

// Route to update a course (only for instructors)
router
	.route('/update-course/:courseId')
	.put(
		authenticateToken,
		validateUserRole,
		upload.single('thumbnail'),
		updateCourse
	);

// Route to delete a course (only for instructors)
router
	.route('/delete-course/:courseId')
	.delete(authenticateToken, validateUserRole, deleteCourse);

export default router;
