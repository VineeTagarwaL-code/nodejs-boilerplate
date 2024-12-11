import { RateLimiterRule } from "@/types/env";

const MORGAN_FORMAT: string =
  ":remote-addr :method :url :status :response-time ms";
const requiredEnvVars: string[] = ["NODE_ENV", "PORT", "REDIS_URI"];

const OTP_ROUTE_LIMIT: RateLimiterRule = {
  endpoint: "/otp",
  rate_limite: {
    limit: 2,
    time: 60,
  },
};

export { MORGAN_FORMAT, requiredEnvVars, OTP_ROUTE_LIMIT };
