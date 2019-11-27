import axios from "axios";
import User from "../userModel";
import moment from "moment";

const userController = {
  async getHello(req, res) {
    res.send("reply bot");
  },
  // Uc9dadea9b756cc23c8a1d85e45e7e553 userID
  async webhook(req, res) {
    const userID = req.body.events[0].source.userId;
    const EventText = req.body.events[0].message.text;
    // const userID = "Uc9dadea9b756cc23c8a1d85e45e7e553";
    // let EventText = "#reset";
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer A0hAuwVSV5YRFIkaPtx+anlXZ3kjj8AYRi1EE9owSlEXKag7jMcxwVqHN/RjMNR170CAd0AnhBhYtiKZGle1fcnaraSSfkEwGMqGh3vlfePzJKN/f6GDgF2NGlhGzjrCISit33DCS7PSGwGqrzuP6QdB04t89/1O/w1cDnyilFU=`
    };
    let msg: any = {};
    try {
      let data: any = await User.findOne({ lineId: userID });
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
                .utcOffset(7)
                .format("LLL")}`
            }
          ]
        };
      } else if (EventText === "#notification") {
        await User.updateOne({ lineId: userID }, { status: !data.status });
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
        await User.updateOne(
          { lineId: userID, "Iotlist.Iotname": data.Iotlist[0].Iotname },
          {
            "Iotlist.$.total": 0,
            "Iotlist.$.startDate": new Date()
          }
        );
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
                .utcOffset(7)
                .format("LLL")}`
            },
            {
              type: "text",
              text: `to: ${moment()
                .utcOffset(7)
                .format("LLL")}`
            }
          ]
        };
      }
    } catch {
      res.status(400);
    }
    try {
      await axios.post("https://api.line.me/v2/bot/message/push", msg, {
        headers
      });
      console.log("success");
    } catch (err) {
      console.log(err);
    }
    res.sendStatus(200);
  }
};

export default userController;
