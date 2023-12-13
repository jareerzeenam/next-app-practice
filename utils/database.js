import mongoose from 'mongoose';

let isConnected = false; // track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected!');
    return;
  }

  try {
    // Note: If you have connected to a proxy network Ex: university internet this will refuse connecting to the mongodb
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected!');
  } catch (error) {
    console.log(error);
  }
};
