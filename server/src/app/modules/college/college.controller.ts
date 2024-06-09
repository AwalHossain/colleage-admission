
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { College } from './college.model';


const getAllCollege = catchAsync(
    async (req: Request, res: Response) => {
        const colleges = await College.find();

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'User logged in successfully !',
            data: colleges,
          });

    });


const getCollegeById = catchAsync( async (req: Request, res: Response) => {
    const { id } = req.params;
    const college = await College.findById(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'User logged in successfully !',
        data: college,
      });

});

// search college by name
const searchCollege = catchAsync( async (req: Request, res: Response) => {
    const { name } = req.query;
    const college = await College.find({ name: { $regex: name, $options: 'i' } });

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'User logged in successfully !',
        data: college,
      });

});


export const CollegeController ={
    getAllCollege,
    getCollegeById,
    searchCollege
    
}