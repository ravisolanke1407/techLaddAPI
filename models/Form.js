import mongoose from "mongoose";
const { Schema, model } = mongoose;

const formSchema = new Schema(
  {
    companyUEN: { type: String, trim: true },
    companyName: { type: String, trim: true },
    fullName: { type: String, trim: true },
    position: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    documentPath: { type: String, trim: true },
  },
  { timestamps: true }
);

export default model("Forms", formSchema);
