import mongoose from 'mongoose';

export const initMongoDBConnection = async () => {
  try {
    const DB_HOST =
      'mongodb+srv://dmytro:yUFYCOZrNUBjAMyj@cluster0.7avbtkp.mongodb.net/db-contacts?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(DB_HOST);
    console.log('Database connection successful');
  } catch (error) {
    console.log('Database connection failed - ', error.message);
    process.exit(1);
  }
};
