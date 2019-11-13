import User from "../userModel";
import axios from "axios";
import moment from "moment";

const userController = {
  async addById(req, res) {
    console.log("Hereeeeeeeee");
    // try {
    //   let data = await User.findOneAndUpdate(
    //     { "Iotlist.Iotname": req.params.id },
    //     {
    //       $inc: { "Iotlist.$.total": 1 },
    //       "Iotlist.$.currentDate": new Date()
    //     }
    //   );
    //   if (data.status === true) {
    //     let headers = {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer 3ip7P+o9dJjibvEcELBCfN5WQYH9EXyLgzK+qW5GXuA6b2MGHdlwRD8P8hom5LZd70CAd0AnhBhYtiKZGle1fcnaraSSfkEwGMqGh3vlfeN3firzOa9PSf8anFoMEfXgMtiuh55kYoUpOwFePCUSXgdB04t89/1O/w1cDnyilFU=`
    //     };
    //     let msg = {
    //       to: data.lineId,
    //       messages: [
    //         {
    //           type: "text",
    //           text: `New mail added at ${moment(data.Iotlist[0].currentDate)
    //             .local()
    //             .format("LLL")}`
    //         }
    //       ]
    //     };
    //     await axios.post("https://api.line.me/v2/bot/message/push", msg, {
    //       headers
    //     });
    //   }
    // } catch (err) {
    //   console.log("error");
    // }
    res.sendStatus(200);
  }
};
export default userController;
