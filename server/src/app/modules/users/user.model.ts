import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const authSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  token:{
    type:String
  }

});

export const User = model<IUser, UserModel>('auth', authSchema);
