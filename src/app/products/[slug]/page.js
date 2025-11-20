// /components/ProductCard.jsx
"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-3" />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold">₹{product.price}</span>
        <div>
          <button onClick={() => addToCart(product, 1)} className="bg-black text-white px-3 py-1 rounded mr-2">Add</button>
          <Link href={`/products/${product.slug}`} className="text-sm text-gray-700 underline">View</Link>
        </div>
      </div>
    </div>
  );
}
