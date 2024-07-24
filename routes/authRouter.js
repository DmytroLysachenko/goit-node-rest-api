import express from 'express';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  patchAvatarUser,
  patchSubscriptionUser,
  registerUser,
} from '../controllers/authControllers.js';
import validateBody from '../helpers/validateBody.js';
import {
  loginSchema,
  registerSchema,
  updateUserSubscriptionSchema,
} from '../schemas/authSchemas.js';
import { authenticate } from '../middlewares/authenticate.js';
import upload from '../middlewares/upload.js';

const authRouter = express.Router();

authRouter.post('/register', validateBody(registerSchema), registerUser);

authRouter.post('/login', validateBody(loginSchema), loginUser);

authRouter.post('/logout', authenticate, logoutUser);

authRouter.get('/current', authenticate, getCurrentUser);

authRouter.patch(
  '/subscription',
  authenticate,
  validateBody(updateUserSubscriptionSchema),
  patchSubscriptionUser
);

authRouter.patch(
  '/avatar',
  upload.single('avatar'),
  authenticate,
  patchAvatarUser
);

export default authRouter;
