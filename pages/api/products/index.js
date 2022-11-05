import dbConnect from "../../../lib/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (req.method === "POST") {
    try {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
