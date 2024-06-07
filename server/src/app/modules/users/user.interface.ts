/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: string;
  _id: string;
  userPrefernce?: UserPref[];
  readingList?: string[];
  finishedBooks?: string[];

};

export type UserPref = {
  book: string;
  status: string;
  updatedAt: Date;
};

export type ILoginUserResponse = {
  refreshToken?: string;
  accessToken: string;
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'email' | 'password' | '_id' | 'role'>>;
  isPasswordMatch(
    givenPassword: string,
    savePassword: string
  ): Promise<boolean>;
} & Model<IUser>;
