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

    // OPTIONAL - create Razorpay order server-side (if you integrate Razorpay)
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_SECRET) {
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const rpOrder = await razorpay.orders.create({
        amount: body.amount, // amount in smallest unit (paise)
        currency: "INR",
        receipt: String(newOrder._id),
        payment_capture: 1,
      });
      // attach rp order id to db order
      newOrder.payment = { provider: "razorpay", order_id: rpOrder.id };
      await newOrder.save();
      return new Response(JSON.stringify({ order: newOrder, razorpayOrder: rpOrder }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }

    // If no Razorpay, return the created DB order (for offline payment/test)
    return new Response(JSON.stringify({ order: newOrder }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
