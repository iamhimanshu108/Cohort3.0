import express from "express"
import {register}  from "../controller/auth.controller.js"
import { registerValidation } from "../validators/auth.validators.js"

const router = express.Router()

/***
 * POST /api/auth/register
 */

router.post("/register", registerValidation,register)


export default router;