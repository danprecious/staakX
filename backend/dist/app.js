import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { router } from './routes/router.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
