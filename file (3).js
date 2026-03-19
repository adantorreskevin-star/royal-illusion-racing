import { connectDB } from "../../lib/db";
import Part from "../../models/Part";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const { name, price, image } = req.body;

      const uploaded = await cloudinary.v2.uploader.upload(image);

      const part = await Part.create({
        name,
        price,
        image: uploaded.secure_url
      });

      res.json(part);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Upload failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
