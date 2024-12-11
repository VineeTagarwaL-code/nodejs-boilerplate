export type TEnvConfig = {
  REDIS_URI: string;
  PORT: number;
  NODE_ENV: string;
};

export interface RateLimiterRule {
  endpoint: string;
  rate_limite: {
    time: number;
    limit: number;
  };
}
