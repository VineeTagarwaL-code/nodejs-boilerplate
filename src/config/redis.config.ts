import { RedisOptions } from "ioredis";
export const REDIS_CONFIG: {
  redisUri: string;
  redisOptions: RedisOptions;
} = {
  redisUri: process.env.REDIS_URI as string,
  redisOptions: {
    maxRetriesPerRequest: null,
  },
};
