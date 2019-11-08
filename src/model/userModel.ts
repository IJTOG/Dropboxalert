import mongoose from "mongoose";
// Schema Validation
// let userSchema = mongoose.Schema({
//   firstname: { type: String, required: true },
//   lastname: String,
//   email: { type: String, require: true, lowercase: true, trim: true },
//   age: { type: Number, min: 1, max: 100, default: 15 },
//   status: { type: String, enum: ["active", "pending"], required: true },
//   created_date: { type: Date, default: Date.now }
// });

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: String,
  age: { type: Number, min: 1, max: 100, default: 15 },
  created_date: { type: Date, default: Date.now }
});

const User = mongoose.model("Users", userSchema);

export default User;
