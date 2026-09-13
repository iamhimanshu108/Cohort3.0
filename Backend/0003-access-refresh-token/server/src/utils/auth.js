import jwt from "jsonwebtoken";

import config from "../config/config.js";

export const generateTokens = ({ userId }) => {
    const accessToken = jwt.sign({ userId }, config.ACCESS_TOKEN_SECRECT, {
        expiresIn: "15m"
    })
    const refreshToken = jwt.sign({ userId }, config.REFRESH_TOKEN_SECRECT, {
        expiresIn: "7d"
    })

    return { accessToken, refreshToken }
}

export function verifyAccessToken(token) {
   const decoded =  jwt.verify(token, config.ACCESS_TOKEN_SECRECT) 

   return decoded
}


export function verifyRefreshToken(token) {
   const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRECT)

   return decoded
}
