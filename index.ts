import { Redis } from "@upstash/redis";
import { Query } from "@upstash/query";

async function main() {
  const q = new Query({
    redis: Redis.fromEnv({ automaticDeserialization: false }),
  });
}

main();
