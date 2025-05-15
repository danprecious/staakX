import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/router.js";
import session from "express-session";
import { errorHandler } from "./middleware/error.middleware.js";
import { HttpError } from "./errors/http.error.js";
import { Request, Response, NextFunction } from "express";
import { validateSession } from "./middleware/validateSession.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  session({
    secret: "your-secret-key", 
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    },
  })
);



app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 