import { Router } from "express";   
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../utils/auth.js";

const router =  Router();

router.post("/register", async (req,res) =>{
    const {name, email, password} = req.body
    
    const isUserExits  = await userModel.findOne({email})

    if (isUserExits) {
        return res.status(400),json({
            message: "User already exits",
            errors: [
                {
                    path: "email",
                    message : "User already exits"
                }
            ]
        })
    }

    const user =  await userModel.create({
        name,
        email,
        passwordHash: await bcrypt.hash(password, 12)
    })
    const { accessToken, refreshToken } = generateAccessToken({ userId: user._id })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    })

    res.status(201).json({
        message: "User created successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
                id: user._id
            },
            accessToken
        }
    })
    

})

export default router;