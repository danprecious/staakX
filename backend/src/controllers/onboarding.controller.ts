import { Request, Response } from "express";
import logger from "../utils/logger.js";
import { OnboardingData } from "../types/index.js";
import { updateUser } from "../services/user.service.js";
import { HttpError } from "../errors/http.error.js";

const OnBoardingController = async (req: Request, res: Response) => {
  try {
    const data: OnboardingData = req.body;
    const { level, mission, techStack, username } = data;
    logger.info("Onboarding User", data);

    if (!username || !mission || !level || !techStack) {
      logger.error("Missing required fields");
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (techStack.length < 1) {
      logger.error("Tech stack must have at least one item");
      return res
        .status(400)
        .json({ message: "Tech stack must have at least one item" });
    }

    //  get userId from session
    if (!req.session.user) {
      logger.error("User not authenticated");
      return res.status(401).json({ message: "User not authenticated" });
    }

    const userId = req.session.user.id;

    const updateData = { id: userId, username, level, mission, techStack };

    const user = await updateUser(updateData);

    if (!user) {
      logger.error("Error Updating User", user);
      return res
        .status(500)
        .json({ message: "Server Error: Error Updating User" });
    }

    if (user && !(user instanceof HttpError)) {
      const { provider, providerId, id, ...rest } = user;

      res
        .status(200)
        .json({ message: "User onboarded succesfully", user: rest });
    }
  } catch (error) {
    logger.error("Error Onboarding User", error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Please try again later" });
  }
};

export default OnBoardingController;
