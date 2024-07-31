import { Request, Response } from "express";
import mongoose from "mongoose";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { User } from "../users/user.model";
import { Admission } from "./admission.model";


const addmission = catchAsync(async (req: Request, res: Response) => {
    const {name, subject, email, phone, address, dob, image, collegeId} = req.body;
    const userId = req?.user?._id;

    // const session = 

    const admissionData = {
        name,
        subject,
        email,
        phone,
        address,
        dob,
        image,
        user:userId,
        college:collegeId
    };
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const result = await Admission.create(admissionData);

        const updateUser = await User.findOneAndUpdate({_id: userId}, {$push: {myCollege: result._id}},{
            new: true,
        });

        console.log(updateUser, 'updateUser');
        

        await session.commitTransaction();
        session.endSession();
        
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Admission added successfully !',
            data: result,
        });



    }catch(err){
        await session.abortTransaction();
        session.endSession();
        sendResponse(res, {
            statusCode: 400,
            success: false,
            message: 'Admission added failed !',
            data: err,
        });
    }

    console.log(admissionData, 'admissionData');




});

const getAdmission = catchAsync(async (req: Request, res: Response) => {
    const admissionData = req.body;
    const userId = req?.user?._id;
    console.log(admissionData, 'admissionData',userId, 'userId');
    const result = await Admission.find().populate('college').lean();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Admission added successfully !',
        data: result,
    });

});


export const  admissionController ={
    addmission,
    getAdmission
}