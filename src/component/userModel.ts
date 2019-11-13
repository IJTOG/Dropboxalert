import mongoose, { Schema } from "mongoose";

let userSchema: Schema = new Schema({
  name: { type: String },
  status: { type: Boolean, required: true },
  lineId: { type: String, required: true },
  Iotlist: [
    {
      Iotname: { type: String, required: true },
      startDate: { type: Date },
      currentDate: { type: Date },
      total: { type: Number, min: 1, max: 1000, required: true }
    }
  ]
});

let User = mongoose.model("Users", userSchema);

export default User;
