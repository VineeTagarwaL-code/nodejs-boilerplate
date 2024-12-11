import "dotenv/config";
import { logger } from "@services/logger";
import { requiredEnvVars } from "@/constants";
import { TEnvConfig } from "@/types/env";
try {
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`${varName}`);
    }
  });
} catch (err) {
  if (err instanceof Error) {
    logger.error(`ENV MISSING | REQUIRED ENVIRONMENT VARIABLE: ${err.message}`);
    process.exit(1);
  }
}
const ENV_CONFIG: TEnvConfig = {
  PORT: parseInt(process.env.PORT as string, 10),
  REDIS_URI: process.env.REDIS_URI as string,
  NODE_ENV: process.env.NODE_ENV as string,
};

export { ENV_CONFIG };
