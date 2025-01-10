import express from 'express';
import {
	createAssignment,
	getAssignmentsByCourse,
	getAssignmentById,
	updateAssignment,
	deleteAssignment
} from '../controllers/assignment.controller.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { validateUserRole } from '../middleware/validateUserRole.js';

const router = express.Router();

// Route to create a new assignment for a course (only for instructors)
router
	.route('/create-assignment')
	.post(authenticateToken, validateUserRole, createAssignment);

// Route to get the assignment for a specific course
router.route('/:courseId/assignment').get(getAssignmentsByCourse);

// Route to get a specific assignment by ID
router.route('/assignment/:assignmentId').get(getAssignmentById);

// Route to update the assignment (only for instructors)
router
	.route('/update-assignment/:assignmentId')
	.put(authenticateToken, validateUserRole, updateAssignment);

// Route to delete an assignment (only for instructors)
router
	.route('/delete-assignment/:assignmentId')
	.delete(authenticateToken, validateUserRole, deleteAssignment);

export default router;
