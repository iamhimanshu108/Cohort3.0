import jwt from 'jsonwebtoken';
import usermodel from '../models/user.model.js';
import dotenv from 'dotenv'


dotenv.config();


export const authentiicate = async(req, res, next) => {
    const token =  req.headers.authorization

    if(!token){
        return res.status(401).json({
            message:"Token nhi hai bhai"
        })
    }

    const data = jwt.verify(token, process.env.JWT_SECRET)

    const user  =  await usermodel.findById(data.id)

    req.user  =  user

    next()


}
