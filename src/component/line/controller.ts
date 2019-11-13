import axios from "axios";
import User from "../userModel";
import moment from "moment";

const userController = {
  async getHello(req, res) {
    res.send("reply bot");
  },
  // Uc9dadea9b756cc23c8a1d85e45e7e553 userID
  async webhook(req, res) {
    // const userID = req.body.events[0].source.userId;
    // const EventText = req.body.events[0].message.text;
    const userID = "Uc9dadea9b756cc23c8a1d85e45e7e553";
    let EventText = "#reset";
    let data = await User.findOne({ lineId: userID });
    // let token = req.body.events[0].replyToken;
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 3ip7P+o9dJjibvEcELBCfN5WQYH9EXyLgzK+qW5GXuA6b2MGHdlwRD8P8hom5LZd70CAd0AnhBhYtiKZGle1fcnaraSSfkEwGMqGh3vlfeN3firzOa9PSf8anFoMEfXgMtiuh55kYoUpOwFePCUSXgdB04t89/1O/w1cDnyilFU=`
    };
    let msg: any = {};
    if (EventText === "#total") {
      msg = {
        to: userID,
        messages: [
          {
            type: "text",
            text: `Total ${data.Iotlist[0].total}`
          },
          {
            type: "text",
            text: `The last time was ${moment(data.Iotlist[0].currentDate)
              .local()
              .format("LLL")}`
          }
        ]
      };
    } else if (EventText === "#notification") {
      await User.update({ lineId: userID }, { status: !data.status });
      msg = {
        to: userID,
        messages: [
          {
            type: "text",
            text: `Notification : ${!data.status ? "ON" : "OFF"}`
          }
        ]
      };
    } else if (EventText === "#reset") {
      await User.findOneAndUpdate(
        { lineId: userID },
        { "Iotlist.$.startDate": new Date() }
      );
      // console.log(
      //   await User.findOneAndUpdate(
      //     { lineId: userID },
      //     { "Iotlist.$.total": 1 }
      //   )
      // );
      msg = {
        to: userID,
        messages: [
          {
            type: "text",
            text: `total ${data.Iotlist[0].total}`
          },
          {
            type: "text",
            text: `start at: ${moment(data.Iotlist[0].startDate)
              .local()
              .format("LLL")}}`
          },
          {
            type: "text",
            text: `to: ${moment()
              .local()
              .format("LLL")}`
          }
        ]
      };
    }
    try {
      await axios.post("https://api.line.me/v2/bot/message/push", msg, {
        headers
      });
    } catch (err) {
      console.log(err);
    }
    res.sendStatus(200);
  }
};

export default userController;
