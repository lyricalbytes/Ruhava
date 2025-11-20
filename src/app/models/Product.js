// /models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  description: String,
  price: Number,           // in smallest currency unit or decimal as you prefer
  image: String,
  stock: Number,
}, { timestamps: true });

// Avoid model overwrite in dev
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
