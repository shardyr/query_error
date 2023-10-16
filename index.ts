// import TelegramBot from "node-telegram-bot-api";
// import Web3 from "web3";
// import * as tdl from "tdl";
// import { getTdjson } from "prebuilt-tdlib";

// upstash
import { Redis } from "@upstash/redis";
import * as Q from "@upstash/query";

async function main() {
  const Query = Q.Query;

  const q = new Query({
    redis: Redis.fromEnv({ automaticDeserialization: false }),
  });
}

main();
