import jwt from 'jsonwebtoken';

export const authenticateToken = async (request, response, next) => {
  try {
    // extract token (will be received with the requests from frontend using the API endpoints) and validate it
    const token = request.cookies.token;

    if (!token) {
      return response.status(401).json({
        message: 'No token found!',
        success: false,
      });
    }

    // validate the existance of the secret key
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      throw new Error(
        'JWT_SECRET_KEY is not defined in the environment variables.',
      );
    }

    // verify the token using jwt.verify() and handle the issue if it comes up
    const decoded = jwt.verify(token, secretKey);
    if (!decoded) {
      return response.status(401).json({
        message: 'Unauthorized!',
        success: false,
      });
    }

    // set the user id in the params of the request
    request.id = decoded.id;

    // to pass on the control to whatever comes next
    next();
  } catch (error) {
    // handle error
    console.error('Error in authenticating token:\n', error);
    return response.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};
