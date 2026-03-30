import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  category: string;
}

const articleSchema = new Schema(
  {
    title: String,
    description: String,
    link: { type: String, unique: true },
    pubDate: Date,
    category: String,
  },
  { timestamps: true }
);

export const ArticleModel = mongoose.model<IArticle>(
  "Article", // ⚠️ THIS NAME MUST MATCH populate()
  articleSchema
);