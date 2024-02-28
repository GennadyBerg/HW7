import { Router } from 'express';
import { signinSchema, signupSchema, validateCreationSchema } from '../validationSchemas/userValidationSchema.js';
import { validator } from '../middleware/unifyValidator.js';
import { signinUser, signupUser, validateUser } from '../businesslogic/usersAuth.js';

const userRouter = new Router();

userRouter.post('/signup', validator(signupSchema), signupUser);
userRouter.post('/signin', validator(signinSchema), signinUser);
userRouter.post('/validateObject', validator(validateCreationSchema), validateUser);

export { userRouter }