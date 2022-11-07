import dbConnect from "../../../lib/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const {
      query: { slug },
    } = req;

    try {
      const order = await Order.findById(slug);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
