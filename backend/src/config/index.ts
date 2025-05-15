import dotenv from "dotenv";
import path from "path";
import { env } from "process";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.join(__dirname, "../../.env") });


const config = {
  env: env.NODE_ENV || "development",
  port: env.PORT || 5000,
  db: {
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/techLevelUp",
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
    frontendUri: process.env.FRONTEND_URI, 
  },  
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    redirectUri: process.env.GITHUB_REDIRECT_URI,
    frontendUri: process.env.FRONTEND_URI,
  },
  authUrl: "",

};




export default config;