import { Client } from "@line/bot-sdk";

require("dotenv").config();
const config = {
  channelAccessToken: process.env.channelAccessToken,
  channelSecret: process.env.channelSecret
};
const client = new Client(config);

const userController = {
  async getHello(req, res) {
    res.send("reply bot");
  },
  async webhook(req, res) {
    res.sendStatus(200);
    // Promise.all(req.body.events.map(this.handleEvent)).then(result =>
    //   res.json(result)
    // );
  },
  async handleEvent(event) {
    console.log(event);
    if (event.type === "message" && event.message.type === "text") {
      this.handleMessageEvent(event);
    } else {
      return Promise.resolve(null);
    }
  },
  async handleMessageEvent(event) {
    let msg: any = {
      type: event.message.type,
      text: event.message.text
    };

    const eventMessageText = event.message.text.toLowerCase();
    if (eventMessageText === "menu") {
      msg = {
        type: "text",
        text: "Select your menu",
        quickReply: {
          items: [
            {
              type: "action",
              imageUrl:
                "https://www.igeargeek.com/wp-content/uploads/2018/09/cropped-38773896_936358296563359_1678814042111606784_n-1.png",
              action: {
                type: "message",
                label: "apply jobs!",
                text: "apply jobs"
              }
            },
            {
              type: "action",
              action: {
                type: "message",
                label: "location",
                text: "location"
              }
            }
          ]
        }
      };
    } else if (eventMessageText === "location") {
      msg = {
        type: "location",
        title: "I GEAR GEEK",
        address: "Malada space",
        latitude: 18.7777264,
        longitude: 98.9513933
      };
    } else if (eventMessageText === "apply jobs") {
      msg = {
        type: "text",
        text: "jobs.igeargeek.com"
      };
    }
    return client.replyMessage(event.replyToken, msg);
  }
};

export default userController;
