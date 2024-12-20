import {User} from '../models/user';

export const validateUserRole = async (request, response, next) => {
  try {
    const userId = request.id;
    if (!userId) {
      return response.status(401).json({
        message: 'User not authenticated!',
        success: false,
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({
        message: 'User not found!',
        success: false,
      });
    }

    // Validate user role
    if (user.role !== 'instructor' && user.role !== 'student') {
      return response.status(403).json({
        message: 'Forbidden: User role is not authorized!',
        success: false,
      });
    }

    // Attach the user to the request object for later use
    request.user = user;
    next(); // Proceed to the next middleware or controller
  } catch (error) {
    console.error('Error validating user role:', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};
