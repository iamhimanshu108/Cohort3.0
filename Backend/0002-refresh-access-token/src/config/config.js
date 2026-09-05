import dotenv from 'dotenv'
dotenv.config()


const config = {
    MONGO_URI: process.env.MONGO_URI,
    REFRESH_TOKEN_SECRECT: process.env.REFRESH_TOKEN_SECRECT,
    ACCESS_TOKEN_SECRECT: process.env.ACCESS_TOKEN_SECRECT
}

export default config;