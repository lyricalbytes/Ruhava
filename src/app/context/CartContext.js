// /context/CartContext.js
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // load cart from localStorage on mount
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("ruhava_cart") : null;
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // persist cart on changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ruhava_cart", JSON.stringify(cart));
    }
  }, [cart]);

  // add item (if exists, increase qty)
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.productId === product._id);
      if (idx > -1) {
        // update quantity
        const copy = [...prev];
        copy[idx].quantity += qty;
        return copy;
      } else {
        return [...prev, {
          productId: product._id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: qty
        }];
      }
    });
  };

  const updateQuantity = (productId, qty) => {
    setCart(prev => prev.map(i => i.productId === productId ? { ...i, quantity: qty } : i));
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(i => i.productId !== productId));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
