import { Request, Response } from 'express';
import catchAsync from "../../../shared/catchAsync";
import sendResponse from '../../../shared/sendResponse';
import { Review } from "./review.model";



const postReview = catchAsync( async (req: Request, res: Response) => {
    const { content, rating, collegeId } = req.body;
    const userId = req?.user?._id;
    console.log(userId, 'userId');
    
    const reviewData = {
        content,
        rating,
        user:userId,
        college: collegeId
    }
    const result = await Review.create(reviewData);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Review added successfully !',
        data: result,
      });
});


const getAllReview = catchAsync( async (req: Request, res: Response) => {
    console.log("just checking it");
    
    const reviews = await Review.find().populate("user").populate("college").lean();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Review added successfully !',
        data: reviews,
      });
});


const getReviewByCollegeId = catchAsync( async (req: Request, res: Response) => {
    const { collegeId } = req.params;
    const reviews = await Review.find({ college: collegeId }).populate('user').sort({ createdAt: -1 });
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Review added successfully !',
        data: reviews,
      });
});


export const ReviewController ={
    postReview,
    getAllReview,
    getReviewByCollegeId
}