import mongoose, { Schema } from "mongoose";

export interface IAgent {
  name: string;
  rssUrl: string;
  category: string;
  fetchInterval: number; // in minutes
  isActive: boolean;
}

const agentSchema = new Schema<IAgent>(
  {
    name: { type: String, required: true },
    rssUrl: { type: String, required: true },
    category: { type: String, required: true },

    fetchInterval: { type: Number, default: 10 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const AgentModel = mongoose.model<IAgent>("Agent", agentSchema);