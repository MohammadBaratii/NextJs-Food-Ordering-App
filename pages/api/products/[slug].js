import dbConnect from "../../../lib/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  dbConnect();

  if (req.method === "GET") {
    const {
      query: { slug },
    } = req;

    try {
      const product = await Product.findById(slug);
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (req.method === "PUT") {
    try {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (req.method === "DELETE") {
    try {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
