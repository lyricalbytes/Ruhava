// /app/api/orders/route.js
import dbConnect from "../../../lib/mongodb";
import Order from "../../../models/Order";
// Optional: Razorpay for live payment order creation
import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const body = await req.json();
    // body: { items: [...], amount: 12345 } amount in paise if INR
    await dbConnect();

    const newOrder = await Order.create({
      items: body.items,
      amount: body.amount,
      currency: "INR",
      status: "created"
    });

   
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
