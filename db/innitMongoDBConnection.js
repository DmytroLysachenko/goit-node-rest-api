import mongoose from 'mongoose';
import { env } from '../helpers/env.js';

export const initMongoDBConnection = async () => {
  try {
    const DB_HOST = env('DB_HOST');
    await mongoose.connect(DB_HOST);
    console.log('Database connection successful');
  } catch (error) {
    console.log('Database connection failed - ', error.message);
    process.exit(1);
  }
};
