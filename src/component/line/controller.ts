import axios from "axios";
import User from "../userModel";

const userController = {
  async getHello(req, res) {
    res.send("reply bot");
  },

  // Uc9dadea9b756cc23c8a1d85e45e7e553 userID
  async webhook(req, res) {
    console.log(
      await User.findOne({ lineId: "Uc9dadea9b756cc23c8a1d85e45e7e553" })
    );
    let token = req.body.events[0].replyToken;
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 3ip7P+o9dJjibvEcELBCfN5WQYH9EXyLgzK+qW5GXuA6b2MGHdlwRD8P8hom5LZd70CAd0AnhBhYtiKZGle1fcnaraSSfkEwGMqGh3vlfeN3firzOa9PSf8anFoMEfXgMtiuh55kYoUpOwFePCUSXgdB04t89/1O/w1cDnyilFU=`
    };
    let data = {
      to: req.body.events[0].source.userId,
      messages: [
        {
          type: "text",
          text: "เรียกหาพ่องงงงง"
        }
      ]
    };
    // let data = {
    //   replyToken: token,
    //   messages: [
    //     {
    //       type: "text",
    //       text: "เรียกหาพ่องงงงง"
    //     }
    //   ]
    // };
    try {
      await axios.post("https://api.line.me/v2/bot/message/push", data, {
        headers
      });
      // await axios.post("https://api.line.me/v2/bot/message/reply", data, {
      //   headers
      // });
    } catch (err) {
      console.log(err);
    }
    res.sendStatus(200);
  }
};

export default userController;
