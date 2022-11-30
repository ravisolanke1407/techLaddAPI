import mongoose from "mongoose";
import { app } from "./app.js";
mongoose
  .connect("mongodb://localhost/SME_Forms")
  .then(() => {
    console.log(`MongoDB Connected To ${"SME_Forms"}`);
  })
  .catch((err) => console.log(err));
