"use client";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <img src={product.image} className="w-full rounded-lg" />
      <h2 className="mt-3 text-lg font-semibold tracking-wide">{product.name}</h2>
      <p className="text-sm text-gray-500">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white px-4 py-2 rounded-full w-full hover:bg-gray-900"
      >
        Add to Bag
      </button>
    </div>
  );
}

