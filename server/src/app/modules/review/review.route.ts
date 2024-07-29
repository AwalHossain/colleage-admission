


import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ReviewController } from './review.controller';


const router = Router();

router.post('/post', 
    auth(ENUM_USER_ROLE.USER),
    ReviewController.postReview);

router.get('/all', ReviewController.getAllReview);
    

router.get('/get/:collegeId', ReviewController.getReviewByCollegeId);


export const reviewRoutes = router;