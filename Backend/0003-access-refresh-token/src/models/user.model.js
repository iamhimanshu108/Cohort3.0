import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "Name Must be at least 3 Char"],
        maxLength: [20, "It will be less than 20"]
    },
    email:{
         type: String,
        required: true,
        unique: true,
        match: /^[]/
    },
    passwordHash:{
        type: String,
        required: true
    },
    refreshToken: {
        type: String,

    }
})

const userModel = mongoose.model("users", userSchema)

export default userModel