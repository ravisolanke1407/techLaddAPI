import express from "express";
import {
  developmentErrors,
  mongoseErrors,
  notFound,
  productionErrors,
} from "./handlers/errorHandlers.js";
import "./models/Form.js";
import path from "path";
import formRouter from "./routes/forms.js";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//INSTANTIATE EXPRESS
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(express.static(`${__dirname}/public`));

app.listen(5000, () => {
  console.log("Server listening on port 🚀 " + 5000);
});

app.use(function (req, res, next) {
  next();
});

app.get("/", (req, res) => {
  res.send("SERVER RUNNIG PORT 5000");
});

app.use("/create", formRouter);

//Setup Error Handlers
app.use(notFound);
app.use(mongoseErrors);
app.use(developmentErrors);
// if (ProcessConfig.ENV === "PRODUCTION") {
// if (process.env.ENV === "DEVELOPMENT") {
//   app.use(developmentErrors);
// } else {
//   app.use(productionErrors);
// }
export { app };
