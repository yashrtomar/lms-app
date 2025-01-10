import jwt from 'jsonwebtoken';

export const createSecretToken = id => {
  // initialize secretkey and validate
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    throw new Error(
      'JWT_SECRET_KEY is not defined in the environment variables.',
    );
  }

  // create token
  return jwt.sign({id}, secretKey, {expiresIn: 1 * 24 * 60 * 60});
};
