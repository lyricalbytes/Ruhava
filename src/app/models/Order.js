// /models/Order.js
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  items: [
    {
      productId: String,
      title: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],
  amount: Number,
  currency: { type: String, default: "INR" },
  status: { type: String, default: "created" }, // created, paid, shipped etc.
  createdAt: { type: Date, default: Date.now },
  payment: {
    provider: String, // razorpay/instamojo
    order_id: String, // provider order id
    payment_id: String,
  }
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
