// /app/api/products/route.js
import dbConnect from "../../../lib/mongodb";
import Product from "../../../models/Product";

export async function GET(req) {
  try {
    await dbConnect();
    const products = await Product.find({}).lean();
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
