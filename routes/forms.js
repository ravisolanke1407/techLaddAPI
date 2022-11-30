import express from "express";
import { catchErrors } from "../handlers/errorHandlers.js";
import * as formController from "../controller/formController.js";
import multer from "multer";

const formRouter = express.Router();
//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/${file.fieldname}-${Date.now()}.${ext}`);
  },
});
// Multer Filter
const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!!"), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
formRouter.post(
  "/",
  upload.single("pdfDoc"),
  catchErrors(formController.createForm)
);

export default formRouter;
