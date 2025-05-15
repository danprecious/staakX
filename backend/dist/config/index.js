import dotenv from "dotenv";
import path from "path";
import { env } from "process";
dotenv.config({ path: path.join(__dirname, "../../.env") });
const config = {
    env: env.NODE_ENV || "development",
    port: env.PORT || 5000,
    db: {
        url: process.env.DATABASE_URL || "mongodb://localhost:27017/engmodel",
    },
    cloudinary: {
        api_key: process.env.CLOUDINARY_API_KEY,
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    }
};
export default config;
