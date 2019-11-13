import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: { type: String },
  userId: { type: String, required: true },
  Iotlist: [
    {
      IotId: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      currentDate: { type: Date, default: Date.now },
      total: { type: Number,min: 1, max: 1000, required: true }
    }
  ]
});

let User = mongoose.model("Users", userSchema);

export default User;
