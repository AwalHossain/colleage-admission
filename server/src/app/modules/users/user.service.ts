/* eslint-disable @typescript-eslint/consistent-type-definitions */
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { ILoginUserResponse, IUser, UserPref } from './user.interface';
import { User } from './user.model';

interface User extends Document {
  userPreference: UserPref[];
  save: () => Promise<void>;
  _id: string;
}

const createUser = async (user: IUser): Promise<ILoginUserResponse> => {
  const isUserExist = await User.findOne({ email: user.email });
  if (isUserExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already exist');
  }

  const result = await User.create(user);

  //create access token & refresh token

  const { email, role, _id } = result;

  const accessToken = jwtHelpers.createToken(
    { email, role, _id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken,
    ...result.toJSON(),
  };
};

const loginUser = async (user: IUser): Promise<ILoginUserResponse> => {
  const isUserExist = await User.findOne({ email: user.email }).select("+password")

  if (!isUserExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exist');
  }

  console.log(isUserExist, 'isUserExist');


  if (
    isUserExist.password !== user.password
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Password does not match');
  }

  //create access token & refresh token

  const { email, role, _id } = isUserExist;
// remove password from response



  const accessToken = jwtHelpers.createToken(
    { email, role, _id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken,
    ...isUserExist.toJSON(),
  };
};




export const UserService = {
  createUser,
  loginUser,
 
};
