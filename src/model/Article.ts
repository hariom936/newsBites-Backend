import mongoose, { Schema, Types } from "mongoose";

export interface IArticle {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  category: string;
  sourceAgent: Types.ObjectId;
  hash: string;
}

const articleSchema = new Schema<IArticle>(
  {
    title: String,
    description: String,

    link: { type: String, required: true },
    hash: { type: String, required: true, unique: true },

    pubDate: Date,
    category: String,

    sourceAgent: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
    },
  },
  { timestamps: true }
);

// Index for performance
articleSchema.index({ category: 1, pubDate: -1 });

export const ArticleModel = mongoose.model<IArticle>(
  "Article",
  articleSchema
);