"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook to Use Cart
export const useCart = () => useContext(CartContext);

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Save cart every time it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        prev[index].qty += 1;
        return [...prev];
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Update quantity
  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};
