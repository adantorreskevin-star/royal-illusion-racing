import { connectDB } from "../../lib/db";
import Part from "../../models/Part";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const parts = await Part.find();
    res.json(parts);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
