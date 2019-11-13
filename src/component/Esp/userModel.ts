// let A = {
//   name: "A",
//   userId: "",
//   Iotlist: [
//     {
//       IotId: "",
//       startDate: "",
//       endDate: "",
//       currentDate: "",
//       total: ""
//     }
//   ]
// };

import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: String,
  age: { type: Number, min: 1, max: 100, default: 15 },
  created_date: { type: Date, default: Date.now }
});

let User = mongoose.model("Users", userSchema);

export default User;
