import OnBoardingController from "../controllers/onboarding.controller.js";
import {
  AuthController,
  handleCallback,
  handleEmailAuth,
  handleEmailCallback,
} from "../controllers/auth.controller.js";
import express, { Request, Response } from "express";

import { providers } from "../lib/auth.providers.js";

export const router = express.Router();

router.get("", (req, res) => {
  res.send("Hello World!");
});

// AUTHENTICATION ROUTES
router.get("/auth/google", (req: Request, res: Response) =>
  AuthController(req, res, "google")
);

router.get("/auth/google/callback", (req: Request, res: Response) =>
  handleCallback(req, res, providers["google"], "google")
);

router.get("/auth/github", (req: Request, res: Response) =>
  AuthController(req, res, "github")
);

router.get("/auth/github/callback", (req: Request, res: Response) =>
  handleCallback(req, res, providers["github"], "github")
);

router.post("/auth/email", (req: Request, res: Response) =>
  handleEmailAuth(req, res)
);

router.post(
  "/auth/email/callback",
  (
    req: Request<
      { token: string },
      {},
      { name: string; authKey: string; email: string }
    >,
    res: Response
  ) => handleEmailCallback(req, res)
);

router.post("/app/onboarding", (req: Request, res: Response) => {
  OnBoardingController;
});

// AI GENERATION ROUTES
