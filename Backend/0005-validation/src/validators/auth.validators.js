import { body, validationResult } from "express-validator"



export const registerValidation = [
    body("email")
        .exists().withMessage("Email is Required")
        .isEmail().withMessage("Invalid Email Address"),

    body('phone')
        .exists().withMessage("Phone no is Required")
        .isMobilePhone("en-IN").withMessage("Invalid Phone Number"),

    body('password')
        .exists().withMessage("Password is required")
        .trim().islength({ min: 6 }).withMessage("Password at least 6 Characters Long"),
        (req,res, next) => {
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    message: "Invalid Request",
                    erros: errors.array()
                })
            }

            next()
        }


]