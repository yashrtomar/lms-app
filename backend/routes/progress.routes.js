import express from 'express';
import {
	createProgress,
	updateProgress,
	getProgress
} from '../controllers/progress.controller.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to create progress for a user (authenticated user, course and lessons required)
router.route('/:courseId/progress').post(authenticateToken, createProgress);

// Route to update progress (only authenticated users can update their progress)
router
	.route('/:courseId/lesson/:lessonId/progress')
	.put(authenticateToken, updateProgress);

// Route to get progress for a specific course (only authenticated users can view their progress)
router.route('/:courseId/progress').get(authenticateToken, getProgress);

export default router;
