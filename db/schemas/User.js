import mongoose, { model } from 'mongoose';
import { mongoSaveError, setMongoUpdateSettings } from './hooks.js';
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', mongoSaveError);
userSchema.pre('findOneAndUpdate', setMongoUpdateSettings);
userSchema.post('findOneAndUpdate', mongoSaveError);

export const User = model('user', userSchema);