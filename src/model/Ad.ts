import mongoose, { Schema } from "mongoose";

export interface IAd {
  title: string;
  imageUrl: string;
  targetUrl: string;
  category: string;
  isActive: boolean;
}

const adSchema = new Schema<IAd>(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    targetUrl: { type: String, required: true },

    category: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const AdModel = mongoose.model<IAd>("Ad", adSchema);