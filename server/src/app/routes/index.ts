import express from 'express';
import { AdmissionRoutes } from '../modules/admission/admission.routes';
import { CollegeRoutes } from '../modules/college/college.routes';
import { reviewRoutes } from '../modules/review/review.route';
import { UserRoutes } from '../modules/users/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/college',
    route: CollegeRoutes,
  },
  {
    path: "/admission",
    route: AdmissionRoutes
  },
  {
    path: "/review",
    route: reviewRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
