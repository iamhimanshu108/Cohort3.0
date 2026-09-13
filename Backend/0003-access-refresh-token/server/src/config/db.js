import mongoose  from "mongoose";
import config from "./config.js";
async function  connectDB() {
    if (!config.MONGO_URI) {
        throw new Error("MONGO_URI is missing. Add it to your .env file.");
    }

    await mongoose.connect(config.MONGO_URI);
    console.log("MongoDB connected");
}

export default connectDB;
