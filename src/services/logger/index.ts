/***
 *
 * The logger is used to log request related information. It uses the winston library to log information to a file and to Loki.
 * you can use logger.info for sending non-error infos
 * you can use logger.error for sending error infos
 * you use use logger.warn for sending warning infos
 *
 */
import winston, { format, createLogger, transports } from "winston";
import { formatTimestamp } from "@/utils";
const { combine, timestamp, printf, colorize } = format;
import path from "path";
const customFormat = printf(({ level, message, timestamp }) => {
  return `[ ${formatTimestamp(
    timestamp as string
  )} ] -  ${level} -  ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), customFormat),

  transports: [
    new transports.Console(),
    new winston.transports.File({
      filename: path.join("logs", "response.log"),
    }),
  ],
});

export { logger };
