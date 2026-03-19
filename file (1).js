import mongoose from "mongoose";

const PartSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

export default mongoose.models.Part || mongoose.model("Part", PartSchema);
