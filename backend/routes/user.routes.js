import express from 'express';
import {
	changePassword,
	deleteUser,
	enrollInCourse,
	getUserProfile,
	login,
	logout,
	saveCourseForLater,
	signUp,
	updateUser
} from '../controllers/user.controller.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.route('/sign-up').post(signUp);
router.route('/login').post(login);
router.route('/get-user-profile').get(authenticateToken, getUserProfile);
router
	.route('/update-user')
	.put(authenticateToken, upload.single('profilePicture'), updateUser);
router.post('/enroll/:courseId', authenticateToken, enrollInCourse);
router.post('/save/:courseId', authenticateToken, saveCourseForLater);
router.route('/change-password').put(authenticateToken, changePassword);
router.route('/logout').get(authenticateToken, logout);
router.route('/delete-user').delete(authenticateToken, deleteUser);

export default router;
