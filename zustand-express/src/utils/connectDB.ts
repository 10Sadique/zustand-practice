import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDb = async () => {
  const dbUri = process.env.MONGO_URI as string;

  try {
    await mongoose.connect(dbUri);
  } catch (error) {
    process.exit(1);
  }
};

export default connectToDb;
