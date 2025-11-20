// /components/ProductDetailClient.jsx
"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-3 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <span className="text-xl font-semibold">₹{product.price}</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="number" value={qty} min={1} onChange={(e) => setQty(Number(e.target.value))}
              className="w-20 p-2 border rounded" />
            <button className="bg-black text-white px-4 py-2 rounded" onClick={() => addToCart(product, qty)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
