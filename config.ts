import { RedisConnectOptions } from 'https://denopkg.com/keroxp/deno-redis/mod.ts';

const baseConfig = JSON.parse(Deno.readTextFileSync('./config.json'));

type Config = {
  readonly token: string,
  readonly redisEnabled: boolean,
  readonly redis: RedisConnectOptions,
  readonly debug: boolean
};

export let config:Config = {
  token: baseConfig.token,
  redisEnabled: baseConfig.redis.enabled,
  redis: {
    hostname: baseConfig.redis.host,
    port: baseConfig.redis.port,
    name: baseConfig.redis.name,
    password: baseConfig.redis.password
  },
  debug: baseConfig.debug
};