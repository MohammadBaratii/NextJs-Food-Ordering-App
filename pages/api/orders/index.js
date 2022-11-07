import dbConnect from "../../../lib/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (req.method === "POST") {
    try {
      const orders = await Order.create(req.body);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
