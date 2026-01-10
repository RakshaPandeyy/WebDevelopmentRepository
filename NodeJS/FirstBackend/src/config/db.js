import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //connecting the MongoDb
    console.log(`MongoDb connected at: ${conn.connection.host}: ${conn.connection.port}`);
    console.log("Database Name :", conn.connection.name);

    // console.log(conn);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
