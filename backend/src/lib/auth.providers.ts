import config from "../config/index.js";

export interface OAuthProviderConfig {
  clientId: string | undefined;
  clientSecret: string | undefined;
  authUrl: string;
  tokenUrl: string;
  profileUrl: string;
  scopes: string[];
}

export const providers: Record<string, OAuthProviderConfig> = {
  google: {
    clientId: config.google.clientId,
    clientSecret: config.google.clientSecret,
    authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
    tokenUrl: "https://oauth2.googleapis.com/token",
    profileUrl: "https://openidconnect.googleapis.com/v1/userinfo",
    scopes: ["openid", "profile", "email"],
  },
  github: { 
    clientId: config.github.clientId,
    clientSecret: config.github.clientSecret,
    authUrl: "https://github.com/login/oauth/authorize",
    tokenUrl: "https://github.com/login/oauth/access_token",
    profileUrl: "https://api.github.com/user",
    scopes: ["user:email"],
  },
};
