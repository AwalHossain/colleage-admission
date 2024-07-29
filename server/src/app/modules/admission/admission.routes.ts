

import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { admissionController } from './admission.controller';


const router = Router();

router.post(
  '/create',
auth(ENUM_USER_ROLE.USER),
  admissionController.addmission
);


router.get('/get', auth(ENUM_USER_ROLE.USER), admissionController.getAdmission);

export const AdmissionRoutes = router;
