import crypto from "crypto";
import { HttpError } from "../errors/http.error.js";
import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const generateState = (): string => {
  return crypto.randomBytes(16).toString("hex");
};

export const setStateCookie = (
  res: Response,
  state: string,
  provider: string
) => {
  res.cookie(`oauth_state_${provider}`, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 10 * 60 * 1000, // 10 minutes
  });
};

export const verifyStateCookie = (
  req: Request,
  provider: string,
  state: string
) => {
  const cookieState = req.cookies[`oauth_state_${provider}`];
  if (!cookieState || cookieState !== state) {
    throw new HttpError(403, "Invalid state");
  }
};

export const generateToken = () => {
  return crypto.randomBytes(20).toString("hex");
};

export const generateAuthKey = () => {
  return crypto.randomBytes(16).toString("utf-8");
};

export const sendEmailAuthLink = async (
  email: string,
  token: string,
  authMode: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "kdpcoder@gmail.com",
      pass: "zymtznvwrlyfvlgu",
    },
  });

  const mailOptions = {
    from: "staakX <kdpcoder@gmail.com>",
    to: email,
    subject: "Email Auth",
    text: `Click on the link to ${authMode}: http://localhost:3000/auth/emailCallback?token=${token}`,
    html: `<p>Click on the link to ${authMode}:</p><a href="http://localhost:3000/auth/emailCallback?token=${token}">staakX ${authMode}</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending mail", error);
    throw new Error("Error sending mail");
  }
};
