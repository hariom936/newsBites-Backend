import mongoose, { Schema } from "mongoose";

export interface IUser {
  userName: string;
  userEmail: string;
  password: string;
  role: "USER" | "ADMIN";

  preferences: string[];
  savedArticles: mongoose.Types.ObjectId[];

  session?: {
    sessionId: string;
    expiresOn: Date;
  };
}

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },

    preferences: [{ type: String }],
    savedArticles: [{ type: Schema.Types.ObjectId, ref: "Article" }],

    session: {
      sessionId: String,
      expiresOn: Date,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);