"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeItem, total } = useCart();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-light tracking-tight mb-8">Your Bag</h1>

      {cart.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-4">
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-2" onClick={() => updateQty(item.id, "dec")}>-</button>
              <span>{item.qty}</span>
              <button className="px-2" onClick={() => updateQty(item.id, "inc")}>+</button>
            </div>

            <p className="font-medium">₹{item.price * item.qty}</p>

            <button className="text-red-600" onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}

      <div className="text-right text-xl font-medium mt-6">
        Total: ₹{total}
      </div>
    </div>
  );
}
