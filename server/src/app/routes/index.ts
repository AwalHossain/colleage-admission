import express from 'express';
import { CollegeRoutes } from '../modules/college/college.routes';
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
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
