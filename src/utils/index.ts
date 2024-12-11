import { format, parseISO } from "date-fns";

export function formatTimestamp(timestamp: string): string {
  const date = parseISO(timestamp);
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

export function formatRequestLog(message: string): string {
  const [remoteaddr, method, url, status, responseTime] = message.split(" ");
  const statusCode = parseInt(status, 10);
  const color =
    statusCode >= 500
      ? "\x1b[31m"
      : statusCode >= 400
        ? "\x1b[33m"
        : statusCode >= 300
          ? "\x1b[36m"
          : statusCode >= 200
            ? "\x1b[32m"
            : "\x1b[0m";

  const reset = "\x1b[0m";
  const coloredStatus = `${color}${status}${reset}`;

  const formattedLog = `${remoteaddr} -- ${method} - ${url} - ${coloredStatus} - ${responseTime?.trim()}ms`;
  return formattedLog;
}
