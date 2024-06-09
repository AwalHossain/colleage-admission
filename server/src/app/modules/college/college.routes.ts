import { Router } from 'express';
import { CollegeController } from './college.controller';

const router = Router();


router.get('/all', CollegeController.getAllCollege);
router.get('/get/:id', CollegeController.getCollegeById);
router.get('/search', CollegeController.searchCollege);
export const CollegeRoutes = router;
