import jsonwebtoken from "jsonwebtoken";

import config from "../config/config.js";

export const generateAccessToken = ({ userId }) => {
    const accessToken = jsonwebtoken.sign({ userId }, config.ACCESS_TOKEN_SECRECT, {
        expiresIn: "15m"
    })
    const refreshToken = jsonwebtoken.sign({ userId }, config.REFRESH_TOKEN_SECRECT, {
        expiresIn: "7d"
    })

    return { accessToken, refreshToken }
}