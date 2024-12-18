import {User} from '../models/user.model';
import bcrypt from 'bcryptjs';
import {createSecretToken} from '../utils/createSecretToken';
import {deleteMediaFromCloudinary, uploadMedia} from '../utils/cloudinary';

export const signUp = async (request, response) => {
  try {
    // Extract data (payload) from request body
    const {name, email, password, role} = request.body;

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
        success: false,
      });
    }

    // Check if user already exists through email
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return response.status(403).json({
        message:
          'User with this email already exists! Try another email or try logging in if you already have an account.',
        success: false,
      });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // generate token and send to the browser
    const token = createSecretToken(user._id);
    response.cookie('token', token, {httpOnly: false});

    // return success message along with data and a boolean value to work with
    return response.status(200).json({
      message: 'User created successfully!',
      data: user,
      success: true,
    });
  } catch (error) {
    // handle the error
    console.error('Error in creating user:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const login = async (request, response) => {
  try {
    // Extract data (payload) from request and workspace id from request params
    const {email, password} = request.body;

    // data validation, return error based on condition
    if (!email || !password) {
      const message = !email
        ? 'Please enter email to login!'
        : 'Password is required to login!';
      return response.status(400).json({message, success: false});
    }

    // Check if user with these credentials exists, if not, send an error message and a boolean value to work with
    const user = await User.findOne({email: email});
    if (!user) {
      return response.status(404).json({
        message:
          'User with this email does not exist! Please enter the correct one or Create an account.',
        success: false,
      });
    }

    // Check if password matches
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return response.status(401).json({
        message: 'Password you entered is incorrect!',
        success: false,
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
      coursesEnrolledIn: user.coursesEnrolledIn,
    };

    // generate token and send it with success message, data and a boolean value to work with in response
    const token = createSecretToken(user._id);
    return response
      .cookie('token', token, {httpOnly: false})
      .status(200)
      .json({
        message: `Welcome back ${user?.name}`,
        data: loggedInUser,
        success: true,
      });
  } catch (error) {
    // handle error
    console.error('Error in logging in:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const logout = async (request, response) => {
  try {
    // just delete the token by setting its age to 0 and send success message and a boolean value to work with
    return response.cookie('token', '', {maxAge: 0}).json({
      message: 'User logged out successfully!',
      success: true,
    });
  } catch (error) {
    // handle error
    console.error('Error in logging out:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};

export const updateUser = async (request, response) => {
  try {
    // Extract data (payload) from request and user id from request
    const userId = request.id;
    const {email, password} = request.body;
    const profilePicture = request.file;

    // check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({
        message: 'User not found!',
        success: false,
      });
    }

    if (user.profilePicture) {
      // extract publicId of the image on cloudinary
      const publicId = user.profilePicture.split('/').pop()?.split('.')[0];
      await deleteMediaFromCloudinary(publicId);
    }

    if (profilePicture) {
      const cloudResponse = await uploadMedia(profilePicture?.path);
      profilePicture = cloudResponse.secure_url;
    }
    const updatedData = {
      ...(email && {email}),
      ...(password && password),
      ...(profilePicture && {profilePicture}),
    };

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    }).select('-password');

    // send success message, updated user data and a boolean value to work with
    return response.status(200).json({
      message: 'Your profile has been updated',
      data: updatedUser,
      success: true,
    });
  } catch (error) {
    // handle error
    console.log('Error in updating the user:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
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
        success: false,
      });
    }

    // Query to delete user
    await User.findByIdAndDelete(userId);

    // respond with success message and boolean value to work with
    return response.status(200).json({
      message: 'Your account has been deleted!',
      success: true,
    });
  } catch (error) {
    // handle error
    console.error('Error in deleting user:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};
