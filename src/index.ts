import express from "express";
import morgan from "morgan";
import { ENV_CONFIG } from "./config/env.config";
import { router } from "@/routes";
import { logger } from "@/services/logger";
import { formatRequestLog } from "./utils";
import { MORGAN_FORMAT } from "./constants";

const app = express();

app.use(
  morgan(MORGAN_FORMAT, {
    stream: {
      write: (message) => {
        logger.info(formatRequestLog(message));
      },
    },
  })
);
app.use(express.json());
app.use("/api/v1", router);

app.listen(ENV_CONFIG.PORT, () => {
  logger.info(`Server is running on port ${ENV_CONFIG.PORT}`);
});
