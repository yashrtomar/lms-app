import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createSecretToken } from '../utils/createSecretToken.js';
import { deleteMediaFromCloudinary, uploadMedia } from '../utils/cloudinary.js';
import { Course } from '../models/course.model.js';

export const signUp = async (request, response) => {
	try {
		// Extract data (payload) from request body
		const { name, email, password, role } = request.body;

		// data validation, return error based on condition
		if (!name || !email || !password || !role) {
			const message = !name
				? 'Please enter your name!'
				: !email
				? 'Please enter your email!'
				: !password
				? 'Please enter the password!'
				: 'Please select if you are a Student or an Instructor';
			return response.status(400).json({
				message,
				success: false
			});
		}

		// Check if user already exists through email
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return response.status(403).json({
				message:
					'User with this email already exists! Try another email or log in if you already have an account.',
				success: false
			});
		}

		// Encrypt password
		const hashedPassword = await bcrypt.hash(password, 12);

		// create new user
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
			role
		});

		// generate token and send to the browser
		const token = createSecretToken(user._id);
		// response.cookie('token', token, { httpOnly: false });

		// return success message along with data and a boolean value to work with
		return response.status(200).json({
			message: 'User created successfully!',
			data: user,
			token,
			success: true
		});
	} catch (error) {
		// handle the error
		console.error('Error in creating user:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const login = async (request, response) => {
	try {
		// Extract data (payload) from request and workspace id from request params
		const { email, password } = request.body;

		// data validation, return error based on condition
		if (!email || !password) {
			const message = !email
				? 'Please enter email to login!'
				: 'Password is required to login!';
			return response.status(400).json({ message, success: false });
		}

		// Check if user with these credentials exists, if not, send an error message and a boolean value to work with
		const user = await User.findOne({ email: email });
		if (!user) {
			return response.status(404).json({
				message:
					'User with this email does not exist! Please enter the correct one or Create an account.',
				success: false
			});
		}

		// Check if password matches
		const passwordMatches = await bcrypt.compare(password, user.password);
		if (!passwordMatches) {
			return response.status(401).json({
				message: 'Password you entered is incorrect!',
				success: false
			});
		}

		// set the user information for response data
		const loggedInUser = {
			_id: user._id,
			email: user.email,
			name: user.name,
			role: user.role,
			profilePicture: user.profilePicture,
			coursesCreated: user.coursesCreated,
			coursesEnrolledIn: user.coursesEnrolledIn
		};

		// generate token and send it with success message, data and a boolean value to work with in response
		const token = createSecretToken(user._id);
		return (
			response
				// .cookie('token', token, { httpOnly: false })
				.status(200)
				.json({
					message: `Welcome back ${user?.name}`,
					data: loggedInUser,
					token,
					success: true
				})
		);
	} catch (error) {
		// handle error
		console.error('Error in logging in:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const getUserProfile = async (request, response) => {
	try {
		const userId = request.id;
		const user = await User.findById(userId);
		if (!user) {
			return response.status(404).json({
				message: 'User not found',
				success: false
			});
		}
		response.status(200).json({
			message: 'User profile retrieved successfully',
			success: true,
			data: user
		});
	} catch (error) {
		console.log('Error retrieving user profile:\n', error);
		response.status(500).json({
			message: 'Error retrieving user profile',
			success: false
		});
	}
};

export const logout = async (request, response) => {
	try {
		// just delete the token by setting its age to 0 and send success message and a boolean value to work with
		return response.cookie('token', '', { maxAge: 0 }).json({
			message: 'User logged out successfully!',
			success: true
		});
	} catch (error) {
		// handle error
		console.error('Error in logging out:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const updateUser = async (request, response) => {
	try {
		// Extract data (payload) from request and user id from request
		const userId = request.id;
		const { email } = request.body;
		const profilePictureFile = request.file;

		// check if user exists
		const user = await User.findById(userId);
		if (!user) {
			return response.status(404).json({
				message: 'User not found!',
				success: false
			});
		}

		// Delete the existing profile picture from Cloudinary if it exists
		if (user.profilePicture) {
			const publicId = user.profilePicture
				.split('/')
				.pop()
				?.split('.')[0];
			await deleteMediaFromCloudinary(publicId);
		}

		// Upload the new profile picture if provided
		let profilePictureUrl = user.profilePicture; // Default to existing profile picture
		if (profilePictureFile) {
			const cloudResponse = await uploadMedia(profilePictureFile.path);
			profilePictureUrl = cloudResponse.secure_url; // Update with Cloudinary URL
		}

		const updatedData = {
			...(email && { email }),
			...(profilePictureUrl && { profilePicture: profilePictureUrl })
		};

		const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
			new: true
		}).select('-password');

		// send success message, updated user data and a boolean value to work with
		return response.status(200).json({
			message: 'Your profile has been updated',
			data: updatedUser,
			success: true
		});
	} catch (error) {
		// handle error
		console.log('Error in updating the user:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};

export const enrollInCourse = async (request, response) => {
	try {
		const userId = request.id;
		const courseId = request.params.courseId;

		const user = await User.findById(userId);
		const course = await Course.findById(courseId);

		if (!user) {
			return response.status(404).json({
				message: 'User not found',
				success: false
			});
		}

		if (!course) {
			return response.status(404).json({
				message: 'Course not found',
				success: false
			});
		}

		if (user.coursesEnrolledIn.includes(courseId)) {
			return response.status(400).json({
				message: 'User is already enrolled in this course',
				success: false
			});
		}

		user.coursesEnrolledIn.push(courseId);

		await user.save();

		return response.status(200).json({
			message: 'Successfully enrolled in the course',
			success: true,
			data: { user, course }
		});
	} catch (error) {
		console.error('Error enrolling in course:', error);
		return response.status(500).json({
			message: 'Internal server error',
			success: false
		});
	}
};

export const saveCourseForLater = async (request, response) => {
	try {
		const userId = request.id;
		const courseId = request.params.courseId;

		const user = await User.findById(userId);
		const course = await Course.findById(courseId);

		if (!user) {
			return response.status(404).json({
				message: 'User not found',
				success: false
			});
		}

		if (!course) {
			return response.status(404).json({
				message: 'Course not found',
				success: false
			});
		}

		if (user.savedCourses.includes(courseId)) {
			return response.status(400).json({
				message: 'Course is already saved for later',
				success: false
			});
		}

		user.savedCourses.push(courseId);
		await user.save();

		return response.status(200).json({
			message: 'Course saved for later',
			success: true,
			data: user.savedCourses
		});
	} catch (error) {
		console.error('Error saving course for later:', error);
		return response.status(500).json({
			message: 'Internal server error',
			success: false
		});
	}
};

export const changePassword = async (request, response) => {
	try {
		const { currentPassword, newPassword } = request.body;
		const user = await User.findById(request.id);
		if (!user) {
			return response.status(404).json({
				message: 'User not found',
				success: false
			});
		}

		const isCurrentPasswordCorrect = await bcrypt.compare(
			currentPassword,
			user.password
		);

		// Update password
		if (isCurrentPasswordCorrect) {
			user.password = await bcrypt.hash(newPassword, 12);
			await user.save();
		}

		response.status(200).json({
			message: 'Password updated successfully',
			success: true
		});
	} catch (error) {
		console.log('Error changing password:\n', error);
		response.status(500).json({
			message: 'Error changing password',
			success: false
		});
	}
};

export const deleteUser = async (request, response) => {
	try {
		// Extract user id from request params
		const userId = request.id;

		// Check if user exists and handle if not found
		const user = await User.findById(userId);
		if (!user) {
			return response.status(404).json({
				message: 'User not found!',
				success: false
			});
		}

		// Query to delete user
		await User.findByIdAndDelete(userId);

		// respond with success message and boolean value to work with
		return response.status(200).json({
			message: 'Your account has been deleted!',
			success: true
		});
	} catch (error) {
		// handle error
		console.error('Error in deleting user:\n', error);
		return response.status(500).json({
			message: 'Internal server error.',
			success: false
		});
	}
};
