
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String },
    email: { type: String, required: true },
    provider: { type: String },
    profileImg: { type: String },
    password: { type: String },
    role: { type: String, default: "user" },
    gender: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

export const UserModal =
  mongoose.models.Users || mongoose.model('Users', userSchema);
