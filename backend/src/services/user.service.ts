import logger from "../utils/logger.js";
import prisma from "../lib/prisma.js";
import { HttpError } from "../errors/http.error.js";

export const findToken = async (email: string, token: string) => {
  const retrievedToken = await prisma.userAuthToken.findFirst({
    where: {
      email: email,
      token,
      expiresAt: { gt: new Date() },
    },
  });

  return retrievedToken;
};



export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  return user;
};

export const findUser = async (providerId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      providerId: providerId.toString(),
    },
  });
  return user;
};

export const createUser = async (profile: any, provider: string) => {
  try {
    if (provider === "email") {
      const user = await findUserByEmail(profile?.email);
      if (user) {
        logger.error("User already exists", user);
        throw new HttpError(409, "User already exists");
      }

      const createdUser = await prisma.user.create({
        data: {
          name: profile?.name,
          email: profile?.email,
          provider: provider,
          providerId: profile?.providerId,
        },
      });

      return createdUser;
    }

    const user = await findUser(profile?.id || profile?.sub);

    const id = (profile?.id || profile?.sub).toString();

    if (!user) {
      const response = await prisma.user.create({
        data: {
          name: profile.name,
          email: profile.email,
          image: profile.picture || profile.avatar_url,
          provider: provider,
          providerId: id,
        },
      });

      return response;
    }
  } catch (error) {
    logger.error("Error creating user", error);
    return new HttpError(500, "Server Error: Error creating user");
  }
};

export const updateUser = async (data: {
  id: string;
  username: string;
  level: string;
  mission: string;
  techStack: string[];
}) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        username: data.username,
        level: data.level,
        mission: data.mission,
        techStack: data.techStack,
      },
    });

    return user;
  } catch (error) {
    logger.error("Error updating user", error);
    return new HttpError(500, "Server Error: Error Updating User");
  }
};

export const createAuthToken = async (
  token: string,
  expiresAt: Date,
  email: string,
  authKey: string
) => {
  try {


    const existingToken = await prisma.userAuthToken.findFirst({
      where: {
        email: email, 
      }
    })

    if (existingToken) {
      return existingToken;
    }

    const updatedToken = await prisma.userAuthToken.create({
      data: {
        email,
        token,
        expiresAt,
        authKey,
      },
    });
    return updatedToken;
  } catch (error) {
    logger.error("Error creating auth token", error);
    throw new Error("Error creating auth token");
  }
};

export const clearAuthToken = async () => {
  try {
  } catch (error) {}
};
