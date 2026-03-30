import mongoose, { Schema, Types } from "mongoose";

export interface IAdAnalytics {
  userId: Types.ObjectId;
  adId: Types.ObjectId;

  viewed: boolean;
  clicked: boolean;

  viewedAt?: Date;
  clickedAt?: Date;
}

const adAnalyticsSchema = new Schema<IAdAnalytics>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adId: {
      type: Schema.Types.ObjectId,
      ref: "Ad",
      required: true,
    },

    viewed: { type: Boolean, default: false },
    clicked: { type: Boolean, default: false },

    viewedAt: Date,
    clickedAt: Date,
  },
  { timestamps: true }
);

// 🔥 Ensure UNIQUE tracking per user per ad
adAnalyticsSchema.index({ userId: 1, adId: 1 }, { unique: true });

export const AdAnalyticsModel = mongoose.model<IAdAnalytics>(
  "AdAnalytics",
  adAnalyticsSchema
);