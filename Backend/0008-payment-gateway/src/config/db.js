import config from "./config.js";

import mongoose from "mongoose";

export default async function () {
    await mongoose.connect(config.MONGODB_URI);

    console.log("Database connected successfully");
};