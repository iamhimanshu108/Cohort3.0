import mongoose from "mongoose";
import config from "./config.js";

async function connectToDB() {

    await mongoose.connect(config.MONGO_URI)

    console.log("Connect TO DB")
}

export default connectToDB;