import { Router } from 'express';
import { signinSchema, signupSchema, validateCreationSchema } from '../validationSchemas/userValidationSchema.js';
import { validator } from '../middleware/unifyValidator.js';
import { signinUser, signupUser, validateUser } from '../businesslogic/usersAuth.js';

const userRouter = new Router();

// Реєстрація користувача
userRouter.post('/signup', validator(signupSchema), signupUser);
// Аутентифікація користувача
userRouter.post('/signin', validator(signinSchema), signinUser);
// Валідація об'єкта
userRouter.post('/validateObject', validator(validateCreationSchema), validateUser);

export { userRouter }