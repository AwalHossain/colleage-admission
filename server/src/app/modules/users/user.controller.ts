import { Request, RequestHandler, Response } from 'express';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import sendMail from '../../../helpers/sendMail';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { User } from './user.model';
import { UserService } from './user.service';


const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;
    console.log(userData, 'userData');

    const result = await UserService.createUser(userData);
    // const { refreshToken, ...others } = result;


    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User logged in successfully !',
      data: result,
    });
  }
);

const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;
    console.log(userData, 'userData');

    const result = await UserService.loginUser(userData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User logged in successfully !',
      data: result,
    });
  }
);

// send mail using nodemailer

const sendResetToken = catchAsync(
  async (req: Request, res: Response) =>  {

  const user = await User.findOne({ email: req.body.email });
  if (!user)
      return res.status(400).send("user with given email doesn't exist");
    let token;
  if (!user?.token) {
    // create a new token
       token  =  jwtHelpers.createToken({ userId: user._id }, process.env.JWT_SECRET as string, '365d');
        user.token = token;
     await user.save();
  }else{
    token = user.token;
  }

  const link = `${config.clientUrl}/reset-password/${user._id}/${token}`;
  const text = `
      <div style="text-align: center;">
        <h1 style="color: #444;">Password Reset</h1>
        <p style="color: #666 ;">You have requested to reset your password. Click the link below to reset it.</p>
        <a href="${link}" style="display: inline-block; margin: 20px auto; padding: 10px 20px; color: #fff; background-color: #007BFF; text-decoration: none;">Reset Password</a>
        <p style="color: #666;">If you did not request this, please ignore this email.</p>
      </div>
    `;
    const subject = "Password Reset";
  await sendMail(user.email, subject, text);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Password reset link sent to your email account !',
  });

});
const forgetPasswordToken = catchAsync(
  async (req: Request, res: Response) =>  {

  const user = await User.findOne({ email: req.body.email });
  if (!user){
    throw new ApiError (401,"user with given email doesn't exist");
  }
      
    let token;
  if (!user?.token) {
    // create a new token
       token  =  jwtHelpers.createToken({ userId: user._id }, process.env.JWT_SECRET as string, '365d');
        user.token = token;
     await user.save();
  }else{
    token = user.token;
  }

  const link = `${config.clientUrl}/reset-password/${user._id}/${token}`;
  const text = `
      <div style="text-align: center;">
        <h1 style="color: #444;">Password Reset</h1>
        <p style="color: #666 ;">You have requested to reset your password. Click the link below to reset it.</p>
        <a href="${link}" style="display: inline-block; margin: 20px auto; padding: 10px 20px; color: #fff; background-color: #007BFF; text-decoration: none;">Reset Password</a>
        <p style="color: #666;">If you did not request this, please ignore this email.</p>
      </div>
    `;
    const subject = "Password Reset";
  await sendMail(user.email, subject, text);

 
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Password reset link sent to your email account !',
  });

});

// verify token

const verifyToken = catchAsync( async (req: Request, res: Response) => {

  const user = await User.findOne({
      _id: req.params.id,
      token: req.params.token,
  });

  console.log(user, 'user', req.params.id, req.params.token);
  
  if (!user?.token)  {
   throw new ApiError(400, 'Invalid or expired token !');
  }

  user.password = req.body.password;
  user.token = '';
  await user.save();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Password reset successfully !',
  });
});

const getMe = catchAsync(async (req: Request, res: Response) => {
  const id = req.user?._id;
  console.log(id, 'check');

  const user = await User.findById(id).lean();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User profile !',
    data: user,
  });
});

export const UserController = {
  createUser,
  loginUser,
  getMe,
  sendResetToken,
  verifyToken,
  forgetPasswordToken
};
