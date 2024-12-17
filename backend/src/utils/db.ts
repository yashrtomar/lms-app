import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {

    // initialize to a variable and validate the mongodb connection URI
    const mongoUri: string = process.env.MONGO_URI || '';
    if (!mongoUri) {
        throw new Error('MongoDb connection URI is not defined in the environment variables');
    }
    try {
        // connect to mongodb using connect()
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('MongoDb connected successfully !');
    } catch (error) {
        // handle error
        console.error('Could not connect to MongoDb:\n', error);
    }
};