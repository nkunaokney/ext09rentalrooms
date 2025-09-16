import { put } from "@vercel/blob";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { file, filename } = req.body; // the base64 file and filename from frontend
      const { url } = await put('rooms/${filename}', file, { access: "public" });
      res.status(200).json({ url }); // return public URL of uploaded image
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Upload failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
