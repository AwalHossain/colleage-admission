import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = Router();

router.post(
  '/create',
  validateRequest(UserValidation.loginRegistrationZodSchema),
  UserController.createUser
);
router.post(
  '/login',
  validateRequest(UserValidation.loginRegistrationZodSchema),
  UserController.loginUser
);

router.put(
  '/update/:id',
  auth(ENUM_USER_ROLE.USER),
  UserController.updateProfile
);

router.post(
  '/reset-password',
  UserController.sendResetToken
);
router.post(
  '/forget-password',
  UserController.forgetPasswordToken
);

router.post(
  '/reset-password/:id/:token',
  UserController.verifyToken
);

router.post("/social-media-login", UserController.socialMediaLogin);

router.get('/me', auth(ENUM_USER_ROLE.USER,ENUM_USER_ROLE.ADMIN), UserController.getMe);

export const UserRoutes = router;
