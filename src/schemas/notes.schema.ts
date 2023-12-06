import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    content: String,
    date: Date,
    important: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("note", noteSchema);
