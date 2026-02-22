import mongoose from "mongoose";
import { config } from "../config";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(config.DB_URL as string);

        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection Failed due to :', error);
        process.exit(1);
    }
};
