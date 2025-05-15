import "express-session";
import { Session, SessionData } from "express-session";

declare module "express-session" {
  interface SessionData {
    state?: string;
    provider?: string;
    user?: {
      id: string;
    }
  }
}

declare global {
  namespace Express {
    interface Request {
      session: Session & SessionData;
    }
  }
}

export interface OnboardingData {
  username: string;
  mission: "learn" | "improve";
  level: "1-4" | "5-7" | "8-10" | "random";
  techStack: string[];
  // reminderTime: "12:00AM" | "01:00AM" | "02:00AM" | "03:00AM" | "04:00AM" | "05:00AM" | "06:00AM" | "07:00AM" | "08:00AM" | "09:00AM" | "10:00AM" | "11:00AM" | "12:00PM" | "01:00PM" | "02:00PM" | "03:00PM" | "04:00PM" | "05:00PM" | "06:00PM" | "07:00PM" | "08:00PM" | "09:00PM" | "10:00PM" | "11:00PM";
}
