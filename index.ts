// import TelegramBot from "node-telegram-bot-api";
// import Web3 from "web3";
// import * as tdl from "tdl";
// import { getTdjson } from "prebuilt-tdlib";

// upstash
import { Redis } from "@upstash/redis";
import { Query } from "@upstash/query";

async function main() {
  const q = new Query({
    redis: Redis.fromEnv({ automaticDeserialization: false }),
  });
}

main();
