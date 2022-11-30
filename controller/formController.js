import mongoose from "mongoose";
const Forms = mongoose.model("Forms");
export const createForm = async (req, res) => {
  // Stuff to be added later
  const {
    companyUEN,
    companyName,
    fullName,
    designation: position,
    email,
    phone,
  } = JSON.parse(req.body.values);
  try {
    await Forms.create({
      documentPath: req.file.filename,
      companyUEN,
      companyName,
      fullName,
      position,
      email,
      phone,
    });
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
    });
  } catch (error) {
    throw error;
  }
};
