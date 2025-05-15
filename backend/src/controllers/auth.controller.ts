import { Request, RequestHandler, Response } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { HttpError } from "../errors/http.error.js";

import { OAuthProviderConfig, providers } from "../lib/auth.providers.js";
import {
  generateAuthKey,
  generateState,
  generateToken,
  sendEmailAuthLink,
} from "../utils/auth.utils.js";
import axios from "axios";
// import config from "../config/index.js";
import logger from "../utils/logger.js";
import {
  createAuthToken,
  createUser,
  findToken,
  findUserByEmail,
} from "../services/user.service.js";

export const getCallbackUrl = (req: Request, provider: string | undefined) => {
  return `${req.protocol}://${req.get("host")}/auth/${provider}/callback`;
};

export const initiateAuth = (
  req: Request,
  res: Response,
  config: OAuthProviderConfig,
  provider: string
) => {
  try {
    const state = generateState();

    console.log(
      req.session,
      state,
      provider,
      config.clientId,
      config.clientSecret,
      "authurl",
      config.authUrl
    );
    req.session.state = state;
    // req.session.provider = provider;

    const authUrl = new URL(config.authUrl);
    authUrl.searchParams.append("client_id", config.clientId || "");
    authUrl.searchParams.append("redirect_uri", getCallbackUrl(req, provider));
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append("scope", config.scopes.join(" "));
    authUrl.searchParams.append("state", state);

    res.redirect(authUrl.toString());
  } catch (error) {
    logger.error("Error initiating auth", error);
    res
      .status(500)
      .json({ message: "Error initiating auth, please try again" });
  }
};

export const handleCallback = async (
  req: Request,
  res: Response,
  config: OAuthProviderConfig,
  provider: string
) => {
  const { code, state, error } = req.query;

  // verify the state here
  if (state !== req.session.state) {
    throw new HttpError(403, "Invalid state");
  }

  console.log(req.session);

  if (error) {
    throw new HttpError(403, "Authentication failed");
  }

  try {
    const tokenResponse = await axios.post(
      config.tokenUrl,
      {
        client_id: config.clientId,
        client_secret: config.clientSecret,
        code,
        redirect_uri: getCallbackUrl(req, provider),
        grant_type: "authorization_code",
      },
      { headers: { Accept: "application/json" } }
    );

    console.log("Token response", tokenResponse);

    const accessToken = tokenResponse.data.access_token;
    console.log(accessToken);

    const profileResponse = await axios.get(config.profileUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log(profileResponse);
    // create user here with

    const user = await createUser(profileResponse.data, provider);

    if (user && !(user instanceof HttpError)) {
      req.session.user = { id: user.id };
    }

    res.status(200).json({ message: "Auth successful" });
  } catch (error) {
    logger.error("Error authenticating", error);
    throw new HttpError(500, "Internal server error");
  }
};

// SOCIAL AUTH CONTROLLER
export const AuthController = async (
  req: Request,
  res: Response,
  provider: string
) => {
  const config = providers[provider];

  if (!req.session) {
    throw new HttpError(500, "Session not initialized");
  }

  if (!config) {
    throw new HttpError(400, "Invalid provider");
    // res.status(400).json({ message: "Invalid provider" });
  }

  if (req.path.includes(`/auth/${provider}/callback`)) {
    return await handleCallback(req, res, config, provider);
  }

  if (req.path.endsWith("/callback")) {
    return await handleCallback(req, res, config, provider);
    // res.status(200).json({message: "handle callback"})
  }

  initiateAuth(req, res, providers[provider], provider);

  // res.status(200).json({ message: "Auth controller not implemented" });
};

// EMAIL AUTH CONTROLLER
export const handleEmailAuth = async (
  req: Request<{}, {}, { email: string }>,
  res: Response
) => {
  try {
   
    const { email } = req.body;

    console.log(email);
    const token = generateToken();
    console.log(token);
    const expiresAt = new Date(Date.now() + 3600 * 1000);

    const user = await findUserByEmail(email);

    if (user) {
      res.status(401).json({ error: "User already exists" });
    } else {
      const authKey = generateAuthKey();
      const authToken = await createAuthToken(token, expiresAt, email, authKey);

      if (!authToken) {
        res.status(500).json({ error: "Internal server error" });
      }

      await sendEmailAuthLink(email, token, user ? "Sign in" : "Sign up");

      res.status(200).json({ message: "Auth mail sent" });
    }
  } catch (error) {
    console.log("Internal server error");
    res.status(500).json({ error: "Internal server error" });
  }
};

export const handleEmailCallback = async (
  req: Request<
    { token: string },
    {},
    { name: string; authKey: string; email: string }
  >,
  res: Response
) => {
  try {
    const reqToken = req.query?.token as string;

    const { email, name, authKey } = req.body;

    const retrievedToken = await findToken(email, reqToken);

    if (!retrievedToken) {
      res.status(401).json({ error: "Invalid Token" });
    }

    if (authKey !== retrievedToken?.authKey) {
     res.status(401).json({ error: "Invalid AuthKey" });
    }
    const providerId = generateToken();
    const user = await createUser({ email, name, providerId }, "email");

    if (user && !(user instanceof HttpError)) {
      req.session.user = { id: user.id };
    }

    res.status(200).json({ message: "Auth successful" });
  } catch (error) {
    logger.error("Error Authenticating", error);
    res.status(500).json({ error: "Server error: Error Authenticating" });
  }
};
