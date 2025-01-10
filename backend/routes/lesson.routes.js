import express from 'express';
import {
	createLesson,
	getLessonsByCourse,
	updateLesson,
	deleteLesson
} from '../controllers/lesson.controller.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { validateUserRole } from '../middleware/validateUserRole.js';
import upload from '../utils/multer.js';

const router = express.Router();

// Route to create a new lesson (only instructors can create lessons)
router
	.route('/:courseId/create-lesson')
	.post(
		authenticateToken,
		validateUserRole,
		upload.single('video'),
		createLesson
	);

// Route to get all lessons for a specific course
router.route('/:courseId/lessons').get(authenticateToken, getLessonsByCourse);

// Route to update a lesson (only instructors can update lessons)
router
	.route('/:courseId/update-lesson/:lessonId')
	.put(authenticateToken, validateUserRole, updateLesson);

// Route to delete a lesson (only instructors can delete lessons)
router
	.route('/:courseId/delete-lesson/:lessonId')
	.delete(authenticateToken, validateUserRole, deleteLesson);

export default router;
