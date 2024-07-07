import mongoose from 'mongoose';

const { DB_HOST } = process.env;

export const initMongoDBConnection = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log('Database connection successful');
  } catch (error) {
    console.log('Database connection failed - ', error.message);
    process.exit(1);
  }
};
