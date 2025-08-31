import mongoose from "mongoose";
import dotenv from "dotenv";
import { env } from "process";
dotenv.config();
const DB_URL = env.DB_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
