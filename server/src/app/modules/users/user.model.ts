import mongoose, { Schema, model } from 'mongoose';
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
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  token:{
    type:String
  },
  photoURL:{
    type:String,
  },
  myCollege:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admission',
  }]
},
{
  timestamps: true,
}
);

export const User = model<IUser, UserModel>('Auth', authSchema);
