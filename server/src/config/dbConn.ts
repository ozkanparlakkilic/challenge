import mongoose from 'mongoose';

const connectDB = async () => {
    const mongoDbUrl = process.env.MONGO_URI ?? '';
    try {
        await mongoose.connect(mongoDbUrl);

        console.log(`MongoDB Connected`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
