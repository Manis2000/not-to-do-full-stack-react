import mongoose from "mongoose";

const tastSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hr: {
      type: Number,
      default: 50,
      max: 168,
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", tastSchema); // tasks
