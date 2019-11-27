import User from "../userModel";
import axios from "axios";
import moment from "moment";

const userController = {
  async addById(req, res) {
    try {
      await User.update(
        { "Iotlist.Iotname": req.params.id },
        {
          $inc: { "Iotlist.$.total": 1 },
          "Iotlist.$.currentDate": new Date()
        }
      );
      let data: any = await User.findOne({ "Iotlist.Iotname": req.params.id });
      if (data.status === true) {
        let headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer A0hAuwVSV5YRFIkaPtx+anlXZ3kjj8AYRi1EE9owSlEXKag7jMcxwVqHN/RjMNR170CAd0AnhBhYtiKZGle1fcnaraSSfkEwGMqGh3vlfePzJKN/f6GDgF2NGlhGzjrCISit33DCS7PSGwGqrzuP6QdB04t89/1O/w1cDnyilFU=`
        };
        let msg = {
          to: data.lineId,
          messages: [
            {
              type: "text",
              text: `New mail added at ${moment(data.Iotlist[0].currentDate)
                .utcOffset(7)
                .format("LLL")}`
            }
          ]
        };
        await axios.post("https://api.line.me/v2/bot/message/push", msg, {
          headers
        });
      }
    } catch (err) {
      console.log(err);
    }
    res.sendStatus(200);
  }
};
export default userController;
