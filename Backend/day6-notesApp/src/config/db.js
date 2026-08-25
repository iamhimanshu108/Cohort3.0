const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/notes-app");
        console.log("DB Connected")
    } catch (error) {
        console.log("error in db", error)
    }
}


module.exports = connectDB;