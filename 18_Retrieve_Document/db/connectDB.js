import mongoose, { mongo } from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "collagedb",
    };
    mongoose.set("strictQuery", false);
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Database Connected..");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
