import { Router } from "express";   
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, verifyAccessToken, verifyRefreshToken } from "../utils/auth.js";

const router =  Router();

/***
 * @POST /api/auth/register
 */
router.post("/register", async (req,res) =>{
    const {name, email, password} = req.body
    
    const isUserExits  = await userModel.findOne({email})

    if (isUserExits) {
        return res.status(400).json({
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
    const { accessToken, refreshToken } = generateTokens({ userId: user._id })
    user.refreshToken = refreshToken
    await user.save();

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "lax",
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

/***
 * @GET /api/auth/me
 */

router.get("/me", async (req,res) =>{

    const accessToken = req.headers.authorization?.split(" ")[ 1 ]

    try {
        const decoded =  verifyAccessToken(accessToken)
        
        const user = await userModel.findById(decoded.userId)

        if (!user) {
            return res.status(401).json({ message: "Unauthorized, user not found" })
        }

        res.status(200).json({
            message: "User Fetched Succefully",
            data :{
                user: {
                    name : user.name,
                    email : user.email
                }
            }
        })
    } catch (error) {
        return res.status(401).json({
            message : "Unauthorized, Invalid or Expired Access Token",

        })
    }

})

/***
 * @POST /api/auth/refresh
 */

router.post("/refresh", async (req,res) =>{
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken) {
        return res.status(401).json({
            message: "Unauthorized, refresh token not found",
        })
    }

    try {
        const decoded = await verifyRefreshToken(refreshToken)

        const user = await userModel.findById(decoded.userId)

        if (!user) {
            return res.status(401).json({ message: "Unauthorized access" })
        }

        if(refreshToken !== user.refreshToken){
            user.refreshToken = null
            await user.save()

            return res.status(401).json({
                message: "Unauthorized access"
            })
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: user._id })

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            sameSite: "lax",
        })

        user.refreshToken = newRefreshToken
        await user.save()   

        res.status(200).json({
            message: "Access Token Refreshed",
            data: { accessToken },
        })

    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized, Invalid or expired",
      })  
    }
})

export default router;
