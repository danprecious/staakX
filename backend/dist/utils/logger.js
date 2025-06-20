import winston from "winston";
import config from "../config/index.js";
const { combine, timestamp, printf, colorize, align } = winston.format;
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});
const logger = winston.createLogger({
    level: config.env === "development" ? "debug" : "info",
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), config.env === "development"
        ? combine(colorize(), align(), logFormat)
        : winston.format.json(), winston.format.errors({ stack: true })),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
        new winston.transports.File({
            filename: "logs/combined.log",
        }),
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: "logs/exceptions.log",
        }),
    ],
});
process.on("unhandledRejection", (reason) => {
    throw reason;
});
export default logger;
