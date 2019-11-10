import * as line from "@line/bot-sdk";
import controllers from "./controller";

const config = {
  channelAccessToken: process.env.channelAccessToken,
  channelSecret: process.env.channelSecret
};

export function setup(router) {
  router
    .get("/", controllers.getHello)
    .post("/webhook", line.middleware(config), controllers.webhook);
}
